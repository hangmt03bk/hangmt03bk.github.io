$(function(){
    $('#startBtn').click(start);
})

var color =['red','green','blue','pink','brown','yellow',
            'orange','aqua','gray','purple','darkgreen','darkred'];
var timer;

function getNewCircle(index, leftPos){
    
    let circle = $('<div>',{
        'css': {
            'width': $('#width').val(),
            'height': $('#width').val(),
            'left': leftPos,
            'background-color': color[index]
        },
        'class': 'circle'
    })
    return circle;
}
function start(){
    if($('#startBtn').val() == 'stop'){
        return stop();
    }
    $('.circle').remove();
    let num = parseInt($('#numCircle').val());
    for(let i = 0; i < num; i++){
        let leftPos = 100*(i+1)/(num+1) + '%';
        let circle = getNewCircle(i,leftPos);
        $('body').prepend(circle);
    }
    $('#startBtn').val('stop');
    $('.circle').click(removeCircle);
    $('.circle').mousemove(opaqueCircle);
    $('.circle').mouseout(fullCircle);
    timer = setInterval(incCircle,$('#growRate').val(), parseInt(($('#growAmount').val())));
    //console.log('start');
}
function stop(){
    clearInterval(timer);
    $('#startBtn').val('start');
}

function incCircle(amount){   
    $('.circle').height((idx,cur) => cur + amount)
                .width((idx,cur) => cur + amount);
}

function removeCircle(e){
    e.target.remove();
}

function opaqueCircle(e){
    $(e.target).css('opacity', '-=' + 0.001);
}

function fullCircle(e){
    $(e.target).css('opacity', '1');
}