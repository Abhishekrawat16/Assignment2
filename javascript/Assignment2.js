var projectList={
    projects:[],
    
    addProject:function(pId,pName,pStatus,pDesc){
        this.projects.push({
            pId:pId,
            pName:pName,
            pStatus:pStatus,
            pDesc:pDesc
        });
        console.log(this.projects);
    }
};

var myStringObj={
    history:[]
}

var checkInput={
    checkCount:function(){
        var trCount=parseInt(document.getElementsByTagName('tr').length);
        var output=document.getElementById('ques5op');
        if(trCount==projectList.projects.length+1){
            output.textContent="Total number of <tr> in project table excluding table header is equale to the size of project list i.e.="+projectList.projects.length;
            output.setAttribute('style','color:green');
        }
        else{
            output.textContent="Number of <tr> and project list size missmatch, <tr>="+(trCount-1)+" (excluding header), Project List size="+projectList.projects.length+ ".  Please click on Display Project button to refresh project table"
            output.setAttribute('style','color:red');
        }
    }
};

var view= {

    addProject:function(){
        var pId= document.getElementById("pid").value;
        var pName= document.getElementById("pname").value;
        var pStatus= document.getElementById("pstatus").value;
        var pDesc= document.getElementById("pdesc").value;
        var output = document.getElementById('ques5op');
        if(pId==""||pName==""||pStatus==""||pDesc==""){
            output.textContent ="No field should remain empty";
        }
        else{
            projectList.addProject(pId,pName,pStatus,pDesc);
            document.getElementById("pid").value="";
            document.getElementById("pname").value="";
            document.getElementById("pstatus").value="inProgress";
            document.getElementById("pdesc").value="";
        }
    },
    createStatusDropdown: function (status) {
        var statusSelect;
        statusSelect =  document.createElement('select');
        statusSelect.id="selectedStatus";
        var option= document.createElement('option');
        option.value="inProgress";
        option.textContent="In Progress"
        statusSelect.appendChild(option);
        option= document.createElement('option')
        option.value="completed";
        option.textContent="Completed"
        statusSelect.appendChild(option);
        statusSelect.value=status;
        return statusSelect;
    },
    displayProjects :  function(){
        var projectTable = document.querySelector('table');
        if(document.getElementsByTagName('tr').length>1){
            projectTable.innerHTML=document.getElementsByTagName('tbody')[0].innerHTML;
        }
        for(var i=0; i<projectList.projects.length;i++){
            var projectTr = document.createElement('tr');
            projectTr.id=i;
            var project = projectList.projects[i];
            var projectTd = document.createElement('td');
            projectTd.innerHTML=project.pId;
            projectTr.appendChild(projectTd);
            projectTd = document.createElement('td');
            projectTd.innerHTML=project.pName;
            projectTr.appendChild(projectTd);
            projectTd = document.createElement('td');
            if(project.pStatus=="completed")
            projectTd.innerHTML="Completed";
            else
            projectTd.innerHTML="In Progress";
            projectTr.appendChild(projectTd);
            projectTd = document.createElement('td');
            projectTd.innerHTML=project.pDesc;
            projectTr.appendChild(projectTd);
            projectTable.appendChild(projectTr);
         }
        },
        showString:function(){
            var ipString=document.getElementById("inputString");
            myStringObj.history.push(ipString.value);
            console.log(ipString.value);
        },
        showHistory:function(){
            var position=document.getElementById('position').value;
            if(myStringObj.history.length==0){
                console.log("No History to Show");
            }
            else{
                if(position==""){
                    myStringObj.history.forEach(element => {
                        console.log(element);
                    });
                }
                else{
                    for(var i=0; i<position&&i<myStringObj.history.length; i++){
                    console.log( myStringObj.history[i]);
                }
            }
            }
            position="";
        },
        clearHistory:function(){
            myStringObj.history="";
        }
}