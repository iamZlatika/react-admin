import React from 'react'
import {List, Datagrid, TextField, DateField, EditButton, DeleteButton, EmailField } from 'react-admin'

 const UserList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source='id' />
        <TextField source='name' />
        <EmailField source='email' />
        <DateField source='publishedAt' />
        <EditButton basePath='/users' />
        <DeleteButton basePath='/users'/>
      </Datagrid>
    </List>
  )
}
export default UserList