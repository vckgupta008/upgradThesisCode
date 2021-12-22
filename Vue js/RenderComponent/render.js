
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

let tableBody='';
userInfo.map(user=>{
    tableBody+= `
        <tr>
            <td>${user.EmpNo}</td>
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.age}</td>
            <td>${user.country}</td>
        </tr>
    
    `
})
let createTable = `
<table>
    <tr>
        <th>Employee No</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Age</th>
        <th>Country</th>
    </tr>
    ${tableBody}
</table>    
`;

console.time();
var v = new Vue({
    el: '#root',
    data: {
      message: 'hi #linky'
    },
    computed: {
      dynamicComponent: function() {
        return {
          template: `${createTable}`,
          methods: {
            someAction() {
              console.log("Action!");
            }
          }
        }
      }
    },
    methods: {
      hashTags: function(value) {
        // Replace hash tags with links
        return value.replace(/#(\S*)/g, '<a v-on:click="someAction">#$1</a>')
      }
    }
});
console.timeEnd();