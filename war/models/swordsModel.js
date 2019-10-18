const db = require("./conn");

class SwordsList {
    constructor() {
        this.name = name;
    };
    static async getAll() {
        try {
            const response = await db.any(`SELECT * FROM swords;`);
            console.log(response);
            return response;
        } catch (error) {
            return error.message;
        }
    }
}
module.exports = SwordsList;