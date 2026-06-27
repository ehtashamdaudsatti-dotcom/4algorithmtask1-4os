async function simulate(){

    const input=document.getElementById("processInput").value;

    const processes=input

    .trim()

    .split("\n")

    .map(line=>{

        const [name,burst]=line.split(",");

        return{

            name:name.trim(),

            burst:Number(burst)

        };

    });

    const response=await fetch("http://localhost:5000/api/fcfs",{

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

            <p>${item.start} - ${item.end}</p>

        </div>

        `;

    });

}