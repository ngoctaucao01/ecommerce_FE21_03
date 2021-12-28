import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { Typography } from 'antd';
import { withFirebase } from '../../../firebase';
import UsersDetailItem from './components/Item';

const UsersDetailPage = ({ firebase, match }) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const userId = match.params.id;
  const { Title } = Typography;

  useEffect(() => {
    firebase
      .user(userId)
      .on('value', snapshot => {
        setUser(snapshot.val());
        setLoading(false);
      });
  }, [firebase, userId]);

  return (
    <>
      <Title level={3}>Users Profile</Title>
      {loading ? <>Loading</> : <UsersDetailItem user={user} />}
    </>
  )
}

export default compose(
  withFirebase,
  withRouter,
)(UsersDetailPage);
