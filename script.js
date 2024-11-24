function makeBubble()
{
    var clutter='';

    for(var i=1;i<=102;i++)
    {
        clutter+=`<div id="bubble"> ${Math.floor(Math.random()*10)} </div>`
    }
    
    document.querySelector("#p-bottom").innerHTML=clutter
}


var timer=60;
function Timer()
{
    let timerInterval = setInterval(() => {

        if(timer>0)
        {
            timer--;
            document.querySelector('#timer-val').textContent = timer
        } 

        else
        {
           document.querySelector("#p-bottom").innerHTML=
           `<h1> Game Over :-) </h1> 
            <h1> Your Score is ${score} </h1>`;
           clearInterval(timerInterval)
        }
        
    }, 1000);
}


var newHit=0;
function MakeNewHit()
{
    newHit=Math.floor(Math.random()*10);
    document.querySelector("#Hit-val").textContent=newHit;
}


var score=0;
function IncreaseScore()
{
    score=score+10;
    document.querySelector("#score-val").textContent=score;
}

document.querySelector("#p-bottom").addEventListener("click", function(dets){

   if (Number(dets.target.textContent) === newHit)
   {
    IncreaseScore();
    MakeNewHit();
    makeBubble();

   }
})

MakeNewHit();
Timer();
makeBubble();