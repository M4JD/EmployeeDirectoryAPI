import Employee from "../models/employee-model.js";
import Logger from "../utils/logger.js";

const departments = ["Engineering", "Marketing", "HR", "Finance"];
const titles = ["Engineer", "Manager", "Analyst", "Coordinator"];
const logger = new Logger('employee-service');
let employeeCache = [];

const fetchEmployees = async () => {
    try {
        //dummy data loaded from randomuser.me
        //can be replaced with data from DB 
        const res = await fetch("https://randomuser.me/api/?results=100");
        const data = await res.json();

        const users = data.results;

        employeeCache = users.map((user) => new Employee(
            user.login.uuid,
            user.login.username,
            user.name.first,
            user.name.last,
            user.email,
            user.phone,
            user.gender,
            `${user.location.city}, ${user.location.country}`,
            user.picture.thumbnail,
            departments[Math.floor(Math.random() * departments.length)],
            titles[Math.floor(Math.random() * titles.length)],
        ));
    } catch (error) {
        logger.error("Error fetching employee data:", error);
    }
};
const getCachedEmployees = () => {
    return employeeCache;
};

export { fetchEmployees, getCachedEmployees };
