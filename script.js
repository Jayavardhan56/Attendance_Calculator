console.log("Connected"); 

let name=document.getElementById("name"); 

let branch=document.getElementById("branch"); 

let but=document.getElementById("button"); 
but.addEventListener("click",(e)=>
{ 
        e.preventDefault(); 
        let attended=document.getElementById("Attended").value; 
        let total=document.getElementById("Total").value; 
        attended=Number(attended); total=Number(total); 
        let m=document.getElementById("att"); 
        if((attended<=0 || total<=0)|| (attended>total)){ 
            window.alert("VALUE ERROR!, Please Re-Enter The Values"); 
            m.innerHTML=" "; 
        }
        else{ 
            let res=0; 
            res=(attended/total)*100; 
            m.innerHTML=`Your Attendance Percentage is: ${res.toFixed(2)}`; 
        } 
}); 
    
let incr=document.getElementById("incr"); 
let decr=document.getElementById("decr"); 
incr.addEventListener("click",(e)=>{ 
    e.preventDefault(); 
    let a=document.getElementById("Attended"); 
    let t=document.getElementById("Total"); 
    let attended=Number(a.value); 
    let total=Number(t.value); 
    attended+=8; 
    total+=8; 
    a.value = attended; 
    t.value = total; 
    let m=document.getElementById("att"); 
    if((attended<=0 || total<=0)|| (attended>total)){ 
        window.alert("VALUE ERROR!, Please Re-Enter The Values"); 
        m.innerHTML=" "; 
    }
    else{ 
        let res=(attended/total)*100; 
        m.innerHTML=`Your Attendance Percentage is: ${res.toFixed(2)}`; 
    } 
}); 
decr.addEventListener("click",(e)=>{ 
    e.preventDefault(); 
    let a=document.getElementById("Attended"); 
    let t=document.getElementById("Total"); 
    let attended=Number(a.value); 
    let total=Number(t.value); 
    total+=8; 
    a.value = attended; 
    t.value = total; 
    let m=document.getElementById("att"); 
    if((attended<=0 || total<=0)|| (attended>total)){ 
        window.alert("VALUE ERROR!, Please Re-Enter The Values"); 
        m.innerHTML=" "; 
    }else{ 
        let res=(attended/total)*100; 
        m.innerHTML=`Your Attendance Percentage is: ${res.toFixed(2)}`; 
    } 
}); 
let clear=document.getElementById("clear");
clear.addEventListener("click",(e)=>{ 
    e.preventDefault(); 
    document.querySelector("form").reset(); 
    document.getElementById("att").innerHTML="";
});
