import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Table } from 'antd';

import * as ROUTES from '../../../../../constants/routes';

const List = ({ users, loading }) => {

  const columns = [
    {
      title: 'STT',
      dataIndex: 'index',
    },
    {
      title: 'First Name',
      dataIndex: 'firstName',
      render: (text, record) => <Link to={`${ROUTES.ADMINCP_USERS}/u/${record.uid}`}>{text}</Link>,
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      render: (text, record) => <Link to={`${ROUTES.ADMINCP_USERS}/u/${record.uid}`}>{text}</Link>,
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Button icon="delete" type="danger">Delete</Button>
      ),
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      /**
       * TODO: Xử lý Select All
       * console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
       */
    },
    getCheckboxProps: record => ({
      disabled: record.name === 'Disabled User',
      name: record.name,
    }),
  };

  return (
    <Table loading={loading} rowSelection={rowSelection} columns={columns} dataSource={users} />
  )
}
export default List;
