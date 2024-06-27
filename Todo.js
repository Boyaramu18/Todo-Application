//function to save the task
//empty array to store all todo tasks
let TaskList=[];
function SaveTask(){
    debugger;
 //gettting the user input values from input box

const taskname=document.getElementById('input_value').value;
if(taskname.trim()!==''){
}
let TaskData={
    //Taskdata to generate new id each time the user adds a new task
    TaskId:TaskList.length+1,
    taskname:taskname,
};
//pusshing the new data into empty array
TaskList.push(TaskData);
document.getElementById('input_value').value="";
Dyrend()
}


//function for rendering or function for showing the list dynamically
function Dyrend(){
    debugger;
    document.querySelector(".Task_list").innerHTML='';
for(i=0;i<TaskList.length;i++){
    const dynamicList=document.createElement('li');
    dynamicList.classList.add("task");
    const mypara=document.createElement('p');
    mypara.innerHTML=TaskList[i].taskname;
    //appending the  paragraph to li
    dynamicList.appendChild(mypara);
    //appending the li to ul list
    document.querySelector('.Task_list').appendChild(dynamicList)
    //create a div element to add  edit and delete list items
    const divelement=document.createElement("div");
    divelement.classList.add("crud");
    //to add icons like delete and retrive
    //1.Edit icon
    const Editicon=document.createElement("i");
    Editicon.classList.add("bi") 
    Editicon.classList.add("bi-pencil-square") 
    Editicon.addEventListener('click',EditTask)
    Editicon.TaskId=TaskList[i].TaskId
//


//1.Delete icon
//adding functionality to delete icon
const DeleteIcon=document.createElement("i")
DeleteIcon.classList.add("bi")
DeleteIcon.classList.add("bi-pencil-square")

DeleteIcon.addEventListener('click',DeleteTask)
DeleteIcon.TaskId=TaskList[i].TaskId


//appending icons to the div element
divelement.appendChild(Editicon);
divelement.appendChild(DeleteIcon);

//appending the div element to ul 
dynamicList.appendChild(divelement)

}

}
//function to edit the task
function EditTask(e){
    console.log(e.target.TaskId)
    var edit=TaskList.find((R)=>R.TaskId == e.target.TaskId)
    document.getElementById("input_value").value=edit.taskname;
   

}
//function to delete the task
function DeleteTask(e){
    console.log(e.target.TaskId)
    var index=TaskList.findIndex((R)=>R.TaskId == e.target.TaskId)
    TaskList.splice(index,1)
    localStorage.setItem('Taskname',JSON.stringify(TaskList))
   

}
//function to remove all the data from the user
function RemoveAll(){
    TaskList.splice(0);
    localStorage.removeItem('taskname')
Dyrend()
}
