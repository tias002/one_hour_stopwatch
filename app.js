let seconds=document.querySelector("#seconds");
let minute=document.querySelector("#minutes");
let start=document.querySelector("#start");
let Stop=document.querySelector("#stop");
let reset=document.querySelector("#reset");

let mytimer;
let mycounter=0;
 let myseconds=0;
let mymin=0;
Stop.disabled=true;
reset.disabled=true;

start.addEventListener("click",function(){
    start.disabled=true;
    Stop.disabled=false;
    reset.disabled=false;
    //seconds
  
mytimer=setInterval(function(){
    mycounter++;
    myseconds=mycounter;
    seconds.innerHTML=myseconds;
   
    if(myseconds>59)
    {   
        seconds.innerHTML="00";
         mycounter=0;
         mymin++;
    }

    else if(myseconds>9)
    {
        seconds.innerHTML=myseconds;
    }
    else{ 
        seconds.innerHTML="0"+myseconds;
    }
    

//minutes

    if(mymin>59)
    {   
        seconds.innerHTML="00";
        minute.innerHTML="00";
         myseconds=0;
         mycounter=0;
         mymin=0;
         clearInterval(mytimer);
    }

    else if(mymin>9)
    {
        minute.innerHTML=mymin;
    }
    else{ 
        minute.innerHTML="0"+mymin;
    }
    
},1000);

});
Stop.addEventListener("click",function(){
    start.disabled=false;
    Stop.disabled=true;
    clearInterval(mytimer);

})
reset.addEventListener("click",function(){
    start.disabled=false;
    Stop.disabled=false;
    seconds.innerHTML="00";
        minute.innerHTML="00";
         myseconds=0;
         mycounter=0;
         mymin=0;
         clearInterval(mytimer);

})
