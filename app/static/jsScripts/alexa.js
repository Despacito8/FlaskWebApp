window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
alert('kill ur self')
let alexa = new SpeechRecognition();
let przycisk = document.querySelector('input');
function sluchaj(e){
    alert("i can hear u")
    console.dir(e.results[0][0].transcript)
}
alexa.addEventListener('result',sluchaj)
//alexa,addEventListener('end',alexa.start)

przycisk.addEventListener("click",function(e){
    alert('u have been awarded with a friend')
    alexa.start()
})