$(function(){
    onSubmit();
    onFocus();
})

function successFunc(res){
    console.log('success: ' + res);
    $('#text').val(res);
}

function errorFunc(){
    console.log('failed');
}

function onFocus(){
    $('#text').focus(() => {
        $('#text').val('');
    })
}
function onSubmit(){
    $('#QA').submit(() => {
        //console.log('send request');
        const data = {quest: $('#text').val()};
        $('#submit').focus();
        $.get('/8ball',{
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8"
        }).done(successFunc)
        .fail(errorFunc);
        return false;
    });
}

