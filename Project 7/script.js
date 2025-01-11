const container=document.querySelector("#container");
const gc=document.querySelector(".grandchild");

const c1=document.querySelector(".child");

container.addEventListener("click",e=>{
    console.log("container");
},{capture:true}) // to trigger in rev

c1.addEventListener("click",e=>{
    console.log("child 1");
})

gc.addEventListener("click",e=>{
    console.log("Grandchild");
})

container.addEventListener("click",e=>{
    const isChild=e.target.classList.contains("child");
    console.log(isChild);
    if(!isChild){
        return;
    }
    const child=e.target;
    child.style.border="20px solid black";
});


/// disadavange of using multiple
//make code slow as for every div we have 1 event
// if we craete another ell then it has no evemt listener
// to overcome this problem we use evemt delegation--> givig to other
//delegation--> when we have add event for all child but therre is disadvantege so we add event or grand parent or ancestor
//exapmle if we have ele we have to handle events then we send their event handling work to parent


/// in case eventlistener does trigger in  in bubbling phase not in  capturing phase