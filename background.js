var msg = new SpeechSynthesisUtterance();
var voices = window.speechSynthesis.getVoices();
msg.voice = voices[10];
// msg.voiceURI = 'native';
msg.volume = 1; // 0 to 1
msg.lang = 'ru-RU';

var texts = getTextArr();

setTimeout(function () {
    speak(texts.Support[0]);
}, 5000);

function speak(text) {
    msg.text = text;
    speechSynthesis.speak(msg);
}

// Get texts from json
function getTextArr() {
    //TODO: pull texts from json

    return {
        Support: ["Красавчик", "Так держать", "Хочешь я дам тебе миллион долларов?"],
        Progress: ["Хватит в игры играть", "Иди работай"]
    };
}
