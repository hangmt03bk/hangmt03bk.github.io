

function load(){
    "use strict";
    var aniValue =[],aniIndex = 0;
    var timer;
    var starBtn, stopBtn, animation, textArea, fontSize, turbo, curText;

    starBtn     = document.getElementById("start");
    stopBtn     = document.getElementById("stop");
    animation   = document.getElementById("animation");
    textArea    = document.getElementById("text-area");
    fontSize    = document.getElementById("fontsize");
    turbo       = document.getElementById("turbo");

    starBtn.onclick     = start;
    stopBtn.onclick     = stop;
    fontSize.onchange   = sizeChange;
    turbo.onchange      = speedChange;
    function start(){
        starBtn.disabled = true;
        stopBtn.disabled = false;
        animation.disabled = true;
    
        curText = textArea.value;
        timer = setInterval(intervalTimeout,250);
        /*global ANIMATIONS */
        aniValue = ANIMATIONS[animation.value].split("=====\n");
        aniIndex = 0;
    }
    
    function stop(){
        starBtn.disabled = false;
        stopBtn.disabled = true;
        animation.disabled = false;
        clearInterval(timer);
        timer = null;
        textArea.value = curText;
    }
    
    function sizeChange(){
        textArea.style.fontSize = fontSize.value;
    }
    
    function speedChange(){
        if(timer == null)   return;
        var interval = turbo.checked==true?50:250;
        clearInterval(timer);
        timer = setInterval(intervalTimeout,interval);
    }
    
    function intervalTimeout(){
        if(aniValue.length == 0)    return;
        textArea.value = aniValue[aniIndex++];
        if(aniIndex == aniValue.length) aniIndex = 0;
    }
    
}

window.onload = load;
