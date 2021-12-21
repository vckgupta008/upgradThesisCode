import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let userInfo = [
  {EmpNo: '01', firstName: 'Vicky', lastName: 'Gupta' ,age: "25", country: 'India' },
  {EmpNo: '02',firstName: 'Ben', lastName: 'Jackman' ,age: "22", country: 'Australia' },
  {EmpNo: '03',firstName: 'Tom', lastName: 'Holland' ,age: "23", country: 'India' },
  {EmpNo: '04',firstName: 'Huge', lastName: 'Taylor' ,age: "24", country: 'USA' },
  {EmpNo: '05',firstName: 'Ian', lastName: 'Baker' ,age: "25", country: 'USA' },
  {EmpNo: '06',firstName: 'Jesse', lastName: 'Martin' ,age: "26", country: 'Australia' },
  {EmpNo: '07',firstName: 'Joey', lastName: 'Marshalls' ,age: "20", country: 'USA' },
  {EmpNo: '08',firstName: 'Monika', lastName: 'Gupta' ,age: "35", country: 'India' },
  {EmpNo: '09',firstName: 'Ross', lastName: 'Geller' ,age: "15", country: 'USA' },
  {EmpNo: '10',firstName: 'John', lastName: 'Morrison' ,age: "45", country: 'Australia' }
];

const App = () => {
  return (
    <table>
    <tr>
        <th>Employee No</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Age</th>
        <th>Country</th>
    </tr>
    {userInfo.map((user,index)=>{
      return (
         <tr key={index}>
            <td>{user.EmpNo}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.age}</td>
            <td>{user.country}</td>
          </tr>
      ) 
    })}
    </table>
  )
}

const rootElement = document.getElementById('root'); 
console.time();
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
console.timeEnd()

