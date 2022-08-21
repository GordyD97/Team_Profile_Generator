const Intern = require('../lib/intern.js');

describe('intern', () => {
    describe("Intern object instantiation", () => {
        it("creates an object with name, id, email, and school properties", () => {
            const intern = new Intern("Jane Doe", 1, "janedoe@gmail.com", "University of Pennsylvania");

            expect(intern).toBeInstanceOf(Intern);
            expect(intern.name).toEqual("Jane Doe");
            expect(intern.id).toEqual(1);
            expect(intern.email).toEqual("janedoe@gmail.com");
            expect(intern.school).toEqual("University of Pennsylvania");
        });
    });

    describe("getName", () => {
        it("return the object's name property", () => {
            const intern = new Intern("Jane Doe", 1, "janedoe@gmail.com", "University of Pennsylvania");

            expect(intern.getName()).toEqual("Jane Doe");
        });
    });

    describe("getId", () => {
        it("return the object's id property", () => {
            const intern = new Intern("Jane Doe", 1, "janedoe@gmail.com", "University of Pennsylvania");

            expect(intern.getID()).toEqual(1);
        });
    });

    describe("getEmail", () => {
        it("return the object's email property", () => {
            const intern = new Intern("Jane Doe", 1, "janedoe@gmail.com", "University of Richmond");

            expect(intern.getEmail()).toEqual("janedoe@gmail.com");
        });
    });

    describe("getSchool", () => {
        it("return the object's school property", () => {
            const intern = new Intern("Jane Doe", 1, "janedoe@gmail.com", "University of Pennsylvania");

            expect(intern.getSchool()).toEqual("University of Richmond");
        });
    });

    describe("getRole", () => {
        it("return the string 'Intern", () => {
            const intern = new Intern("Jane Doe", 1, "janedoe@gmail.com", "University of Pennsylvania");

            expect(intern.getRole()).toEqual("Intern");
        });
    });
});