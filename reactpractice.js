// //範例一
// class MyClass extends React.Component{    
//     render(){
//         const {name, exp1} = this.props;
//         console.log(name);
//         console.log(exp1);

//         return (
//             <p>
//                 {name}:{exp1}
//             </p>
//         )
//     }
//     }


// window.addEventListener("load",()=>{
//     ReactDOM.render(<div>
//         <MyClass name = "A" exp1={true}/>
//         <p> {5+5} * {5}</p>
//         </div>, document.querySelector("div"));
// }
// )


//範例二

const D = C => {
    console.log(C);
    return ({children}) => (
        <div>
            <span>Foo</span>
            <C>{children}</C>
        </div>
        );};

class MyClass extends React.Component{    
    render(){
        const {children} = this.props;
        console.log(this.props);
        return <span>{children}</span>;
    }}

    // const D = c => {
    //     return ((x)=>x)}
    //    const x = D(1,3)
    // let a = x(6);
    // console.log(a)  //6

const X = D(MyClass, "world")

window.addEventListener("load",()=>{
    ReactDOM.render(<X>hello</X>, document.querySelector("div"));
}
)