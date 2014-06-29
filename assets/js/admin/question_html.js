

$('#question-content').keyup(function(){
    Preview.update();
})
var Preview = {
    delay: 150,        // delay after keystroke before updating

    timeout: null,     // store setTimout id
    mjRunning: false,  // true when MathJax is processing
    oldText: null,     // used to check if an update is needed
    preview:document.getElementById("MathPreview"),
    content:document.getElementById('question-content'),

    update: function () {
        if (this.timeout) {clearTimeout(this.timeout)}
        this.timeout = setTimeout(this.callback,this.delay);
    },
    convertJax:function() {
        Preview.timeout = null;
        if (this.mjRunning) return;
        var text = this.content.value;
        if (text === this.oldtext) return;
        this.preview.innerHTML=this.oldText = text;

        this.mjRunning = true;
        MathJax.Hub.Queue(
            ['Typeset',MathJax.Hub,this.preview],
            ["PreviewDone",this]
        );
    },
    PreviewDone: function () {
        this.mjRunning = false;
    }

};
Preview.callback=MathJax.Callback(["convertJax",Preview]);
Preview.callback.autoReset = true;


