import React, { useState } from 'react'

const Searchbar = ({ onSubmit }) => {
  const [term, setTerm] = useState('');

  const onFormSubmit = (e) => {
    e.preventDefault();
    // console.log('確認OK!');
    onSubmit(term);
    // setTerm("");
  };

  return (
    <form onSubmit={onFormSubmit} className="ui form">
      <div className="field">
        <label>First Name</label>
        <input
          type="text"
          name="search"
          placeholder=" "
          value={term}
          onChange={(e) => {
            setTerm(e.target.value);
          }} />
      </div>
    </form >
  )
}

export default Searchbar;