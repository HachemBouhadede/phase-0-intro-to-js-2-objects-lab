const employee = {name : 'hachem', streetAddress : `164 Constantine`};
console.log("this is the initial employee object:");
console.log(employee)
//1
console.log("non destructivly change of the object")
function updateEmployeeWithKeyAndValue(employee, key, value){
    const updateEmployeeWithKeyAndValue = {...employee}
    updateEmployeeWithKeyAndValue[key] = value
    return updateEmployeeWithKeyAndValue
}
console.log("employee :", employee)
console.log("nondestructive change :", updateEmployeeWithKeyAndValue(employee, 'name', 'Sam'));
//2
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value
    return employee
}
console.log("destructive change of employee")
console.log("DF :" ,destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '12 Broadway'))
console.log("updated employee:", employee) 
//3
function deleteFromEmployeeByKey(employee, key){
    const newEmployee =  {...employee}
    delete newEmployee[key]
    return newEmployee
}
console.log("non destructive delete")
console.log("employee =",  employee)
console.log("delted by key =", deleteFromEmployeeByKey(employee, "name"))

//4
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
}
console.log('destructive delete');
console.log("employee =", employee);
console.log("Destructive Deletefunction Call=", destructivelyDeleteFromEmployeeByKey(`name`))