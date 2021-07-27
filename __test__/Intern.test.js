const Intern = require('../lib/Intern.js');

describe('arguments passed via super in Intern constructor', () => {
    it('should return new Intern name, id, and email', () => {
        const newIntern = new Intern('John', '123', 'johndoe@gmail.com', 'Towson')

        expect(newIntern.getName()).toEqual('John');

        expect(newIntern.getId()).toEqual('123');

        expect(newIntern.getEmail()).toEqual('johndoe@gmail.com');
    });
});

describe('.getSchool() method', () => {
    it('should return the school name of new instance of Intern', () => {
        const newIntern = new Intern('John', '123', 'johndoe@gmail.com', 'Towson')

        expect(newIntern.getSchool()).toEqual('Towson')
    })
})

describe('.getRole() method', () => {
    it('should return "Intern" as the role, overriding the inherited "Employee" role from extended Employee constructor', () => {
        const newIntern = new Intern('John', '123', 'johndoe@gmail.com', 'Towson')

        expect(newIntern.getRole()).toEqual('Intern')
    })
})