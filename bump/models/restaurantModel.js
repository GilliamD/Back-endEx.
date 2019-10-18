const db = require("./conn");

class RestaurantList {
    constructor() {
        this.name = name;
    };
    static async getAll() {
        try {
            const response = await db.any(`SELECT * FROM RESTAURANT;`);
            console.log(response);
            return response;
        } catch (error) {
            return error.message;
        }
    }
}
module.exports = RestaurantList;