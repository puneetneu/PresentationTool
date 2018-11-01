
function newslide()
{

    document.getElementById("addslide").addEventListener("click",function(){
       let x="<br><br><br><br><br><br>"; 
    
      x+="<div class='slide'> </div>";
    let aside=document.getElementsByTagName("aside");

    aside[0].innerHTML+=x;
    })
    

}


export{newslide}