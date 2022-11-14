 function show(image,left,top,timeout,interval){

  var frog = document.getElementById("image1");

  frog.style.display ="block";
  frog.style.position ="absolute"; 
  frog.src= image;
  frog.style.marginLeft = left;
  frog.style.top = top;
  setTimeout(show,timeout);
   clearInterval(show,interval);
 }

 

function Run(Jdistance,jumptime)
{
      var jimdis = (Jdistance/2)*37.5; 

      var jimrest = ((jumptime*1000)/4);

       var left1 = (jimdis/3);
       var left2 = ((jimdis/3)*2);
       var left3 =  jimdis;

       var top1="225px";
       var top2="190px";
       var top3="230px";

       var timeout1 = jimrest;
       var timeout2 = (jimrest*2);
       var timeout3 = (jimrest*3);

       var Interval1 =  ((jimrest*2)-1);
       var Interval2 =  ((jimrest*3)-1);
       var Interval3 =  ((jimrest*4)-1);

       var image1= document.getElementById("image1").src="image/frog-2-removebg-preview.png";
       var image2= document.getElementById("image1").src="image/frog-3-removebg-preview.png";
       var image3= document.getElementById("image1").src="image/frog-4-removebg-preview.png";

       show(image1,left1,top1,timeout1,Interval1);
       show(image2,left2,top2,timeout2,Interval2);
       show(image3,left3,top3,timeout3,Interval3);
      
}   

//function for finding maximum distance 
function move(time,distance,jumprest,rest)
    {
        var count = 0;
        var dis = 0;
       
        
       while(time>0)
       {
          time-=rest;
          dis += distance;

          Run(distance,rest);
          count++;
          if(count%jumprest==0)
          {
            time-=rest;
          }
        }
        return dis;
    }


//event handle on Scorecard Button
function StartGame() 
{
    document.getElementById("startgame").style.display = "block";
    document.getElementById("page1").style.display = "none";

    
       
        var gtime = document.getElementById("time").value;

        var player1 = document.getElementById("playername1").value;
        var player2 = document.getElementById("playername2").value;
        var player3 = document.getElementById("playername3").value;

       var dis1 =  parseInt(document.getElementById("enterdistance1").value);
       var dis2 = parseInt(document.getElementById("enterdistance2").value);
       var dis3 = parseInt(document.getElementById("enterdistance3").value);

        var jumprest1 = document.getElementById("enterjumprest1").value;
        var jumprest2 = document.getElementById("enterjumprest2").value;
        var jumprest3 = document.getElementById("enterjumprest3").value;

        
        var resttime1 = parseInt(document.getElementById("enterresttime1").value);
        var resttime2 =parseInt(document.getElementById("enterresttime2").value);
        var resttime3 = parseInt(document.getElementById("enterresttime3").value);


        var dplayer1,dplayer2,dplayer3;

        dplayer1 = move(gtime,dis1,jumprest1,resttime1);
        dplayer2 = move(gtime,dis2,jumprest2,resttime2);
        dplayer3 = move(gtime,dis3,jumprest3,resttime3);


    var arr=[player1,player2,player3];
        var dist=[dplayer1,dplayer2,dplayer3];
        var max=Number.MIN_SAFE_INTEGER;
        var name=null;

        for(var i=0; i<dist.length; i++)
        {
           if(dist[i]>max)
           {
             max=dist[i];
             name=arr[i];
           }
        }

   

        //who is the winner and show the result after few sec
        "<br><br><br><br><br><br><br><br><br><br><br><br>"
       setInterval(result,7000);
     function result() { 
        document.getElementById("result").innerHTML =  "Winner -" + " " + name 
     +"<br>Distance from start line -" +  " " + max;

     }
     

       //to find the Highest distance covered from highest to lowest 
       const points = [dplayer1,dplayer2,dplayer3];
        points.sort(function(a, b){return b-a});
        document.getElementById("1stposition").innerHTML=points[0];
        document.getElementById("2ndposition").innerHTML=points[1];
        document.getElementById("3rdposition").innerHTML=points[2];


       //positioning the name from highest to lowest a/c to their distance covered

       //at 1st
       if(points[0]===dplayer1){
         document.getElementById("1stName").innerHTML = player1;
       }
       if(points[0]===dplayer2){
         document.getElementById("1stName").innerHTML = player2;
       }
       if(points[0]===dplayer3){
         document.getElementById("1stName").innerHTML = player3;
      }

      //at 2nd
      if(points[1]===dplayer1){
        document.getElementById("2ndName").innerHTML = player1;
      }
      if(points[1]===dplayer2){
        document.getElementById("2ndName").innerHTML = player2;
      }
      if(points[1]===dplayer3){
        document.getElementById("2ndName").innerHTML = player3;
     }

     //at 3rd
      if(points[2]===dplayer1){
        document.getElementById("3rdName").innerHTML = player1;
      }
      if(points[2]===dplayer2){
        document.getElementById("3rdName").innerHTML = player2;
      }
      if(points[2]===dplayer3){
        document.getElementById("3rdName").innerHTML = player3;
    }
      
 }




