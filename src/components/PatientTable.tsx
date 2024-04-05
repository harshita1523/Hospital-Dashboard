import React from 'react';
import { Table } from 'antd';
import type { TableColumnsType } from 'antd';
import { faker } from '@faker-js/faker';

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  gender:string;
  address: string;
  nurse:string;
  compounder:string;
  column5:string
  column6:string
  column7:string
  column8:string
}

const columns: TableColumnsType<DataType> = [
  {
    title: 'Patient Name',
    width: 100,
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
  },
  {
    title: 'Age',
    width: 100,
    dataIndex: 'age',
    key: 'age',
    fixed: 'left',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: '1',
    width: 150,
  },
  {
    title: 'Gender',
    dataIndex: 'address',
    key: '2',
    width: 150,
  },
  {
    title: 'Nurse',
    dataIndex: 'address',
    key: '3',
    width: 150,
  },
  {
    title: 'Compounder',
    dataIndex: 'address',
    key: '4',
    width: 150,
  },
  {
    title: 'Column 5',
    dataIndex: 'address',
    key: '5',
    width: 150,
  },
  {
    title: 'Column 6',
    dataIndex: 'address',
    key: '6',
    width: 150,
  },
  {
    title: 'Column 7',
    dataIndex: 'address',
    key: '7',
    width: 150,
  },
  { title: 'Column 8', dataIndex: 'address', key: '8' },
  {
    title: 'Status',
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: () => <a>action</a>,
  },
];

const data: DataType[] = [];
for (let i = 0; i < 100; i++) {
    data.push({
        key: i,
        name: faker.person.fullName(), 
        age:faker.number.int(), 
        address: faker.address.streetAddress(), 
        gender: faker.person.sexType(),
        nurse: faker.person.fullName(), // Generates a random nurse name
        compounder: faker.person.fullName(), // Generates a random compounder name
        column5: faker.lorem.word(), // Generates a random word for column 5
        column6: faker.lorem.word(), // Generates a random word for column 6
        column7: faker.lorem.word(), // Generates a random word for column 7
        column8: faker.lorem.word(), // Generates a random word for column 8
      });
}

const PatientTable: React.FC = () => (
  <Table columns={columns} dataSource={data} scroll={{ x: 1500, y: 300 }} />
);

export default PatientTable;