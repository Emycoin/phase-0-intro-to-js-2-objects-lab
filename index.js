const employee = {
  name: "Emy",
  streetAddress: "64 Stanhope Street",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
  return Object.assign({}, employee, { [key]: value });
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  return Object.assign(employee, { [key]: value });
}
function deleteFromEmployeeByKey(employee, key) {
  //to clone any object
  // Object.assign({}, theObjectToCopy)
  const clonedEmployeeObj = Object.assign({}, employee);
  delete clonedEmployeeObj[key];
  return clonedEmployeeObj;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}