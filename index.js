let date;
let intervalId;
const start = document.getElementById('start');
const stop = document.getElementById('stop');

const reset = document.getElementById('reset');

const content = document.getElementById('content');

start.onclick = (()=>{
       date = new Date();

       intervalId=setInterval(currentTime,1000);

});

function currentTime(){
    let currentDate= new Date();


    let diffSeconds = currentDate.getSeconds() - date.getSeconds();
    let diffMinutes = currentDate.getMinutes() - date.getMinutes();
    let diffHours = (currentDate.getHours() - date.getHours());
    diffSeconds.toString().padStart(2, '0');
    if (diffSeconds < 0) {
        diffSeconds += 60;
        diffMinutes--;
    }

    if (diffMinutes < 0) {
        diffMinutes += 60;
        diffHours--;
    }

    const formattedSeconds = diffSeconds.toString().padStart(2, '0');
    const formattedMinutes = diffMinutes.toString().padStart(2, '0');
    const formattedHours = diffHours.toString().padStart(2, '0');

    // Update the content display
    content.textContent = `${formattedHours} : ${formattedMinutes} : ${formattedSeconds}`;


    // content.textContent = `${diffHours} : ${diffMinutes} : ${diffSeconds}`;


}




stop.onclick = (()=>{
    clearInterval(intervalId);
})



reset.onclick = () => {
    clearInterval(intervalId);

    content.textContent = `0 : 0 : 0`;
};







