function start(){
 
    const in1=document.getElementsByClassName("inp")[0].value;
   
    
    fetch(`https://api-thirukkural.vercel.app/api?num=${in1}`)
    .then((res)=> res.json())
     .then((res1)=> {
        const card=document.createElement('div');
        card.setAttribute('class','card');
         const cardbody=document.createElement('div');
        cardbody.setAttribute('class','card-body');
        const h=document.createElement('h5');
        h.setAttribute('class','card-title');
        h.innerHTML="THIRUKKURAL"
        const t1=document.createElement('p');
        t1.setAttribute('class','title');
        t1.innerHTML="KURAL";
     const p1=document.createElement('p');
     p1.innerHTML=res1.line1;
     const p2=document.createElement('p');
     p2.innerHTML=res1.line2;
     const t2=document.createElement('p');
     t2.setAttribute('class','title');
     t2.innerHTML="Meaning in Tamil";
     const p3=document.createElement('p');
     p3.innerHTML=res1.tam_exp;
     const t3=document.createElement('p');
     t3.setAttribute('class','title');
     t3.innerHTML="Meaning in English";
     const p4=document.createElement('p');
     p4.innerHTML=res1.eng_exp;

     cardbody.append(h,t1,p1,p2,t2,p3,t3,p4);
     card.append(cardbody);
     document.body.append(card);
    
    
     })
    .catch((err)=>console.log(err));


}


