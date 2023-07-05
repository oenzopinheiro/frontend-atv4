const inputOne = document.querySelector('#inputOne')
const inputTwo = document.querySelector('#inputTwo')
const inputThree = document.querySelector('#inputThree')
const inputFive = document.querySelector('#inputFive')
const inputSix = document.querySelector('#inputSix')
const inputSeven = document.querySelector('#inputSeven')
const callElement = document.querySelector('#text5')
const call1Element = document.querySelector('#text55')
const call2Element = document.querySelector('#text7')
const call3Element = document.querySelector('#text9')
const call4Element = document.querySelector('#text10')
const call5Element = document.querySelector('#text11')
let call = 0
let call1 = 0
let call2 = 0
let call3 = 0
let call4 = 0
let call5 = 0

function calculate(){


    call = Math.floor( Number(inputOne.value)  / Number(inputTwo.value) / Number(inputThree.value) ) 
    callElement.innerHTML = call
    call2 = Number(inputOne.value)
    call2Element.innerHTML = call2
    call3 = Number(inputThree.value) * Number(inputTwo.value)
    call3Element.innerHTML = call3

} function calculate1(){
 call1 = Math.floor( Number(inputFive.value)  * Number(inputSix.value) * Number(inputSeven.value) ) 
 call1Element.innerHTML = call1
 call4 = Number(inputFive.value)
 call4Element.innerHTML = call4
 call5 = Number(inputSix.value)
 call5Element.innerHTML = call5
}
