import React from 'react'

const TodoItems = (props) =>{
    const {items , deleteitems} = props;
    let todolength = items.length;
    
    const ListItems = todolength ? (
        items.map((item,index) => {
            return(
                <div key={item.id}>
                    <span className="name"> {item.name} </span>
                    <span className="action" onClick= {() => deleteitems(index)}> x </span>
                </div>
            )
        }) 
    ) :(<p> . . There Is No Missions . . </p>)

    return(
        <div className="listitems">
            <div>
                <span className="name next">Missions</span>
                <span className="action next">Action</span>
            </div>
            {ListItems}
        </div>
    )

}
export default TodoItems