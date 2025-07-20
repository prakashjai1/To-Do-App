import { useState } from "react";
// Create a To Do App
{
  /*
  1.Create a input box for type a to do list
  2.Add a button for adding a todo item in a list
  3.Add a remove function on todo
  4.Add a edit function on todo  
*/
}
function App() {
  const [item, setItem] = useState("");
  const [itemToDo, setItemToDo] = useState([])


  const addList = ()=>{
    setItemToDo((curr=>{
      return ([...curr, {listName:item, listId:crypto.randomUUID()}])
    }))
    console.log(itemToDo)
  }

  const itemDel = (itemId)=>{
    setItemToDo(curr=>{
      return curr.filter(item=>item.listId !== itemId)
    })
  }
  
  const itemEdit = (itemId,name)=>{
    setItemToDo(curr=>{
      return curr.map(item=>{
        return item.listId === itemId ? {...item,listName:name} : item
      })
    })
  }
  return (
    <>
      <div className="container">
        <h1>To-Do-App</h1>
        <hr />
        <div className="inputBox">
          <input type="text" placeholder="Enter List..." onChange={(e)=>setItem(e.target.value)}/>
          <button onClick={addList} disabled={item===""}>ADD</button>
        </div>
        <div className="itemList">
          <ol>
            {
              itemToDo.map((curr,index)=>{
                return(
                  <li key={curr.listId}>
                    {index+1}.
                    {curr.listName}
                    <div className="btnBox">
                      <button onClick={()=>{itemEdit(curr.listId,prompt("Enter you New List Name:"))}}><i class="bi bi-pencil-square"></i></button>
                      <button onClick={()=>{itemDel(curr.listId)}}><i class="bi bi-trash"></i></button>
                    </div>
                  </li>
                )
              })
            }
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
