import React ,{useState} from 'react'
import "./todo.css";
import { ADD,remove,clear} from '../actions/index'
import { useDispatch,useSelector } from 'react-redux';
const Todo = () => {
    const [inputData, setInputData] = useState('');
    const list = useSelector((state)=>{
        return state.TodoReducer.list
    })
     const dispatch = useDispatch();
     return(
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <figcaption>Add Your List Here 😀</figcaption>
                    </figure>
                    <div className="addItems">
                        <input type="text" placeholder=" Add Items..."
                        value={inputData} 
                        onChange={(event)=>setInputData(event.target.value)}/>
                        <i className="fa fa-plus add-btn" onClick={()=>dispatch(ADD(inputData),setInputData(''))}></i>
                    </div>
                     <div className="showItems">
                         {
                           list.map((elem)=>{
                               return(
                                   <div className="eachItem" key={elem.id}>
                                       <h3>{elem.data}</h3>
                                       <div className="todo-btn">
                                       <i className="far fa-trash-alt add-btn" title="Delete Item" onClick={() => dispatch(remove(elem.id))}></i>
                                       </div>
                                   </div>  
                               )
                           })  
                         }
                        
                    </div>
                    <div className="show-Items">
                        <button className="btn effect04" data-sm-link-text="remove All"
                        onClick={()=>dispatch(clear())}
                        ><span>Check List</span></button>
                    </div>

                </div>
            </div>  
        </>
    )
}

export default Todo
