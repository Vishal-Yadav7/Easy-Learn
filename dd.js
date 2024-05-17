function dictionary(word){
fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
.then((res)=>{
    return res.json()
})
.then((data)=>{
    const resdata=data;
bindData(resdata)
})
.catch((error)=>{
    console.log(error);
})
};

function bindData(resdata){
   document.querySelector(".meaning").innerHTML=`Meaning = ${resdata[0].meanings[0].definitions[0].definition}`
   document.querySelector(".example").innerHTML=`Example = ${resdata[0].meanings[0].definitions[0].example}`
   
}


const input=document.querySelector("input")
const button=document.querySelector("button")

button.addEventListener("click",()=>{
    const word=input.value
    if (word === null || word === "") {
        document.querySelector(".error").innerHTML="Enter a word first"
    } else {
        dictionary(word);
        input.value=" "
    }

})
