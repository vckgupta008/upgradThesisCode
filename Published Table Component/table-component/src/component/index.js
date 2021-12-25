import React from 'react';
import "./index.css";

const TableComponent = ({ data }) => {
  let createtableHeader =
    data &&
    data.length &&
    Object.keys(data[0]).map((column,index) => {
      return <th key={index}>{column}</th>;
    });
  let createTableData =
    data &&
    data.map((item, index) => {
      return (
        <tr key={index}>
          {Object.keys(item).map((column, index) => {
            return <td key={index}>{item[column]}</td>;
          })}
        </tr>
      );
    });
  return (
    <table>
      <thead><tr>{createtableHeader}</tr></thead>  
      <tbody>{createTableData}</tbody>
    </table>
  );
};

export default TableComponent;
