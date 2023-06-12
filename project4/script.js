let clock=document.getElementsByClassName("time");
let ampm=document.getElementsByClassName("para2");
function time(){
let time =new Date();
let hrs=time.getHours();
let min=time.getMinutes();
let sec=time.getSeconds();
clock[0].innerHTML=hrs ;
clock[1].innerHTML=min;
clock[2].innerHTML=sec;

let AMPM="AM"
if(hrs>12){
    hrs-=12;
    AMPM="PM";
   
}
ampm[0].innerHTML=AMPM;

}


setInterval(()=>{
time();
},1000)

// <For check evening or night>
let date =new Date();
let hrs=date.getHours();
 
let min=date.getMinutes();
let sec=date.getSeconds();
let AMPM="AM"
if(hrs>12){
    hrs-=12;
    AMPM="PM";
   
}


let greet="";
if((hrs>=5 && AMPM=="AM") && (hrs<12 && AMPM=="AM") ){
    greet="Morning";
}else if(hrs===12){
    greet="afternoon";
}else if( (hrs>=1 && AMPM=="PM") && (hrs<4 && AMPM=="PM")){
    greet="afternoon";
}else if((hrs=>4 && AMPM=="PM") && (hrs<=6 && AMPM=="PM")){
    greet="Evening";
}else{
    greet="night";
}
console.log(greet);
let grabbox=document.getElementsByClassName("grabbox");
if(greet==="Morning"){
    grabbox[0].innerHTML="GRAB SOME HEALTHY BREAKFAST!!!"
}else if(greet==="afternoon"){
    grabbox[0].innerHTML="LET'S HAVE SOME LUNCH !!"
}else if(greet==="Evening"){
    grabbox[0].innerHTML="STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!"
}else if(greet==="night"){
    grabbox[0].innerHTML="CLOSE YOUR EYES AND GO TO SLEEP"   
}
let alert=document.getElementsByTagName("p")
if(greet==="Morning"){
    
}else if(greet==="afternoon"){
   
}else if(greet==="Evening"){
    
}else if(greet==="night"){
   
}
let btn=document.getElementById("btn");
let wakeup=document.getElementsByTagName("select");
// console.log(wakeup[0].options[0].innerHTML);     
let lunch=document.getElementById("lunch");
let nap=document.getElementById("nap");
let night=document.getElementById("night");

function change(){
    let lst=document.getElementsByTagName("div");
    
    lst[17].innerHTML="Wake Up Time :"+wakeup[0].options[wakeup[0].selectedIndex].innerHTML;
    lst[18].innerHTML="Lunch Time :"+lunch.options[lunch.selectedIndex].innerHTML;
    lst[19].innerHTML="Nap Time :"+nap.options[nap.selectedIndex].innerHTML;
    lst[20].innerHTML="Night Time :"+night.options[night.selectedIndex].innerHTML;
let morningtime=document.getElementById("wakeup");
let lunchtime=document.getElementById("lunch");
let naptime=document.getElementById("nap");
let nighttime=document.getElementById("night");

let img1=document.querySelector("img");
let newtime=new Date();
let hours=newtime.getHours();

 
if(parseInt(morningtime.value)===hours){
// img1.style.backgroundImage="url(./Component\ 30\ –\ 1.svg)";
img1.src='./Component 30 – 1.svg';
    alert[0].innerHTML="GOOD MORNING!! WAKE UP !!"
}
else if(parseInt(lunchtime.value)===hours){
    // img1.style.backgroundImage="url('lunch_image@2x.png')";
    // console.log("where is my image");
    img1.src='./Component 31 – 1.svg';
     alert[0].innerHTML="GOOD AFTERNOON !! TAKE SOME SLEEP"
    
    }
   else if(parseInt(naptime.value)===hours){
        // img1.style.backgroundImage="url('lunch_image@2x.png')";
       img1.src='./lunch_image.jpg';
       alert[0].innerHTML="GOOD EVENING !!"
        
        
        }
       else  if(parseInt(nighttime.value)===hours){
            // img1.style.backgroundImage="url('lunch_image@2x.png')";
            // console.log("where is my image");
            img1.src='./Component 32 – 1.svg';
            alert[0].innerHTML="GOOD NIGHT !!"   
            }
}

setTimeout(()=>{
    console.log("1");
    setTimeout(()=>{
        console.log("2"); 
        setTimeout(()=>{
            console.log("3");
            setTimeout(()=>{
                console.log("4");
                setTimeout(()=>{
                    console.log("5");
                    setTimeout(()=>{
                        console.log("6");
                        setTimeout(()=>{
                            console.log("7");
                        },7000)
                    },6000)
                },5000)
            },4000)
        },3000)
    },2000)
},1000)
