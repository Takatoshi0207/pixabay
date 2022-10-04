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
    <div className="ui segment">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label>Image Search</label>
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
    </div>
  )
}

export default Searchbar;