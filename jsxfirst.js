const inputtext = document.querySelector("#bnm");
inputtext.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log(e.target);
})


class Head extends React.Component{
    constructor(props){
        super(props);
        this.state={keyin:""};
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
        this.setState({keyin:e.target.value});
        
        // console.log(e.target);
    }

    handleSubmit(e){
        e.preventDefault();
        console.log(this.state.keyin);
        this.setState({keyin:""});
        const xxx = document.querySelector(".okokok");
        xxx.style.color="purple";

    }

   
}

window.addEventListener("load",()=>{
    console.log(Redux);
    ReactDOM.render(<Head style={{color:"red"}}/>, document.querySelector("div"));
}
)