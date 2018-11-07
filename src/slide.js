// new slide
function newslide()
{

    document.getElementById("addslide").addEventListener("click",function(){
       let x="<br><br><br><br><br><br>"; 
    
      x+="<div class='slide'> </div>";
    let aside=document.getElementsByTagName("aside");

    aside[0].innerHTML+=x;
    })
    

    slidechange();
}

function slidechange()
{
// let sli= document.getElementsByClassName("slide");
// for (let x=0 ;x<sli.length;x++)
// {
//  sli[x].addEventListener("click",function()
//  {
//      alert();
//      document.getElementById("editor").children.innerHTML="";
//  })
// }
}

export{newslide}