/**
 * Created by Omar on 12/05/14.
 */
window.onload = start;


    function start()
{
document.getElementById("confirm").onclick = confirm;
}

function confirm()
{
    console.log("clicked");
    document.getElementById("movingBallG").style.display = "block";
    setTimeout(wrongPassword,2000);

}

function wrongPassword()
{
    document.getElementById("movingBallG").style.display = "none";
    document.getElementById("wrongPassword").style.display = "block";
}