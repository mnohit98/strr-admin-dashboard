import * as React from 'react';
import { Admin, Resource } from 'react-admin';
import { UpcomingMeetupsList } from './UpcomingMeetupsList';
import authProvider from './authProvider';
import { dataProvider } from './dataProvider';

const App = () => (
  <Admin authProvider={authProvider} dataProvider={dataProvider}>
    <Resource name="upcoming-meetups" list={UpcomingMeetupsList} />
  </Admin>
);

export default App;
