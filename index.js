// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log (`I'm ${age} years old. Happy birthday to me!`);
    
}

const gifts = ["teddy bear", "drone", "doll"];
function wrapGifts(gifts){
    for (let i = 0; i< gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bowl`);
       
    }
    return gifts;
}
wrapGifts(gifts);

function writeCards(names,events){
const cards= [];
for (let i=0; i < names.length; i++){
    let message =`Thank you, ${names[i]}, for the wonderful ${events} gift!`
    cards.push(message);   
}
return cards;

}

function countDown (number){
    while (number >= 0){
        console.log (number--);
    }
}
