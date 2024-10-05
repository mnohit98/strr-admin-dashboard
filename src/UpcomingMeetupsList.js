import React from 'react';
import { Datagrid, DateField, ImageField, List, NumberField, TextField } from 'react-admin';

export const UpcomingMeetupsList = (props) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="activity_name" label="Activity Name" />
            <DateField source="start_datetime" label="Start Date & Time" />
            <DateField source="end_datetime" label="End Date & Time" />
            <NumberField source="filled_seats" label="Filled Seats" />
            <NumberField source="total_seats" label="Total Seats" />
            <TextField source="venue" label="Venue" />
            <TextField source="about" label="About" />
            <TextField source="fee" label="Fee" />
            <ImageField source="activity_photo_url" label="Activity Photo" />
        </Datagrid>
    </List>
);
