import React from "react";
import { useState } from "react";
import Child1 from './Child1';
import Child2 from "./Child2";

export default function Parent() {
  const [title, setTitle] = useState('Parent!')
  const [child2Title, setChild2] = useState('Child2')

  function updateTitle(newTitle: string){
    setTitle(newTitle)
  }
  function setChild2Title(child2Title: string) {
    setChild2(child2Title)
  }
  return (
    <div className="parent_container">
      <h1>{title}</h1>
      <div className="child_container">
        <Child2 
          title={child2Title}
        />
        <Child1 
          updateChild2Title={setChild2Title}
          updateParentTitle={updateTitle}
        />
      </div>
    </div>
  )
}