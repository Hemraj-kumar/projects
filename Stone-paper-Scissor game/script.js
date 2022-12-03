let userPoints=document.querySelector(".userPoints");
let EnemyPoints=document.querySelector(".EnemyPoints");
let choice=document.querySelectorAll(".choice");

let userResult=document.querySelector(".userResult");
let resultText=document.querySelector(".resultText");
let enemyResult=document.querySelector(".enemyResult");
let uwin=0;
let ewin=0;
choice.forEach((choose,userChoose)=>{
    choose.addEventListener("click",()=>{
        userResult.innerHTML=`${choose.innerHTML}
        <h3>user</h3>`;
        //random computer generator

        let compChoose=Math.floor(Math.random()*3);

        if(compChoose===0){
            enemyResult.innerHTML=`<i class="fas fa-hand-rock"></i>
            <h3>enemy</h3>`;
        }else if(compChoose===1){
            enemyResult.innerHTML=`<i class="fas fa-hand-paper"></i>
            <h3>enemy</h3>`;
        }else if(compChoose===2){
            enemyResult.innerHTML=`<i class="fas fa-hand-scissors"></i>
            <h3>enemy</h3>`;
        }

        //0-rock 1-paper 2-scissor
        if(compChoose===userChoose){
            resultText.innerText=`draw`;
        }else if(userChoose===0 && compChoose===1){
            ewin+=1;
            resultText.innerText=`loss`;
        }else if(userChoose===1 && compChoose===2){
            ewin+=1;
            resultText.innerText=`loss`;
        }else if(userChoose===2 && compChoose===0){
            ewin+=1;
            resultText.innerText=`loss`;
        }else{
            uwin+=1;
            resultText.innerText=`win`;
        }
        userPoints.innerText=uwin;
        EnemyPoints.innerText=ewin;
    })

})
