const pause = document.querySelector(".pause");
const plays = document.querySelector(".play");
const video = document.querySelector(".video-container");
pause.addEventListener("click",function()
{
    video.pause();
});
plays.addEventListener("click",function()
{
    video.play();
});