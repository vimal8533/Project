var add=document.getElementsByClassName("childdiv")
var popup=document.getElementsByClassName("popup")
var popup1=document.getElementsByClassName("popup1")
var close=document.getElementsByClassName("close")
var body=document.getElementsByTagName("body")
var todohead=document.getElementById("todohead");
var parent1=document.getElementById("parent")
var circle1=document.getElementsByClassName("circle1")
var heading=document.getElementsByClassName("head")
var masterdiv=document.getElementsByClassName("masterdiv")
var addsubtask=document.getElementById("addsubtask");
var closepoup=document.getElementById("closepoup");


function show(){
    popup[0].style.display="block";
    // body[0].style.opacity=".1"
    // popup[0].style.opacity=".01"
    parent1.style.filter="blur(2px)";
    parent1.style.height="100%";
    
    
  
}

add[0].addEventListener("click",show);
function abc(){
    popup[0].style.display="none";
    // body[0].style.opacity="1"
    parent1.style.filter="blur(0px)";
    
}
var todos=document.getElementById("todos")
var inputvalue=document.getElementById("todohead");
let count=0;
// var newtodo=document.createElement("div")
// var todosHeading =document.createElement("h3")
// var breakline= document.createElement("div");
// var tododes=document.createElement("div")
// var add=document.createElement("div");
// var plus=document.createElement("h1");
// var del=document.createElement("div");

function createbox(){
    count++;
    parent1.style.filter="blur(0px)"
    popup[0].style.display="none";
var newtodo=document.createElement("div")
var todosHeading =document.createElement("h3")
var breakline= document.createElement("div");
var tododes=document.createElement("div")
var add=document.createElement("div");
var plus=document.createElement("h1");
var del=document.createElement("div");
todos.appendChild(newtodo);
tododes.setAttribute('id',`box${count}`);
console.log(tododes)
// newtodo.appendChild(breakline);
newtodo.appendChild(todosHeading);
newtodo.appendChild(breakline)
newtodo.appendChild(tododes)
newtodo.appendChild(add);
add.appendChild(plus)
newtodo.appendChild(del)

todosHeading.innerText=inputvalue.value;
// tododes.innerText="I am  in Patna";
plus.innerText="+"

newtodo.classList.add(`todocard`)
breakline.classList.add("line");
add.classList.add("circle1")
plus.classList.add("plusicon1");
del.classList.add("del")
console.log(count);
function inrpopup(){
    popup1[0].style.display="block";
    // body[0].style.opacity=".1"
    // popup[0].style.opacity=".01"
    parent1.style.filter="blur(2px)";
    parent1.style.height="100%";

}
add.addEventListener("click",inrpopup)
function removebox(){
//     newtodo.classList.remove("todocard")
//     add.classList.remove("circle1")
// plus.classList.remove("plusicon1");
// del.classList.remove("del")
// plus.innerText=""
// tododes.innerText="";
// plus.innerText=""
newtodo.remove();
 
}
del.addEventListener("click",removebox)
 function secondpage(){
    heading[0].style.display="none";
    masterdiv[0].style.display="block";
    
    

 }

todosHeading.addEventListener("click",secondpage)
addsubtask.addEventListener("click",createcontent);
closepoup.addEventListener("click",close1);
function close1(){
    popup1[0].style.display="none";
    // body[0].style.opacity="1"
    parent1.style.filter="blur(0px)";
    console.log("Vimal")
}
var todohead1=document.getElementById("todohead1")
function createcontent(){
    // var tododes=document.createElement("div")
    var tasks=document.createElement("div")
    var maintask=document.createElement("p")
    var done=document.createElement("BUTTON")
    popup1[0].style.display="none";
    // body[0].style.opacity="1"
    parent1.style.filter="blur(0px)"
    newtodo.appendChild(tododes);
    tododes.appendChild(tasks);
    tasks.appendChild(maintask);
    tasks.appendChild(done);
    maintask.innerText=todohead1.value;
    tasks.classList.add("task");
    done.classList.add("subbutton");
    done.innerText="Done";
    done.setAttribute("id","mark");


    function marksdone(){
        maintask.style.textDecoration="line-through"
        maintask.style.color="red";
        maintask.style.textAlign="center"
        done.classList.add("nodisplay");
        tasks.style.justifyContent="center"
        // subbutton.style.display="none";

        
        
    }
    tasks.addEventListener("click",marksdone);
    // addsubtask.addEventListener("click",createcontent);
    // closepoup.addEventListener("click",close1);
}



}



// let studentRecords = [ {name: 'John', id: 123, marks : 98 },
//           {name: 'Baba', id: 101, marks : 23 },
//           {name: 'yaga', id: 200, marks : 45 },
//           {name: 'Wick', id: 115, marks : 75 } ] 


// let sum =0
//           studentRecords.map((item) =>{
//             sum+=item.marks;
            
//           })
//           console.log(sum)

//           let addition=studentRecords.filter((item)=>{
//             return item.id>101;
//           }).reduce((prval ,crval )=>{
//             return prval+=crval.marks

//           },0)
//           console.log(addition);
//           let sum1=studentRecords.reduce((prval ,crval )=>{
//             return prval+=crval.marks

//           },0)
//           console.log(typeof(sum1));