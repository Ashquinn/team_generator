const Engineer = require('../lib/engineer.js');

describe('arguments passed via super in Engineer constructor', () => {
    it('should return new Engineer name, id, and email', () => {
        const newEngineer = new Engineer('John', '123', 'johndoe@gmail.com', 'johndoe')

        expect(newEngineer.getName()).toEqual('John');

        expect(newEngineer.getId()).toEqual('123');

        expect(newEngineer.getEmail()).toEqual('johndoe@gmail.com');
    });
});

describe('.getGithub() method', () => {
    it('should return the github handle of new instance of Engineer', () => {
        const newEngineer = new Engineer('John', '123', 'johndoe@gmail.com', 'johndoe')

        expect(newEngineer.getGithub()).toEqual('johndoe')
    })
})

describe('.getRole() method', () => {
    it('should return "Engineer" as the role, overriding the inherited "Employee" role from extended Employee constructor', () => {
        const newEngineer = new Engineer('John', '123', 'johndoe@gmail.com', 'johndoe')

        expect(newEngineer.getRole()).toEqual('Engineer')
    })
})