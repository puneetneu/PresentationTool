function invisible()
{
let bl= document.getElementsByClassName("resizer");
for(let x=0 ; x<bl.length ;x++)
{
 bl[x].style.display="none";
}
}

function blur()
{
let al=document.getElementsByClassName("center");
for(let y=0; y<al.length ;y++)
{
    al[y].addEventListener("blur",function()
{
    
  let bl= al[y].parentElement.getElementsByClassName("resizer");
  for(let x=0 ; x<bl.length ;x++)
  {
   bl[x].style.display="none";
  }
  al[y].parentElement.parentElement.style.border="2px inset grey";
})
}


}

function display()
{
    let al=document.getElementsByClassName("resizable");
    for(let y=0; y<al.length ;y++)
    {

        
al[y].addEventListener("click",function()
{
     al[y].style.border="0px";
    
    
  let bl= al[y].getElementsByClassName("resizer");
  for(let x=0 ; x<bl.length ;x++)
  {
   bl[x].style.display="block";
   
  }
  
})


    }

}

export{invisible,blur,display}