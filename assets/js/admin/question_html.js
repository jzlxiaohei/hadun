

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


$('#new-question-form').submit(function(e){
    e.preventDefault();
    var content = $('#question-content',this).val();
    if(content.trim()===''){
        alert('题干不能为空')
        return;
    }
    var type = $('input[name=choice-type]:checked', this).val()
    var choices=[];
    var firstFalseIndex=0,
        lastValueIndex=0;
    $('.input-choice',this).each(function(index,item){
        var value = $(this).val().trim();
        if(value!==''){
            choices.push(value);
            lastValueIndex = index+1;
        }else{
            if(!firstFalseIndex){
                firstFalseIndex = index+1;
            }

        }
    })
    if(choices.length<4){
        alert('至少应该有4个选项');
        return;
    }
    if(firstFalseIndex<lastValueIndex){
        alert('答案中间不能跳项');
        return;
    }
    var ansMap=['A','B','C','D','E'];
    var ans = [];
    $('.answer-flag',this).each(function(index,item){
        if($(this).hasClass('right')){
            ans.push(ansMap[index]);
        }
    })
    if(ans.length==0){
        alert('必须至少有一个正确答案');
        return;
    }
    if(type==1&&ans.length>1){
        alert('单选只能有一个正确答案');
        return;
    }

    $.ajax({
        type:'post',
        url:'/admin/question/create',
        data:{
            content:content,
            type:type,
            choices:choices.join('#'),
            ans:ans.join(',')
        }
    })
})

$('#new-question-form .answer-flag').click(function(){
    var type = $('input[name=choice-type]:checked', this).val();
    $(this).toggleClass('right');
})

