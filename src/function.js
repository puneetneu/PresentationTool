import  {re} from'./resize.js';
import {drag} from'./drag.js';
import {display,blur,invisible} from './features.js';
function add_text()
{
let addtext=document.getElementById("addtext");

addtext.addEventListener("click", function(){
    
    let left = ((Math.random()*100)*2+(Math.random()*100)*3).toFixed();
    let editor= document.getElementById("editor");
    
    let top=((Math.random()*100)*2+100).toFixed();

       editor.addEventListener("click", drop);
    
    
})
}

function drop(e)
{
    let x= "<div style='left:"+ e.pageX +"px; top:"+ e.pageY +"px;' class='resizable' >";
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
    x+="<div placeholder='Click To Add Text' contenteditable='true' class='center' >";
   // x+="<input type='text'  class='center'>";
  
     x+=" </div>";
    x+="</div>";
    editor.innerHTML+=x;
    editor.removeEventListener('click', drop);

    re();
    drag();
    invisible();
    display();
    blur();

     let c= document.getElementsByClassName("center");
    for(let x=0 ; x<c.length; x++)
    {

        CKEDITOR.inline(c[x]);
    }
}




export {add_text};