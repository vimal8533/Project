
var parent= document.getElementById('parent');
var closecard = document.getElementById("closepopup");
var taskclose = document.getElementById('subclose');
var mainpopup = document.querySelector('.mainpopup');
var todolists = document.getElementById("popup1");
var maincontainer = document.getElementById('todos');
var cardheading = document.getElementById("boxheading")
var subtask = document.getElementById("taskname")
var onepage = document.querySelector('.todos2')
var todotask = document.getElementById("subtaskid");
var openpopup = document.getElementsByClassName("openpopup");

var card = 0;
var box_id;

openpopup[0].addEventListener('click',show)
  
closecard.addEventListener('click',hide)

taskclose.addEventListener('click',hide)
var NoItem = document.getElementById('NoItem');
function noitem(){
    if(card > 0){
      NoItem.style.display = "none"
    }
    else{
      NoItem.style.display = "block"
    }
  }

function show(){
  mainpopup.style.display = "block";
  todolists.style.display = "flex";
  todotask.style.display = "none";
  parent.style.filter = "blur(3Px)";
  cardheading.value = "";
}

function hide(){
  mainpopup.style.display = "none";
  parent.style.filter = "blur(0Px)";
}

function taskpopup(){
  todotask.style.display = "flex";
  mainpopup.style.display = "block";
  todolists.style.display = "none";
  parent.style.filter = "blur(3Px)";
  subtask.value = "";
}
pageone = parent.children[0]
pagetwo = parent.children[1]
let leftpage2 = pagetwo.children[0]
let pagename = pagetwo.children[1]
pagetwo.style.display = "none"
var newcard = document.getElementById('boxhead');
newcard.addEventListener('click',()=>{
  if(cardheading.value){
    createnewcard()
    card++;
  }
  noitem()
  hide()
  pageone.style.display = "flex"
  pagetwo.style.display = "none"
  maincontainer.style.display = "flex"
//   
})
var newsubtask = document.getElementById('forsubtask');
newsubtask.addEventListener('click',createsubtask)

function createnewcard(){
           
  var maindiv = document.createElement('div')
  var cardhead = document.createElement('div')
  var line = document.createElement('hr')
  var itembox = document.createElement('div')
  var forbutton = document.createElement('div')
  var delcard = document.createElement('div')
  var addtask = document.createElement('div')
  
            
  maincontainer.appendChild(maindiv)
  maindiv.appendChild(cardhead)
  maindiv.appendChild(line)
  maindiv.appendChild(itembox)
  maindiv.appendChild(forbutton)
  forbutton.appendChild(addtask)
  forbutton.appendChild(delcard )
    
          
  maindiv.className = "newcardstyle"
  cardhead.className = "cardheadingnewbox"
  itembox.className = "contentbox"
  itembox.id = `contentbox${card}`
  forbutton.className = "cardfoot"
  delcard.className = "del"
  addtask.className = "add"

  
  cardhead.innerText = `${cardheading.value}`

           
  addtask.addEventListener('click',()=>{
    taskpopup()
    box_id = itembox.id
  })
         
  delcard.addEventListener('click',()=>{
    maindiv.remove()
    card--;
    noitem()
  })
  
  cardhead.addEventListener('click',()=>{
    pagename.innerText = cardhead.innerText
    onepage.appendChild(maindiv)
    
    pageone.style.display = "none"
    pagetwo.style.display = "flex"
    maincontainer.style.display = "none"
    delcard.addEventListener('click',()=>{
      maindiv.remove()
      noitem()
    
    pageone.style.display = "flex"
    pagetwo.style.display = "none"
    maincontainer.style.display = "flex"
    })
  })

 leftpage2.addEventListener('click',()=>{
    maincontainer.appendChild(maindiv)
    
    pageone.style.display = "flex"
    pagetwo.style.display = "none"
    maincontainer.style.display = "flex"
    
  })
  openpopup[1].addEventListener('click',()=>{
    maincontainer.appendChild(maindiv)
    show()
  })
}

function createsubtask(){
  
let subtaskid = document.getElementById(`${box_id}`)
var subtask1 = document.createElement('div')
var newitems = document.createElement('span')
var done = document.createElement('span')


subtaskid.appendChild(subtask1)
subtask1.appendChild(newitems)
subtask1.appendChild(done)

  
subtask1.className = "NewSubTask"
newitems.className = "ToDoItem"
done.className = "TaskDone"

newitems.innerText = `${subtask.value}`
done.innerText = `Done`


done.addEventListener('click',()=>{
done.style.display = "none"
newitems.style.color = "crimson"
newitems.style.textDecoration = "line-through";
})

hide()
}










