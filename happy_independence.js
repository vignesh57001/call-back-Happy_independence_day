var div=document.createElement("div");
div.innerHTML=10;
let time=10;
setTimeout(()=>{
    time=time-1;
    div.innerHTML=time
    setTimeout(()=>{
        time=time-1;
        div.innerHTML=time
        setTimeout(()=>{
            time=time-1;
            div.innerHTML=time
            setTimeout(()=>{
                time=time-1;
                div.innerHTML=time
                setTimeout(()=>{
                    time=time-1;
                    div.innerHTML=time
                    setTimeout(()=>{
                        time=time-1;
                        div.innerHTML=time
                        setTimeout(()=>{
                            time=time-1;
                            div.innerHTML=time
                            setTimeout(()=>{
                                time=time-1;
                                div.innerHTML=time
                                setTimeout(()=>{
                                    time=time-1;
                                    div.innerHTML=time
                                    setTimeout(()=>{
                                        div.innerHTML= "HAPPY INDEPENDENCE DAY"
                                       
                                    },1000);
                                },1000);
                            },1000);
                        },1000);
                    },1000);
                },1000);
            },1000);
        },1000);
    },1000);
},1000);



document.body.append(div);





