console.log("Connected");

let name=document.getElementById("name");

let branch=document.getElementById("branch");

let but=document.getElementById("button");

but.addEventListener("click",(e)=>{

    e.preventDefault();
    
    let attended=document.getElementById("Attended").value;
    
    let total=document.getElementById("Total").value; 

    attended=Number(attended);

    total=Number(total);

    let m=document.getElementById("att");

    if((attended<=0 || total<=0)|| (attended>total)){
        window.alert("VALUE ERROR!, Please Re-Enter The Values");
        m.innerHTML=" ";
    }else{
    let res=0;

    res=(attended/total)*100;

    m.innerHTML=`Your Attendance Percentage is: ${res.toFixed(2)}`;
    }
});