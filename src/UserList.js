import * as React from 'react';
import { Datagrid, EmailField, List, TextField } from 'react-admin';

const UserList = (props) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="name" label="Name" />
            <EmailField source="email" label="Email" />
        </Datagrid>
    </List>
);

export default UserList;
