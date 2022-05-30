// Add the coffee to local storage with key "coffee"



async function getdata(){
    try{
        let res = await fetch(` https://masai-mock-api.herokuapp.com/coffee/menu`);
         
        let data= await res.json();
        console.log(data);
    }
   catch(error){
       console.log("error :",error);
   }
   
}
getdata();

function displayData(data){
    
 data.map(function (el){
    let div= document.createElement("div")
    let p1=document.createElement("p")
    p1.innerText=el.description
    let p2=document.createElement("p")
    p2.innerText=el.id

    
    menu.append(p1,p2)
    
 })
}
