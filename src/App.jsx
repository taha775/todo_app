import React,{Component} from "react";
import { IoIosAddCircleOutline } from 'react-icons/io';
// import { AiTwotoneStar } from 'react-icons/ai';
import { FcStart } from 'react-icons/fc';


class App extends Component{
    constructor(){
        super()
        this.state={
            value:"",
            todo:[
               
            ],
          
        }

        console.log("constructor")

    }

    //fb =>first 
    componentDidMount(){
        this.setState({}) //render
        //life cycle =>api 
        // console.log("componenet did mount")
        let data = localStorage.getItem("Todo_List")
        console.log(data)
        if(data ==null){
            this.state.todo =[]

        }
        else{
            this.state.todo= JSON.parse(data)
            this.setState({
           
            })
        
        }

       

        //parse string to obj
        // v=10
         //todo =>data 

        //render 
   
    }





   

    //input 
    handlechg=(val)=>{
        this.setState({
            value:val
        })

    }


    //submit 
setdata=()=>{
    console.log(this.state.value)

    //object title,s
    let obj ={
        title : this.state.value ,
        s : 0
    }

    this.state.todo=[...this.state.todo,obj]

    //LOCAL SET TODOS
    localStorage.setItem("Todo_List",JSON.stringify(this.state.todo))

    this.setState({
      
        value:""
    })

    // 
   
    console.log(this.state.todo)
}

//state chg = 0 or 1
edit = (ind)=>{
    // let len = this.state.todo[ind].title.length+50
    //o 
    for(var i =0;i<this.state.todo.length;i++){
        this.state.todo[i].s=0
    }

    this.state.todo[ind].s=1
    // this.state.input_width=len

    this.setState({})
   
    

}

delete_data = (ind)=>{
    this.state.todo.splice(ind,1) //delete one element
    localStorage.setItem("Todo_List",JSON.stringify(this.state.todo))
    this.setState({})

}

//todo title => value inp 
setnewtext=(val,ind)=>{
 this.state.todo[ind].title=val
    this.setState({
      
    })


}

update = (i)=>{
    this.state.todo[i].s=0

    localStorage.setItem("Todo_List",JSON.stringify(this.state.todo))

    this.setState({
      
    })
}



    render(){
        console.log("render")

        return(
            <div>
                <h1>Todo List </h1>
                <input value={this.state.value} onChange={(e)=>this.handlechg(e.target.value)} type="text" />
                <button onClick={()=>this.setdata()}>
                    <IoIosAddCircleOutline color="red"/>
                </button>
                
                {
                    this.state.todo.map((v,i)=>{
                        return(

                            v.s == 0 ?
                            //text 
                          
                            <li key={i} style={{listStyle:"none",margin:12+"px"}}>
                              <i><FcStart/></i>
                                {v.title}
                              <button onClick={()=>this.edit(i)}>edit</button>
                              <button onClick={()=>this.delete_data(i)}>delete</button>

                            </li>

                            :
                            <li key={i} style={{listStyle:"none",margin:12+"px"}}>
                            <i><FcStart/></i> 
                            <input type="text" value={v.title} onChange={(e)=>this.setnewtext(e.target.value,i)} />
                            <button onClick={()=>this.update(i)}>update</button>
                        

                          </li> 
                          

                        

                        )
                    })
                }
              
            </div>
        )
    }

}

export default App