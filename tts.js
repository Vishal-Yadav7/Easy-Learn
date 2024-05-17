function populateVoiceList(){
if(typeof speechSynthesis==="undefined"){
  return;
}//if the speech synthesis is undefined itt returns the value
const voices=speechSynthesis.getVoices()
const voiceSelect=document.getElementById("voiceSelect")
voices.forEach(element => {
  const option=document.createElement("option")
  option.textContent=`${element.name} ${element.lang}`
  option.setAttribute("data-lang",element.lang)
  option.setAttribute("data-name",element.name)
  voiceSelect.appendChild(option)
});

}


populateVoiceList()

if (typeof speechSynthesis !=="undefined" &&
speechSynthesis.onvoiceschanged !=="undefined") {
speechSynthesis.onvoiceschanged=populateVoiceList  
}

document.querySelector("button").addEventListener("click",()=>{
  const input = document.querySelector("textarea").value;
  const synth = window.speechSynthesis;
  const selectedOptions = document.getElementById("voiceSelect").selectedOptions[0];
  console.log(selectedOptions);
  const speech= new SpeechSynthesisUtterance(input)
  speech.voice=synth.getVoices().find(voice=> voice.name === selectedOptions.getAttribute("data-name"))
  
  synth.speak(speech)

})
