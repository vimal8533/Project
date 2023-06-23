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
var back=document.getElementsByClassName("twopage");
var nextpage=document.getElementsByClassName("childdiv1")
var todos2=document.getElementsByClassName("todos2");
var noitem=document.getElementsByClassName("noitem");

function show(){
    popup[0].style.display="block";
    parent1.style.filter="blur(2px)";
    parent1.style.height="100%";
    
    
    
}

add[0].addEventListener("click",show);
nextpage[0].addEventListener("click",show);
function abc(){
    popup[0].style.display="none";
    parent1.style.filter="blur(0px)";
    
}
var todos=document.getElementById("todos")
var inputvalue=document.getElementById("todohead");
let count=0;
let boxcount=0;


function createbox(){

    count++;
    boxcount++;
    parent1.style.filter="blur(0px)"
    popup[0].style.display="none";
var newtodo=document.createElement("div")
newtodo.setAttribute('id',`box${count}`);
var todosHeading =document.createElement("h3")
var breakline= document.createElement("div");
var sampletask=document.createElement("div");
var add=document.createElement("div");
var plus=document.createElement("h1");
var del=document.createElement("div");
todos.appendChild(newtodo);
sampletask.setAttribute('id',`box${count}`);
newtodo.appendChild(todosHeading);
newtodo.appendChild(breakline)
newtodo.appendChild(sampletask);
newtodo.appendChild(add);
add.appendChild(plus)
newtodo.appendChild(del)

todosHeading.innerText=inputvalue.value;
newtodo.classList.add(`todocard`)
breakline.classList.add("line");
add.classList.add("circle1")
plus.classList.add("plusicon1");
del.classList.add("del")
console.log(count);
if(boxcount>0){
    noitem[0].style.display="none";
}else{
    noitem[0].style.display="block";
}
function inrpopup(){
    popup1[0].style.display="block";
    parent1.style.filter="blur(2px)";
    parent1.style.height="100%";

}
add.addEventListener("click",() =>{
    inrpopup();
     token=sampletask.id;
})

del.addEventListener("click",removebox)
function removebox(){
    //    
    newtodo.remove();
    boxcount--;
    if(boxcount>0){
        noitem[0].style.display="none";
    }else{
        // noitem[0].style.display="block";
    }
       
    }

var title=document.getElementsByClassName("title");
todosHeading.addEventListener("click",()=>{
    
    todos.style.display="none";  
    title[0].innerHTML=todosHeading.innerText;
    heading[0].style.display="none";
    masterdiv[0].style.display="block";
    todoCardId = newtodo.getAttribute("id");
    headChild = document.getElementById(`${todoCardId}`);
    todos2[0].appendChild(headChild);
    // headChild.style.marginLeft="40%";
    todos2[0].style.display="flex";
    // headChild.style.display="block";
    // console.log(headChild);
    // secondpages[0].style.display="block"
    // todos2[0].style.display.justifyContent="center";
    // secondpages.appendChild(newtodo);
    // secondpages.appendChild(todos2[0]);
    // secondpages[0].appendChild(todos2[0])
    
    // todos2[0].style.display="flex";
    


})  

back[0].addEventListener("click",backtopage)
function backtopage(newtodos){

    // todos2[0].style.display="none";
    todos.style.display="block";
    todos.style.display="flex";
    heading[0].style.display="block";
    heading[0].style.display="flex";
    masterdiv[0].style.display="none";
    todos.appendChild(headChild);
    // headChild.remove();
    // console.log(newtodo);
    // headChild.style.marginLeft="0%";
   
}






closepoup.addEventListener("click",close1);
function close1(){
    popup1[0].style.display="none";
    // body[0].style.opacity="1"
    parent1.style.filter="blur(0px)";
    console.log("Vimal")
}
var todohead1=document.getElementById("todohead1")
// function createcontent(unique){
//     // var tododes=document.createElement("div")
//     var uniqueid=document.getElementById(unique);

//     // console.log(unique);
//     var tasks=document.createElement("div")
//     var maintask=document.createElement("p")
//     var done=document.createElement("BUTTON")
//     popup1[0].style.display="none";
//     // body[0].style.opacity="1"
//     parent1.style.filter="blur(0px)"
//     uniqueid.appendChild(tododes);
//     // newtodo.appendChild(unique)
//     // unique.appendChild(tododes);
//     tododes.appendChild(tasks);
//     tasks.appendChild(maintask);
//     tasks.appendChild(done);
//     maintask.innerText=todohead1.value;
//     tasks.classList.add("task");
//     done.classList.add("subbutton");
//     done.innerText="Done";
//     done.setAttribute("id","mark");


//     function marksdone(){
//         maintask.style.textDecoration="line-through"
//         maintask.style.color="red";
//         maintask.style.textAlign="center"
//         done.classList.add("nodisplay");
//         tasks.style.justifyContent="center"
//         // subbutton.style.display="none";

// heading.addEventListener("click", () => {
//     head1[0].style.display = "none";
//     head2[0].style.display = "block";
//     head2Text[0].innerHTML = `${cardTittle}`;
//     todoCardId = todoDiv.getAttribute("id");
//     headChild = document.getElementById(`${todoCardId}`);
//     console.log(headChild);
//     todo2[0].appendChild(headChild);
//     // here headChaild is a taskParentDiv
//   });
        
//     }
    
        
}


addsubtask.addEventListener("click",() => {
    createcontent(token);
});

function createcontent(unique){
    // var tododes=document.createElement("div")
    var uniqueid=document.getElementById(unique);
    var tododes=document.createElement("div")
    // console.log(unique);
    var tasks=document.createElement("div")
    var maintask=document.createElement("p")
    var done=document.createElement("BUTTON")
    popup1[0].style.display="none";
    // body[0].style.opacity="1"
    parent1.style.filter="blur(0px)"
    uniqueid.appendChild(tododes);
    // newtodo.appendChild(unique)
    // unique.appendChild(tododes);
    tododes.appendChild(tasks);
    tasks.appendChild(maintask);
    tasks.appendChild(done);
    maintask.innerText=todohead1.value;
    tasks.classList.add("task");
    done.classList.add("subbutton");
    done.innerText="Done";
    done.setAttribute("id","mark");
    tasks.addEventListener("click",marksdone);
    // addsubtask.addEventListener("click",createcontent);
    // closepoup.addEventListener("click",close1);
    function marksdone(){
        maintask.style.textDecoration="line-through"
        maintask.style.color="red";
        maintask.style.textAlign="center"
        done.classList.add("nodisplay");
        tasks.style.justifyContent="center"
        // subbutton.style.display="none";
    
        
        
    }

   
}


// function secondpage(Heading){
//     var title=document.getElementsByClassName("title");
//     var head=document.getElementsByClassName(Heading)
//     heading[0].style.display="none";
//     masterdiv[0].style.display="block";
//     // heading[0].style.display="none";
// //     masterdiv[0].style.display="block";
// console.log(head[0].innerText)
//     title[0].innerText=head[0];
    
//     todocontenier.style.display="none";
// //     // todocard.style.display="none";
// //     // var newdiv= document.createElement("div")
// //     // todos.appendChild(newdiv);
// //     // // newdiv.appendChild(todocard);
// //     // newdiv.appendChild(todocard)
    

//  }
 

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