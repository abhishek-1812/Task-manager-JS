let tasks;
let global=[];
let new_global=[];
let checkboxs;

function addtask(){
    let task = document.getElementById('enterTask').value;
    if(task==''){
        document.getElementById('enterTask').focus();
    } else {
    tasks={enterTask:task};
    global.push(tasks);
    display();
    document.getElementById('enterTask').value="";
    }
}
function display(){
    let disp = '<table class="table table-bordered" id="todoTable">';
    for (var i=0;i<global.length;i++) {
        disp+='<tr><td>'+'<input type="checkbox" onclick="checks(' + i + ')" id="checks(' + i + ')"></input></td><td>'+global[i].enterTask+'<input type="text" id="edits('+i+')">'+'</td><td>'+"<button class='btn btn-success' onclick='editForm("+i+")'>Edit</button>"+'</td><td>'
        +"<button class='btn btn-danger' onclick='delElement(" + i + ")'>Delete</button>"+'</td></tr>';      
    } 
    document.getElementById('todoList').innerHTML=disp;
    disp='</table>';
}
function delElement(a)
{
   var conf = confirm("Are you sure you want to delete?");
   if(conf)
   {
    global.splice(a,1);
    display();
   }
}
function editForm(a)
{ 
    for(i=0 ;i<global.length;i++){
        if (i==a){
            if(document.getElementById('edits('+i+')').value==''){
                document.getElementById('edits('+i+')').value = global[a].enterTask;
            } else {
                var x=  document.getElementById('edits('+i+')').value;
                global[i].enterTask=x;
                display();
            }
        }
    } 
}
function checks(a){
    for(i=0;i<global.length;i++) {
        if(a==i){
            new_global.push(global[i].enterTask);
            global.splice(a,1);
            display();
            display2();
        }
    }
}
function display2(){
    let displ = '<table class="table table-bordered" id="todoTable">';
    for (var i=0;i<new_global.length;i++) {
        displ+='<tr><td>'+'<input type="checkbox" checked onclick="checks2(' + i + ')" id="checks2(' + i + ')"></input></td><td>'+new_global[i]+'<input type="text" id="edit('+i+')">'+'</td><td>'+"<button class='btn btn-success' onclick='editForm2(" +i+ ")'>Edit</button>"+'</td><td>'
        +"<button class='btn btn-danger' onclick='delElement2(" + i + ")'>Delete</button>"+'</td></tr>';      
    } 
    document.getElementById('completeList').innerHTML=displ;
    displ='</table>';
}
function checks2(a){
    for(i=0;i<new_global.length;i++) {
        if(a==i){
            task =new_global[i];
            tasks={enterTask:task};
            global.push(tasks);
            new_global.splice(a,1);
            display();
            display2();
        }
    }
}
function editForm2(a)
{ 
    for(i=0;i<new_global.length;i++){
        if (i==a){
            if(document.getElementById('edit('+i+')').value==''){
                document.getElementById('edit('+i+')').value = new_global[a];
            } else {
                var y=  document.getElementById('edit('+i+')').value;                
                new_global[i]=y;
                display2();
            }
        }
    } 
}
function delElement2(a)
{
    var conf = confirm("Are you sure you want to delete?");
    if(conf)
    {
        new_global.splice(a,1);
        display2();
    }
}

