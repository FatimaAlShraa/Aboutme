'use strict';


console.log('good')
let userName=prompt("what's your name?")
let score=0;
alert('Hello ' + userName);
function qONE(){

    let firstAsk=prompt('Do I like sleep?');
    
    firstAsk=firstAsk.toLowerCase();
    
    if(firstAsk==='yes'){
       // console.log('that is right');
        alert('that is right');
        score++
    }if (firstAsk==='no'){
       // console.log('no i love it');
        alert('no i love it');
    }
    
    else{
       // console.log('answer yes or no');
    }return firstAsk
}qONE()


function secQ(){
    
    let secondAsk=prompt("Do  I like food ?")
    
    secondAsk=secondAsk.toUpperCase();
    
    if(secondAsk==='YES'){
        //console.log('that is right');
        alert('that is right');
       score++
    }if (secondAsk==='NO') {
        //console.log('no i love it');
        alert('no i love it');
    }
    
    else{
       // console.log('answer yes or no');
        alert('answer yes or no');
    }return secondAsk
}
secQ()
function thirdQ(){

    let thirdAsk=prompt("Do I have so much money?")
    
    thirdAsk=thirdAsk.toLowerCase();
    
    if(thirdAsk==='yes'){
       // console.log('no it is wrong');
        alert('no it is wrong');
    
    }if (thirdAsk==='no') {
       // console.log('you are right');
        alert('you are right');
        score++
    }
    
    else{
       // console.log('answer yes or no');
        alert('answer yes or no');
    }return thirdAsk
}
thirdQ()

function fourQ(){
    let fourthAsk=prompt("Do I like Mercedece car?")
    
    fourthAsk=fourthAsk.toLowerCase();
    
    if(fourthAsk==='yes'){
       // console.log('that is right');
        alert('that is right');
       score++
    }if (fourthAsk==='no') {
        //console.log('no i really love it');
        alert('no i really love it');
    }
    
    else{
        //console.log('answer yes or no');
        alert('answer yes or no');
    }return fourthAsk
}fourQ()
function fiveQ(){

    let fifthAsk=prompt("Do you annoyed from my question?")
    
    fifthAsk=fifthAsk.toUpperCase();
    
    if(fifthAsk==='YES'){
        //console.log('it is uo to you');
        alert('it is up to you');
    
    }if (fifthAsk==='NO') {
       // console.log('no i love it');
        alert('no i love it');
        score++
    }
    
    else{
        console.log('answer yes or no');
        alert('answer yes or no');
    
    }return fifthAsk
}fiveQ()
     function qSixe(){

         let sixthAsk=prompt("Please gusse number that I think about it , it's between 0 to 7");
          //sixthAsk-parseInt(sixthAsk);
         let answer=3
            for(let i=0 ; i<5 ;i++){
             if(sixthAsk==answer){
                 console.log("the answer is true")
                 score++
                 break;
                 
             }
               else if(sixthAsk<answer){
                 sixthAsk=prompt('it is too low');
                }
         
                else if(sixthAsk>answer){
                  sixthAsk=prompt ("it's too high");
                }  
         
             else{
                 alert("try again with number value")
             }
         
            
         
             
         
              } 
              alert('my correct answer is 3')
              return sixthAsk
     }qSixe()

     let bestColor=prompt("what is my favourite color?")
     let myChose=['pink' , 'black']
     bestColor.toLowerCase();

     for(let j=0 ; j<7 ; j++){

        if(bestColor==myChose[0] || bestColor==myChose[1]){
           alert("your answer right") 
           score++  
           break;
                   
        }
    else{
        bestColor=prompt("try again ")
    }
     }


    alert('welcome in website  ' + userName +'your score is ' + score );