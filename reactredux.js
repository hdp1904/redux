const inputtext = document.querySelector("#bnm");
inputtext.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log(e.target);
})

let store;
let reducer;

class Head extends React.Component{
    constructor(props){

        this.state=store.getState();
    }
    
    render(){
        return <form onSubmit={this.handleSubmit.bind(this)}>
        <li className="okokok" style={{color:this.props.color}}>Hi</li>
        <input type="text" value={this.state.keyin} onChange={this.handleChange.bind(this)}/>
        <button>Submit</button>
        </form>
    }

    handleChange(e){
        e.preventDefault();
        store.dispatch({
            type:"Change_Text",
            keyin:e.target.value
        })
        
     // console.log(e.target);
    }

    componentDidMount(){
        this.unsubscribe = store.subscribe(this.helper.bind(this));
    }

    helper(){
        this.setState(store.getState());
        console.log(this.state);
    }

    componentWillUnmount(){
        this.unsubscribe();
    }

    handleSubmit(e){
        e.preventDefault();
        console.log(this.state.keyin);
        const xxx = document.querySelector("ok");
        xxx.style.color="purple";

    }
}


reducer = function(state, action){
    switch(action.type){
        case "Change_Text" :
            return {keyin:action.keyin};
        default:
            return state;
    }
}

window.addEventListener("load",()=>{

    store = Redux.createStore(reducer, {keyin:""});

    console.log(Redux);
    ReactDOM.render(<Head style={{color:"red"}}/>, document.querySelector("div"));
}
)
