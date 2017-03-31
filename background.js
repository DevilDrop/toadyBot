var msg = new SpeechSynthesisUtterance();
var voices = window.speechSynthesis.getVoices();
msg.voice = voices[10]; // Note: some voices don't support altering params
// msg.voiceURI = 'native';
// msg.volume = 1; // 0 to 1
// msg.text = 'Девченки, как дела?';
// msg.lang = 'ru-RU';
msg.text = 'Hey biches, whats up?';
msg.lang = 'en-US';

speechSynthesis.speak(msg);