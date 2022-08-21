const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

describe('engineer', () => {
    describe("Engineer object instantiation", () => {
        it("creates an object with name, id, email, and github properties", () => {
            const engineer = new Engineer("Jane Doe", 1, "janedoe@gmail.com", "janedoegit");

            expect(engineer).toBeInstanceOf(Engineer);
            expect(engineer.name).toEqual("Jane Doe");
            expect(engineer.id).toEqual(1);
            expect(engineer.email).toEqual("janedoe@gmail.com");
            expect(engineer.github).toEqual("janedoegit");
        });
    });

    describe("getName", () => {
        it("return the object's name property", () => {
            const engineer = new Engineer("Jane Doe", 1, "janedoe@gmail.com", "janedoegit");

            expect(engineer.getName()).toEqual("Jane Doe");
        });
    });

    describe("getId", () => {
        it("return the object's id property", () => {
            const engineer = new Engineer("Jane Doe", 1, "janedoe@gmail.com", "janedoegit");

            expect(engineer.getID()).toEqual(1);
        });
    });

    describe("getEmail", () => {
        it("return the object's email property", () => {
            const engineer = new Engineer("Jane Doe", 1, "janedoe@gmail.com", "janedoegit");

            expect(engineer.getEmail()).toEqual("janedoe@gmail.com");
        });
    });


    describe("getGithub", () => {
        it("return the object's github property", () => {
            const engineer = new Engineer("Jane Doe", 1, "janedoe@gmail.com", "janedoegit");

            expect(engineer.getGithub()).toEqual("janedoegit");
        });
    });


    describe("getRole", () => {
        it("return the string 'Engineer", () => {
            const engineer = new Engineer("Jane Doe", 1, "janedoe@gmail.com", "janedoegit");

            expect(engineer.getRole()).toEqual("Engineer");
        });
    });
});