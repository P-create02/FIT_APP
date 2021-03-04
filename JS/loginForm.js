$(".options-02 a").click(function(){
    $("form").animate({
       height: "toggle", opacity: "toggle" 
    }, "slow");
});


// Video w spowolnionym tempie
document.querySelector('video').playbackRate = 0.7