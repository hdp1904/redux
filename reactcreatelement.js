
// class Newlife{
//     constructor(name="Judy",age=15){
//         this.name=name;
//         this.age=age;
//     }

//     study(hour=25){
//         this.hardwork = hour;
//         return `Don study ${this.hardwork}`;
//     }

//     static butyou(zzz){
//         console.log(zzz+" shit");
//     }
// }

// class Oldlife extends Newlife{
//     constructor(sex){
//         super();
//         this.age = sex;
//     }
//     nogiveup(lolo){
//        this.highway = lolo;
//        return this.highway;
//     }

//     study(like){
//         console.log(`like ${like}`)
//     }


// }

// // const hhh = new Oldlife("male");

// console.log(Oldlife.butyou("sss"+" zgg"));


// console.log("React:", React);
// console.log("React.DOM:",ReactDOM);

class Myfirst extends React.Component{
    render(){
        // console.log(this.props);
        return React.createElement("h"+this.props.level,null,"this.props.children");
    }
}

class Middlelist extends React.Component{
    constructor(props){
        super(props);
        this.state={maxlevel:this.props.start};
    }

    componentWillMount(){
        
        this.intervalID = setInterval(()=>{
            console.log(this.intervalID);
            this.setState((currentState,currentProps)=>{
                if(currentState.maxlevel > currentProps.end){
                    return currentState;
                }
                else return {maxlevel:currentState.maxlevel+1}});
        },1000
        )
    }

    render(){
        let nums=[];
        let num;
        for(let i = this.props.start; i < this.state.maxlevel; i++){
            num = React.createElement(Myfirst,{level:i});
            nums.push(num);
        }
        return React.createElement("div",null,nums);
    }

    componentWillUnmount(){
        console.log("5");
        window.clearInterval(this.intervalID);
    }

}

window.addEventListener("load",
  function(){
      const aaa = React.createElement(Middlelist,{start:2,end:5});
      ReactDOM.render(aaa, document.body);
  }
)
