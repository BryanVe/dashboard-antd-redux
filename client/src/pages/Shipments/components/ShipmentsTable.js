import React from "react";
import { Col, Table, Grid } from "antd";
import { useSelector } from "react-redux";

const { useBreakpoint } = Grid;

const ShipmentsTable = () => {
  const { lg } = useBreakpoint();
  const { data, loading } = useSelector((state) => state.shipments);

  return (
    <Col xs={24}>
      <Table
        scroll={lg ? null : { x: "100%" }}
        rowKey="_id"
        columns={columns}
        dataSource={data}
        bordered
        loading={loading}
      />
    </Col>
  );
};

export default ShipmentsTable;

const columns = [
  {
    title: "Id",
    dataIndex: "_id",
    // filters: [
    //   {
    //     text: 'Joe',
    //     value: 'Joe',
    //   },
    //   {
    //     text: 'Jim',
    //     value: 'Jim',
    //   },
    //   {
    //     text: 'Submenu',
    //     value: 'Submenu',
    //     children: [
    //       {
    //         text: 'Green',
    //         value: 'Green',
    //       },
    //       {
    //         text: 'Black',
    //         value: 'Black',
    //       },
    //     ],
    //   },
    // ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    // onFilter: (value, record) => record.name.indexOf(value) === 0,
    // sorter: (a, b) => a.name.length - b.name.length,
    // sortDirections: ['descend'],
  },
  {
    title: "Cliente",
    dataIndex: "cliente",
    // defaultSortOrder: 'descend',
    // sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Fecha de carga",
    dataIndex: "fecha_de_carga",
    // filters: [
    //   {
    //     text: 'London',
    //     value: 'London',
    //   },
    //   {
    //     text: 'New York',
    //     value: 'New York',
    //   },
    // ],
    // filterMultiple: false,
    // onFilter: (value, record) => record.address.indexOf(value) === 0,
    // sorter: (a, b) => a.address.length - b.address.length,
    // sortDirections: ['descend', 'ascend'],
  },
  {
    title: "Herramienta",
    dataIndex: "herramienta",
  },
  {
    title: "Cargado por",
    dataIndex: "cargado_por",
  },
  {
    title: "Estado",
    dataIndex: "estado",
  },
];
