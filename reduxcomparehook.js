const inputtext = document.querySelector("#bnm");
inputtext.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log(e.target);
})

let store;

let reducer;

const initialState ={
    keyin : Number(0),
    fuck:  "shit"
  }

class Head extends React.Component{
    constructor(props){
        super(props);
        this.state=store.getState();
    }
    
    render(){
        return <>
        <li className="okokok" style={{color:this.props.color}}>{this.state.keyin}{this.state.fuck}</li>
        <button onClick={this.handleIncrese.bind(this)}>Increse</button>
        <button onClick={this.handleDecrese.bind(this)}>Decrese</button>
        <button onClick={this.handleZero.bind(this)}>Zero</button>
        </>
    }

    handleIncrese(e){
        e.preventDefault();
        store.dispatch({
            type:"Incresement",
            cool:"gogogo"
        })
    }

    handleDecrese(e){
        e.preventDefault();
        store.dispatch({
            type:"Decresement"
        })
    }

    handleZero(e){
        e.preventDefault();
        store.dispatch({
            type:"Zeronumber"
        })
    }


    componentDidMount(){
        this.unsubscribe = store.subscribe(this.helper.bind(this));
    }

    helper(){
        this.setState(store.getState());
        // console.log(this.state);
    }

    componentWillUnmount(){
        this.unsubscribe();
    }

    handleSubmit(e){
        e.preventDefault();
        console.log(this.state.keyin);
        // this.setState({keyin:""});
        const xxx = document.querySelector(".okokok");
        xxx.style.color="purple";

    }
}


reducer = function(state, action){
    switch(action.type){
        case "Incresement":
            console.log(state);
            return {keyin:state.keyin+1, fuck:action.cool}
        case "Decresement":
            console.log(state);
            return {keyin:state.keyin-1}
        case "Zeronumber":
        default:
            return {keyin:0,fuck:state.fuck};
    }
}

window.addEventListener("load",()=>{

    store = Redux.createStore(reducer, initialState);

    // console.log(initialState);
    ReactDOM.render(<Head style={{color:"red"}}/>, document.querySelector("#cvv"));
}
)
