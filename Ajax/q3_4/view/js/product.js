$(function(){
    onAdd();
})

function onAdd(){
    $('.list').submit((e) => {
        const data = {id: $(e.target).attr('id')};
        console.log(data);
        $.post('/addToCart',{
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8"
        }).done(onSuccess)
        .fail(onFail);
        return false;
    })
}

function onSuccess(res){
    console.log('success ');
    $('#count').text(res);

}

function onFail(){
    console.log('fail ');

}