import * as React from 'react';
import { Datagrid, DateField, List, NumberField, TextField } from 'react-admin';

const ActivityList = (props) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="activity_name" label="Activity Name" />
            <DateField source="start_datetime" label="Start Time" />
            <DateField source="end_datetime" label="End Time" />
            <NumberField source="filled_seats" label="Filled Seats" />
            <NumberField source="total_seats" label="Total Seats" />
            <TextField source="venue" label="Venue" />
            <TextField source="club_name" label="Club Name" />
        </Datagrid>
    </List>
);

export default ActivityList;
