
let store;

let reducer = function(state,action){
    switch(action.type){
        case "CLICK":
            console.log(state.on);
            return {on:!state.on};
        default:
            return state;
    }
}

let xxx = document.querySelector("div");

let handle = () => {
    let newod = store.getState();
    xxx.innerText = newod.on;
}


window.addEventListener("load", ()=>{
  store = Redux.createStore(reducer, {on:false});
  let unsubscribe = store.subscribe(handle);
  document.addEventListener("click",()=>{
    store.dispatch({
      type:"CLICK"
    });
  })
})