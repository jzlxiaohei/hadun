/**
 * Created by zilong on 2014/6/24.
 */
var curGroup = 'categories';

$('#tabs').on('click','.edit',function(){
    var self = $(this);
    var $value = self.siblings('.value');
    var oldValue = $value.text();
    $value.html('<input class="update-value" data-old="'+oldValue+'" value="'+oldValue+'">')
    $value.find('.update-value').focus();
    self.removeClass('edit').addClass('save').text('保存');
});
$('#tabs').on('click','.save',function(){
    var self = $(this);
    var $newValue = self.siblings('.update-value');
    var oldValue = $newValue.attr('data-old');
    var newValue = $newValue.val();
    if(oldValue!=newValue){
        var key = self.siblings('.key').text();
        var group = curGroup;
        //$.post({}).done(function(){})
        console.log(key+':'+group);
    }
});

$("#submit-new-group").click(function(){
    var gName = $("#input-group-name").val().trim();
    var gNameCn = $("#input-group-name-cn").val().trim();
    if(gName && gNameCn){
        //post
        $('#tab-titles').append('<div class="tab-title" data-group="'+gName+'">'+gNameCn+'</div>');

        $('#popup-new-group').modal('hide')
    }else{
        alert('组名及其中文名不能为空')
    }
})

