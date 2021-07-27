const Employee = require('../lib/employee.js');

describe('getName() method', () => {
    it('should return a newly created employees name', () => {
        const newEmployee = new Employee('John', '123', 'johndoe@gmail.com')

        expect(newEmployee.getName()).toEqual('John')
    })
})

describe('.getId() method', () => {
    it('should return the id for a new instance of Employee', () => {
        const newEmployee = new Employee('John', '123', 'johndoe@gmail.com')

        expect(newEmployee.getId()).toEqual('123')
    })
})

describe('.getEmail() method', () => {
    it('should return the email address for a new instance of Employee', () => {
        const newEmployee = new Employee('John', '123', 'johndoe@gmail.com')

        expect(newEmployee.getEmail()).toEqual('johndoe@gmail.com')
    })
})

describe('.getRole() method', () => {
    it('should return "employee" as the role for the new instance of Employee', () => {
        const newEmployee = new Employee('John', '123', 'johndoe@gmail.com')

        expect(newEmployee.getRole()).toEqual('Employee')
    })
})