import React from 'react'

const Searchbar = () => {
  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log('確認OK!');
  };

  return (
    <form onSubmit={onFormSubmit} className="ui form">
      <div className="field">
        <label>First Name</label>
        <input type="text" name="first-name" placeholder=" " />
      </div>
    </form >
  )
}

export default Searchbar;