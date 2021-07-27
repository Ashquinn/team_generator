const Manager = require('../lib/manager.js');

describe('arguments passed via super in Manager constructor', () => {
    it('should return new Manager name, id, and email', () => {
        const newManager = new Manager('John', '123', 'johndoe@gmail.com', 'johndoe')

        expect(newManager.getName()).toEqual('John');

        expect(newManager.getId()).toEqual('123');

        expect(newManager.getEmail()).toEqual('johndoe@gmail.com');
    });
});

describe('.getOfficeNumber() method', () => {
    it('should return the github handle of new instance of Manager', () => {
        const newManager = new Manager('John', '123', 'johndoe@gmail.com', '111')

        expect(newManager.getOfficeNumber()).toEqual('111')
    })
})

describe('.getRole() method', () => {
    it('should return "Manager" as the role, overriding the inherited "Employee" role from extended Employee constructor', () => {
        const newManager = new Manager('John', '123', 'johndoe@gmail.com', 'johndoe')

        expect(newManager.getRole()).toEqual('Manager')
    })
})