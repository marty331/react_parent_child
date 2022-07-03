import React, { useState } from "react";

interface child1props {
  updateParentTitle(title: string): any;
  updateChild2Title(title: string): any;
}

const Child1: React.FC<child1props> = (props) => {
  const [titleVal, setTitleVal] = useState('')
  const [childTitleVal, setChildTitle] = useState('')

  function setParent(){
    if (titleVal.length > 1) {
      props.updateParentTitle(titleVal)
    } 
  }

  function setChild2(){
    if (childTitleVal.length > 1){
      props.updateChild2Title(childTitleVal)
    }
  }

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitleVal(event.target.value)
  }

  const handleChild2Input = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChildTitle(event.target.value)
  }


  return(
    <div>
      <h2>I'm Child1.</h2>
      <div className="child1_container">
        <div className="grid">
          <label htmlFor="parent_title">Parent Title Input</label>
          <input type="text" name="titles" id="parent_title" placeholder="Parent Title" onChange={handleInput}/>
          <button onClick={setParent}>Update parent title</button>
        </div>
        
        <div className="grid">
          <label htmlFor="child2_title">Child2 Title Input</label>
          <input type="text" name="titles" id="child2_title" placeholder="Child2 Title" onChange={handleChild2Input}/>
          <button onClick={setChild2}>Update Child2 title</button>
        </div>
      </div>
    </div>
  )
}

export default Child1;