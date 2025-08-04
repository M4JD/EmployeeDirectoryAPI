class Employee {
    constructor(
        id,
        username,
        firstName,
        lastName,
        email,
        phone,
        gender,
        location,
        picture,
        department,
        title) {
        this.id = id;
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.gender = gender;
        this.location = location;
        this.picture = picture;
        this.department = department;
        this.title = title;
    }

    getSummary() {
        return `${this.firstName} ${this.lastName} - ${this.title} in ${this.department}`;
    }
}

export default Employee;
