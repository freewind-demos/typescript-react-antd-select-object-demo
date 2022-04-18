import {Select} from 'antd';
import React, {useState} from 'react'

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

function getFirst<T>(obj: T | T[]): T | undefined {
  if (Array.isArray(obj)) {
    return obj[0];
  } else {
    return obj
  }
}

export default function MySelect() {
  const [selectedUser, setSelectedUser] = useState<User>();

  const options = users.map(it => ({label: it.name, value: it.id, user: it}));

  return <>
    <Select<number, { user: User }>
      options={options}
      value={selectedUser?.id}
      onChange={(value, option) => setSelectedUser(getFirst(option)?.user)}
      style={{width: 250}}
      placeholder="User"
      showSearch
      dropdownMatchSelectWidth={false}
    />
    <hr/>
    {JSON.stringify(selectedUser)}
  </>
};
