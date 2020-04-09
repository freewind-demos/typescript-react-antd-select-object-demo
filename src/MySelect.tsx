import {Select} from 'antd';
import React from 'react'

import './MySelect.css';

export default function MySelect() {
  const users = ['aaa', 'bbb', 'ccc cc cccc cc cccc', 'ddd']
  return <Select className='hello' dropdownClassName={'wrapped-select-option'} placeholder={'User'}>
    {users.map(user => <Select.Option key={user} value={user}>{user}</Select.Option>)}
  </Select>
};
