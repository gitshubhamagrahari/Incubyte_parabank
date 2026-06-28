const { v4: uuid } = require("uuid");

class TestData {

    static getRegistrationUser() {

        const unique = uuid().substring(0,6);

        return {

            firstName: "Sam",

            lastName: "Automation",

            address: "Bangalore",

            city: "Bangalore",

            state: "Karnataka",

            zipCode: "560001",

            phone: "9999999999",

            ssn: "123456789",

            username: "user" + unique,

            password: "Password123"
        };
    }

   static getLoginUser() {
        return {
            username: "test2",
            password: "test2"
        };
    }

}

module.exports = TestData;