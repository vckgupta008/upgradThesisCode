# data-table-components

data-table-components is a simple to use yet completely customizable component for using tables.

  - Add Json data (Array of Objects) and it will print the table

### Installation

This requires [React.js and Prop-Types] to run.
```sh
npm i data-table-components
```

### Demo

[Sandbox link to Play with](https://codesandbox.io/s/exciting-framework-mcjpp?file=/src/index.js:105-126)

### How to Use

Install and import data-table-components and pass the props as per the below table
```sh
import React from "react";
import TableComponent from "data-table-components";

let tableData = [
  { name: "idjsk", employee: "32434", age: 11 },
  { name: "idjsk", employee: "32434", age: 12 },
  { name: "idjsk", employee: "32434", age: 13 },
  { name: "idjsk", employee: "32434", age: 14 }
];

const App = () => {
  return (
    <TableComponent data={tableData}/>
  );
};
export default App;
```