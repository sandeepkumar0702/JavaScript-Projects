const search=document.getElementById("search");
function myfetch(term){
    console.log("fetching   "+term);
}

function debounce(f,t){
    let timerId=null;
    function debounceF(...args){
        clearTimeout(timerId);
        timerId=setTimeout(()=>{
            f(...args);
        },t)
    }
    return debounceF;
}

const myFetchDebounced=debounce(myfetch,2000);

search.addEventListener("input",e=>{
    myFetchDebounced(e.target.value);
})