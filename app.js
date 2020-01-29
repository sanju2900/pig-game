var scores, roundScore, activePlayer, gamePlaying;

init();


document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying) {
        // 1. Random number
        var dice = Math.floor(Math.random() * 6) + 1;//floor is used to remove decimal part only it will give integer one

        //2. Display the result
        var diceDOM = document.querySelector('.dice');//queryselector will slecte single element
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';


        //3. Update the round score IF the rolled number was NOT a 1
        if (dice !== 1) {
            //Add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            //Next player
         //   disableBtn(btn-roll,1000);
        // hideRollMsg();
        //    document.queryselector('player-'+activePlayer+'-rolled-1').style.visibility='visible';
            nextPlayer();
        }
    }    
});


document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
        // Add CURRENT score to GLOBAL score
        scores[activePlayer] += roundScore;

        // Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
 // Check if player won the game
        if (scores[activePlayer] >= 20) {
            document.querySelector('#name-' + activePlayer).innerHTML='<em>'+'Winner!'+'</em>';
            document.querySelector('.dice').style.display = 'none';//hidde dice at starting of game
            //player 1 wins the match or two wins the match so the winner panel looks diferent
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            //Next player
            nextPlayer();
        }
    }
});


function nextPlayer() {
    //Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
//to make current socre =0 of next player 
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');

    document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    
    //intially dice will not appear
    document.querySelector('.dice').style.display = 'none';
//at staring of game all the value will be 0
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';


    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}
/**
function disableBtn(btn,time)
{
    btn.disabled =true;
    setTimeout(function(){
        btn.disabled =false;},time);
}

function hidenRolledMsg(){
    document.queryselector('.player-0-rolled-1').style.visibility='hidden';
    document.queryselector('.player-1-rolled-1').style.visibility='hidden';
}

//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
//var x = document.querySelector('#score-0').textContent;

**/




/**
var scores,roundScore,activePlayer;

score=[0,0];
roundScore=0;
activePlayer=1;

document.querySelector('.dice').style.display='none';


//at staring of game all the value will be 0
document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';

document.querySelector('.btn-roll').addEventListener('click',function(){

var dice=Math.floor(Math.random()*6)+1;

var diceDOM=document.querySelector('.dice');
diceDOM.style.display='block';
diceDOM.src='dice-'+dice+'.png';

if(dice!==1)
{
    //add score
    roundScore+=dice;
    document.querySelector('#current-' +activePlayer).textContent=roundScore;
}
else
{
   
   nextPlayer();
}

});
function nextPlayer()
{
 activePlayer===0 ? activePlayer=1:activePlayer=0;
    roundScore=0;
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display='none';

}
**/