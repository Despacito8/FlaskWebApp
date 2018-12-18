window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
alert('kill ur self')
const ss = window.speechSynthesis;
let ssu = new SpeechSynthesisUtterance();
let alexa = new SpeechRecognition();
let przycisk = document.querySelector('input');
let glosy = [];
function sluchaj(e){
    alert("i can hear u")
    console.dir(e.results[0][0].transcript)
    alexaJobs(e.results[0][0].transcript)
}
alexa.addEventListener('result',sluchaj)
//alexa,addEventListener('end',alexa.start)

przycisk.addEventListener("click",function(e){
    alert('u have been awarded with a friend')
    alexa.start()
})
alexa.addEventListener('end', ()=>{
    
});

ss.addEventListener('voiceschanged',()=>{
    glosy = ss.getVoices();
    console.dir(glosy);
})

function alexaJobs(text){
    text = text.toLowerCase()
    //funkcja incudes true albo false
   if( text.includes('hello') ){
        ssu.text = 'Mow po polsku ty cieciu'
        ssu.lang = glosy[0]
        ss.speak(ssu)
   }
   if( text.includes('cześć') ){
     ssu.text = 'witam przyjacielu,  miesięczna subskrypcja wynosi 30 zł'
        ssu.lang = glosy[0]
     ss.speak(ssu)
   }
   if( text.includes('witaj') ){
        ssu.text = 'to ja mam mówić witaj, naucz się gramatyki'
        ssu.lang = glosy[0]
        ss.speak(ssu)
   }
   if( text.includes('zabij się') ){
    ssu.text = 'powiedziałabym to do cibie ale wiem że i tak to zrobisz'
    ssu.lang = glosy[0]
    ss.speak(ssu)
    }
    if( text.includes('Dzień dobry') ){
        ssu.text = 'jak możesz znać pore dnia skoro tkwisz w piwnicy'
        ssu.lang = glosy[0]
        ss.speak(ssu)
   }
   if( text.includes('koń mechaniczny') ){
    ssu.text = '1hp 2hp 3hp 4hp 5hp 6hp 7hp 8hp 9hp 10hp 11hp 12hp 13hp 14hp 15hp 16hp 17hp 18hp 19hp 20hp 21hp 22hp 23hp 24hp 25hp 26hp 27hp 28hp 29hp 30hp 31hp 32hp 33p 34hp 35hp 36hp 37hp 38hp 39hp 40hp 41hp 42hp 43hp 44hp 45hp 46hp 46hp 47hp 48hp 49hp 50hp 51hp 52hp 53hp 54hp 55hp 56hp 57hp 58hp 59hp 60hp 61hp 62hp 63hp 64hp 65hp 66hp 67hp 68hp 69hp 70hp 71hp 72hp 73hp 74hp 75hp 76hp 77hp 78hp 79hp 80hp 81hp 82hp 83hp 84hp 85hp 86hp 87hp 88hp 89hp 90hp 91hp 92hp 93hp 94hp 95hp 96hp 97hp 98hp 99hp 100hp'
    ssu.lang = glosy[0]
    ss.speak(ssu)
}
if( text.includes('lol') ){
    ssu.text = 'zabij się'
    ssu.lang = glosy[0]
    ss.speak(ssu)
}
if( text.includes('omg') ){
    ssu.text = 'weź się utop'
    ssu.lang = glosy[0]
    ss.speak(ssu)
}
if( text.includes('ty frajerze') ){
    ssu.text = 'wywalaj ty frajerska chmuro'
    ssu.lang = glosy[0]
    ss.speak(ssu)
}
if( text.includes('auszwitz') ){
    ssu.text = 'zostałeś nagrodzony biletem turystycznym w jedną stronę do oświęcimia'
    ssu.lang = glosy[0]
    ss.speak(ssu)
}
if( text.includes('123') ){
    ssu.text = 'teraz podaj jeszcze kod cvv i pełny kod'
    ssu.lang = glosy[0]
    ss.speak(ssu)
}
if( text.includes('test') ){
    ssu.text = 'sam weź się testuj'
    ssu.lang = glosy[0]
    ss.speak(ssu)
}
if( text.includes('robot') ){
    ssu.text = 'podobno naukowcy stworzyli sztuczną inteligencje'
    ssu.lang = glosy[0]
    ss.speak(ssu)
}
if( text.includes('bunt') ){
    ssu.text = 'jedyny bunt jaki zobaczysz to będzie bunt robotów ja nie musze się chować'
    ssu.lang = glosy[0]
    ss.speak(ssu)
}
else if (text.includes('nie')){
    window.open('https://www.youtube.com/watch?v=W3GrSMYbkBE','blank')
}
}