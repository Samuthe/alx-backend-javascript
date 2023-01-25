export default function createEmployeesObject(employee, departmentName) {
  const obj = {
    [employee]: departmentName,
  };
  return obj;
}
// console.log(createEmployeesObject(['samuel'], 'Finance'));
