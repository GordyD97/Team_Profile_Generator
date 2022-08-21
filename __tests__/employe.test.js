const employee = require('../lib/employe.js');

describe('employe', () => {
    
    describe("Employee object instantiation", () => {
        it("creates an object with name, id, and email properties", () => {
            const employee = new Employee("Jane Doe", 1, "janedoe@gmail.com");

            expect(employee).toBeInstanceOf(Employee);
            expect(employee.name).toEqual("Jane Doe");
            expect(employee.id).toEqual(1);
            expect(employee.email).toEqual("janedoe@gmail.com");
        });
    });

    describe("getName", () => {
        it("return the object's name property", () => {
            const employee = new Employee("Jane Doe", 1, "janedoe@gmail.com");

            expect(employee.getName()).toEqual("Jane Doe");
        });
    });

    describe("getId", () => {
        it("return the object's id property", () => {
            const employee = new Employee("Jane Doe", 1, "janedoe@gmail.com");

            expect(employee.getID()).toEqual(1);
        });
    });


    describe("getEmail", () => {
        it("return the object's email property", () => {
            const employee = new Employee("Jane Doe", 1, "janedoe@gmail.com");

            expect(employee.getEmail()).toEqual("janedoe@gmail.com");
        });
    });

    describe("getRole", () => {
        it("return the string 'Employee'", () => {
            const employee = new Employee("Jane Doe", 1, "janedoe@gmail.com");

            expect(employee.getRole()).toEqual("Employee");
        });
    });
});
