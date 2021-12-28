import React, { useState, useEffect } from 'react';
import Loadable from 'react-loadable';
import { Typography } from 'antd';

import { withFirebase } from '../../../firebase';

const Loading = () => <>Loading...</>

const List = Loadable({
  loader: () => import('./Components/List'),
  loading: Loading,
  render(loaded, props) {
    let List = loaded.default;
    return <List {...props} />
  }
});

const UsersPage = ({ firebase }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const { Title } = Typography;

  useEffect(() => {
    firebase
      .users()
      .on('value', snapshot => {
        const usersObject = snapshot.val();
        const usersList = Object.keys(usersObject).map((key, index) => ({
          ...usersObject[key],
          index: index + 1,
          uid: key,
          key: key,
        }));
        setUsers(usersList);
        setLoading(false);
      });
  }, [firebase]);

  return (
    <>
      <Title level={3}>All Users</Title>
      <List users={users} loading={loading} />
    </>
  )
}

export default withFirebase(UsersPage);
