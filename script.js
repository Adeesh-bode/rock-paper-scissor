let actionbtns = document.querySelectorAll(".actionbtns");

const pscore =document.getElementById("pscore");
const cscore =document.getElementById("cscore");

const declare =document.getElementById("declare");

const img1 =document.getElementById("img1");
const img2 =document.getElementById("img2");

let ppoints=0;
let cpoints=0;

let pchoice;
let rand;


let result;//1 win 2 loose 3 draw

const actionimg=[
                    "<img src='assets/rock.png' alt='Rock'>",
                    "<img src='assets/paper.png' alt='paper'>",
                    "<img src='assets/scissor.png' alt='scissor'>"
];

actionbtns.forEach(button =>
{   
    // replace img according to action by player // can make pchoice();
    button.addEventListener("click", () => {
        if (button.id === "rock") {
            img1.innerHTML=actionimg[0];
            pchoice = 0;
        } else if (button.id === "paper") {
            img1.innerHTML=actionimg[1];
            pchoice = 1;
        } else if (button.id === "scissor") {
            img1.innerHTML=actionimg[2];
            pchoice = 2;
        }
        // generate a img randomly as computer move
        cchoice();   
    // build a logic of winner looser
    winner();
    // reflect textmsg of result & reflect in score card
    declareresult();
    
    function cchoice()
   {
    rand = Math.floor(Math.random()*3);
    if(rand===0)
    {   
        img2.innerHTML=actionimg[0];
    }
    else if(rand===1)
    {
        img2.innerHTML=actionimg[1];       
    }
    else
    {
        img2.innerHTML=actionimg[2];        
    }
}

function winner()
{   
    if( ( pchoice===0 && (rand===2) ) || ( pchoice===1 && (rand===0) ) || ( pchoice===2 && (rand===1) ) )
    {
        result=1;//win
    }  
    else if(pchoice===rand)
    {
        result=3;//draw
    }    
    else
    {
        result=2;//loose
    }
}

function declareresult()
{
    if(result===1)
    {
        declare.innerHTML="Player Won!";
        ppoints+=1;
        pscore.textContent=ppoints;
    }
    else if(result===2)
    {
        declare.innerHTML="Computer Won!";
        cpoints+=1;
        cscore.textContent=cpoints;
    }
    else
    {
        declare.textContent="It's a Draw!";
    }
}


});
});
