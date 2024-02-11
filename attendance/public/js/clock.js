let hrs = document.getElementById('hrs');
let mins = document.getElementById('mins');
let secs = document.getElementById('secs');

setInterval(() => {
    currentTime = new Date();
    currentTime.getHours() < 10 ? hrs.innerHTML = `0${currentTime.getHours()}` : hrs.innerHTML = currentTime.getHours();
    currentTime.getMinutes() < 10 ? mins.innerHTML = `0${currentTime.getMinutes()}` : mins.innerHTML = currentTime.getMinutes();
    currentTime.getSeconds() < 10 ? secs.innerHTML = `0${currentTime.getSeconds()}` : secs.innerHTML = currentTime.getSeconds();
});

function showInput()
{
    var input = document.getElementById('input');
    if(input.getAttribute('gg') == 'text')
    {
        input.style.width = '200px';
        input.setAttribute('gg', 'notText');
    }
    else
    {
        input.style.width = '0px';
        input.setAttribute('gg', 'text');
    }

}
