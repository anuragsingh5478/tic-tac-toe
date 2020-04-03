var i=0;
//an array to store data
var a = [0,0,0,0,0,0,0,0,0];
function winner(){
    if(winner_player_1()==true){
        document.getElementById("winner_info").innerHTML="player one wins!!!";
        
    }
    if(winner_player_2==true){
        document.getElementById("winner_info").innerHTML="player two wins!!!";
    }

}
function winner_player_1(){
    if((a[0]==1 && a[1]==1 && a[2]==1)||(a[3]==1 && a[4]==1 && a[5]==1)||(a[6]==1 && a[7]==1 && a[8]==1))
        return true;
    else if((a[0]==1 && a[3]==1 && a[6]==1)||(a[1]==1 && a[4]==1 && a[7]==1)||(a[2]==1 && a[5]==1 && a[8]==1))
        return true;
    else if((a[0]==1 && a[4]==1 && a[8]==1)||(a[2]==1 && a[4]==1 && a[6]==1))
        return true;

    return false;

}
function winner_player_2(){
    if((a[0]==2 && a[1]==2 && a[2]==2)||(a[3]==2 && a[4]==2 && a[5]==2)||(a[6]==2 && a[7]==2 && a[8]==2))
        return true;
    else if((a[0]==2 && a[3]==2 && a[6]==2)||(a[1]==2 && a[4]==2 && a[7]==2)||(a[2]==2 && a[5]==2 && a[8]==2))
        return true;
    else if((a[0]==2 && a[4]==2 && a[8]==2)||(a[2]==2 && a[4]==2 && a[6]==2))
        return true;
    
return false;
}
function chance(){
    winner();
    
    
    if(i%2==0)
        document.getElementById("player").innerHTML="player 1 chance";
    else
        document.getElementById("player").innerHTML="player 2 chance";

     if(i>9){
         alert("match draw!!!");
         location.reload();
     }
    
    

     
}
//1
function change1(){
    if(i%2==0){
         document.getElementById('1').src='x.png'; 
        i++;
        a[0]=1;
    }
    else{
         document.getElementById('1').src='o.png';
        i++;
        a[0]=2;
    }
    chance();
}
//2
function change2(){
    if(i%2==0){
         document.getElementById('2').src='x.png'; 
        i++;
        a[1]=1;
    }
    else{
         document.getElementById('2').src='o.png';
        i++;
        a[1]=2;
    }
    chance();
}
//3
function change3(){
    if(i%2==0){
         document.getElementById('3').src='x.png'; 
        i++;
        a[2]=1;
    }
    else{
         document.getElementById('3').src='o.png';
        i++;
        a[2]=2;
    }
    chance();
}
//4
function change4(){
    if(i%2==0){
         document.getElementById('4').src='x.png'; 
        i++;
        a[3]=1
    }
    else{
         document.getElementById('4').src='o.png';
        i++;
        a[3]=2;
    }
    chance();
}
//5
function change5(){
    if(i%2==0){
         document.getElementById('5').src='x.png'; 
        i++;
        a[4]=1;
    }
    else{
         document.getElementById('5').src='o.png';
        i++;
        a[4]=2;
    }
    chance();
}
//6
function change6(){
    if(i%2==0){
         document.getElementById('6').src='x.png'; 
        i++;
        a[5]=1;
    }
    else{
         document.getElementById('6').src='o.png';
        i++;
        a[5]=2;
    }
    chance();
}
//7
function change7(){
    if(i%2==0){
        document.getElementById('7').src='x.png'; 
       i++;
       a[6]=1;
   }
   else{
        document.getElementById('7').src='o.png';
       i++;
       a[6]=2;
   }
   chance();
}
//8
function change8(){
    if(i%2==0){
         document.getElementById('8').src='x.png'; 
        i++;
        a[7]=1;
    }
    else{
         document.getElementById('8').src='o.png';
        i++;
        a[7]=2;
    }
    chance();
}
//9
function change9(){
    if(i%2==0){
         document.getElementById('9').src='x.png'; 
        i++;
        a[8]=1;
    }
    else{
         document.getElementById('9').src='o.png';
        i++;
        a[8]=2;
    }
    chance();
}

//to reload the page
function reload_the_page(){
    location.reload();
}

