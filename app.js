$(function(){

function flipCard(card){
    card.toggleClass("flipped")
}


$(".app").on("click",".card",function(){
    flipCard($(this));
})

let colClasses = ["col1","col2","col3"];
$.getJSON("animals.json",function(data){
    Object.keys(data).forEach((front,i)=>{
        let back = data[front];
        console.log(front,back)
        let newCard = '<div class="card">';
        newCard +=`<div class="front cardface">${front}</div>`
        newCard +=`<div class="back cardface">${back}</div>`
        newCard = $(newCard);
        $(".app").append(newCard);

    })
})



})