import React from 'react';
import './filterform.scss';

const FilterForm = () => {
  return (
    <div>
      <form className='form'>
        <div className='field'>
          <label htmlFor="organization">Organization</label>
          <select name="organization" id="organization">
            <option value="select">Select</option>
            <option value="lendsqr">Lendsqr</option>
            <option value="irorun">Irorun</option>
          </select>
        </div>
        <div className='field'>
          <label htmlFor="username">Username</label>
          <input type="text" placeholder='User'/>
        </div>
        <div className='field'>
          <label htmlFor="email">Email</label>
          <input type="email" placeholder='Email'/>
        </div>
        <div className='field'>
          <label htmlFor="date">Date</label>
          <input type="date" placeholder='Date' value=" "/>
        </div>
        <div className='field'>
          <label htmlFor="phone number">Phone Number</label>
          <input type="text" placeholder='Phone Number'/>
        </div>
        <div className='field end'>
          <label htmlFor="status">Status</label>
          <select name="status" id="status" placeholder='Select'>
            <option value="inactive">Inactive</option>
            <option value="active">Active</option>
            <option value="pending">Pending</option>
            <option value="blacklisted">Blacklisted</option>
          </select>
        </div>
      </form>
    </div>
  )
}

export default FilterForm