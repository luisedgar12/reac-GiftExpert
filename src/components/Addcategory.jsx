import React, { useState } from "react";

const Addcategory = ({ onNewAdd }) => {
  const [inputvalue, setInputvalue] = useState("");

  const onInputchangue = ({ target }) => {
    setInputvalue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputvalue.trim().length <= 1) return;
     setInputvalue('');
    onNewAdd(inputvalue.trim());
  
  };

  return (
    <form onSubmit={ onSubmit}>
      <input type="text" placeholder="Buscar Gift" onChange={onInputchangue} value={inputvalue}/>
    </form>
  );
};

export default Addcategory;
