var all_button=document.getElementsByTagName('header');

var all_button2=document.getElementsByTagName('footer');



console.log(all_button);
var copyallButton=[];
for(let i=0;i<all_button.length;i++ ){
    copyallButton.push(all_button[i].classList[1]);
}

console.log(all_button2);
var copyallButton2=[];
for(let i=0;i<all_button2.length;i++ ){
    copyallButton2.push(all_button2[i].classList[1]);
}






console.log(copyallButton);
console.log(copyallButton2);

function buttonColorChange(buttonthingy){
   // console.log(buttonthingy.value);
if(buttonthingy.value=='red'){
    buttonRed();
 
}

else if(buttonthingy.value=='green'){
    buttonGreen();
  
}
else if(buttonthingy.value=='yellow'){
    buttonyellow();
 
}
else if(buttonthingy.value=='blue'){
    buttonblue();
   
}
}

//2

function buttonColorChange2(buttonthingy2){
    // console.log(buttonthingy.value);
 if(buttonthingy2.value=='red2'){
    
     buttonRed2();
 }
 
 else if(buttonthingy2.value=='green2'){

     buttonGreen2();
 }
 else if(buttonthingy2.value=='yellow2'){
    
     buttonyellow2();
 }
 else if(buttonthingy2.value=='blue2'){
    
     buttonblue2();
 }
 }
//2..
function buttonblue(){
    for(let i=0;i<all_button2.length;i++){
        all_button2[i].classList.remove(all_button2[i].classList[1]);
   
        all_button2[i].classList.add('btn-primary');
    }
}

function buttonblue2(){
    for(let i=0;i<all_button2.length;i++){
        all_button2[i].classList.remove(all_button2[i].classList[1]);
   
        all_button2[i].classList.add('btn-primary');
    }
}







function buttonRed(){
    for(let i=0;i<all_button.length;i++){
        all_button[i].classList.remove(all_button[i].classList[1]);
   
        all_button[i].classList.add('btn-danger')
    }
}





function buttonRed2(){
    for(let i=0;i<all_button2.length;i++){
     all_button2[i].classList.remove(all_button2[i].classList[1]);

     all_button2[i].classList.add('btn-danger')
    }
}





function buttonGreen(){
    for(let i=0;i<all_button.length;i++){
        all_button[i].classList.remove(all_button[i].classList[1]);
   
        all_button[i].classList.add('btn-success');
    }
}


function buttonGreen2(){
    for(let i=0;i<all_button2.length;i++){
     all_button2[i].classList.remove(all_button2[i].classList[1]);

     all_button2[i].classList.add('btn-success');
    }
}





// function buttonColorReset(){
//     for(let i=0;i<all_button.length;i++){
//         all_button[i].classList.remove(all_button[i].classList[1]);
   
//         all_button[i].classList.add('btn-primary');
//     }
// }






// function buttonColorReset2(){
//     for(let i=0;i<all_button2.length;i++){
//         all_button2[i].classList.remove(all_button2[i].classList[1]);
   
//         all_button2[i].classList.add('btn-primary');
//     }
// }


function buttonyellow(){
    for(let i=0;i<all_button.length;i++){
        all_button[i].classList.remove(all_button[i].classList[1]);
   
        all_button[i].classList.add('btn-warning');
    }
}






function buttonyellow2(){
    for(let i=0;i<all_button2.length;i++){
        all_button2[i].classList.remove(all_button2[i].classList[1]);
   
        all_button2[i].classList.add('btn-warning');
    }
}
