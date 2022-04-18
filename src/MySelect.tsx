import {Select} from 'antd';
import React, {useState} from 'react'

import './MySelect.css';

type User = {
  id: number,
  name: string,
  email: string
}

const users: User[] = [
  {id: 1, name: "Jeff", email: "jeff@test.com"},
  {id: 2, name: "Mike", email: "mike@test.com"},
  {id: 3, name: "Tom", email: "tom@test.com"},
]
export default function MySelect() {
  const [selectedUser, setSelectedUser] = useState<User>();

  const options = users.map(it => ({label: it.name, value: it.id}));

  return <Select placeholder={'User'}
                 options={options}
                 value={selectedUser?.id}
                 onChange={value => setSelectedUser(users.find(it => it.id === value))}
  />
};
