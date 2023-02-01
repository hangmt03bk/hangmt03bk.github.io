$(function(){
    $('#start').click(start);
    $(document).mousemove(play);
    $('.boundary').mouseenter(endGame);
    $('#end').mouseenter(endGame);
})
var game = 0; //0: none 1:playing
var offX = 0, offY = 0;
function start(e){
    if(game == 1) return true;
    $('#status').text('...playing...');
    $('.boundary').removeClass('youlose');
    $('#start').css('cursor', 'none');
    offX = e.offsetX; offY = e.offsetY;
    game = 1;
}

function play(e){
    if(game == 0)   return true;
    let left = e.clientX -$('#maze').offset().left - offX;
    let top = e.clientY -$('#maze').offset().top - offY;
    $('#start').css({'top': top, 'left': left});
    if(top < 0 || top > $('#maze').height() - $('#start').height()) endGame(e);
}

function endGame(e){
    if(game == 0)   return true;
    if($(e.target).attr('id') == 'end')
        $('#status').text('You win! :] . Click the "S" to begin.');
    else{
        $('#status').text('You lose! :[ . Click the "S" to begin.');
        $('.boundary').toggleClass('youlose');
    }
    $('#start').css({'top': 205, 'left': 0});
    $('#start').css('cursor', 'default');
    game = 0;
}
