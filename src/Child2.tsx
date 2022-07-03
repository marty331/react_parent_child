import React from "react";

interface Child2Props {
  title: string;
}

const  Child2: React.FC<Child2Props> = (props) => {
  return(
    <div className="child2">
      <h2>{props.title}</h2>
    </div>
  )
}

export default Child2;