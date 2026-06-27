async function simulate(){

const input=document.getElementById("processInput").value;

const processes=input

.trim()

.split("\n")

.map(line=>{

const [name,burst,priority]=line.split(",");

return{

name:name.trim(),

burst:Number(burst),

priority:Number(priority)

};

});

const response=await fetch("http://localhost:5000/api/priority",{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

processes

})

});

const data=await response.json();

const result=document.getElementById("result");

result.innerHTML="";

data.forEach(item=>{

result.innerHTML+=`

<div class="box">

<h3>${item.process}</h3>

<p>Priority : ${item.priority}</p>

<p>${item.start} - ${item.end}</p>

</div>

`;

});

}