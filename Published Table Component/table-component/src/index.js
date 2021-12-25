import React from 'react';
import ReactDOM from 'react-dom';
import TableComponent from "./component";

import reportWebVitals from './reportWebVitals';

let tableData = [
  { name: "idjsk", employee: "32434", age: 11 },
  { name: "idjsk", employee: "32434", age: 12 },
  { name: "idjsk", employee: "32434", age: 13 },
  { name: "idjsk", employee: "32434", age: 14 }
];

ReactDOM.render(
  <React.StrictMode>
    <TableComponent data={tableData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
