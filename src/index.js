import  {re} from'./resize.js';
import {drag} from'./drag.js';
import {add_text} from './function.js';
import  {image} from './image.js';
import { newslide } from './slide.js';

 // calling all the funcions 
   window.onload=function()
   {
       re();
       drag();
       add_text();
       image();
       newslide();
       
       // gloabl editor bold
       let italic=document.getElementById("italic");
       italic.addEventListener("click",function()
       {
           
        document.execCommand('italic',false,null);
       })
       // gloabl editor italic
       let bold=document.getElementById("bold");
       bold.addEventListener("click",function()
       {
        document.execCommand('bold',false,null);
       })
       // gloabl editor underline
       let under=document.getElementById("underline");
       under.addEventListener("click",function()
       {
        document.execCommand('underline',false,null);
       })
    

    
   }
  