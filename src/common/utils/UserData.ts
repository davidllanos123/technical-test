class UserData {
    username: string;
    password: string;

    constructor(username: string = "admin", password: string = "password123") {
        this.username = username;
        this.password = password;
    }
}

export default UserData;