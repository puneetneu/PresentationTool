import  {re} from'./resize.js';
import {drag} from'./drag.js';
import {display,blur,invisible} from './features.js';
 function image()
 {
 
 let img=document.getElementById("image");
 img.onchange=function()
 {
     previewFile();
     document.querySelector('input[type=file]').value="";
     
 }
 
 function previewFile(){

    let left = ((Math.random()*100)*2+(Math.random()*100)*3).toFixed();
    let editor= document.getElementById("editor");
    
    let top=((Math.random()*100)*2+100).toFixed();
    

    let x= "<div style='left:"+ left +"px; top:"+ top +"px;' class='resizable' >";
    x+="<div class='resizers' >";
    
    x+="  <div class='resizer top-left'></div>";
    x+="   <div class='resizer top-right'></div>";
    x+="   <div class='resizer bottom-left'></div>";
    x+="    <div class='resizer bottom-right'></div>";
    x+="   <div class='resizer left'></div>";
    x+=" <div class='resizer top'></div>";
    x+="   <div class='resizer bottom'></div>";
    x+="  <div class='resizer right'></div>";
    x+="<div class='resizer left-line line'></div>";
    x+="<div class='resizer right-line line'></div>";
    x+="<div class='resizer top-line line'></div>";
    x+="<div class='resizer bottom-line line'></div>";
    x+="<img src='' class='center image' alt='Image preview...'>";
  
    x+=" </div>";
    x+="</div>";


   //let editor= document.getElementById("editor");
   editor.innerHTML+=x;


    re();
    drag();
    invisible();
    display();
    blurimage();


       var pre = document.getElementsByClassName('image'); //selects the query named img
       var preview =pre[pre.length-1];
       var file    = document.querySelector('input[type=file]').files[0]; //sames as here
       var reader  = new FileReader();

       reader.onloadend = function () {
           preview.src = reader.result;
       }

       if (file) {
           reader.readAsDataURL(file); //reads the data as a URL
       } else {
           preview.src = "";
       }
  }
  
}

  export{image};

  

  function blurimage()
{

    document.onclick=function(e)
    {
         if(e.target.tagName!="IMG")
         {

            let img=document.getElementsByTagName("img");
              for(let i=0 ; i<img.length;i++)
              {
                let al=img[i].parentElement.parentElement;
                al.style.border="2px inset grey";
                let bl= al.getElementsByClassName("resizer");
                for(let x=0 ; x<bl.length ;x++)
                 {
                  bl[x].style.display="none";
                 }

            }
         }
    }
}
    
    


