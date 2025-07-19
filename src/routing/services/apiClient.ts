import axios from "axios";

// create an axios instance with the baseURL
// allows us to use the same instance across the app
const axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
})

// crete a generic APIClient class
// which handles API requests
class APIClient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    // use arrow function because we want to use 'this' inside the function

    getAll = () => {
        return axiosInstance
        .get<T[]>(this.endpoint)
        .then(res => res.data)
    }

    post = () => (data: T) => {
        return axiosInstance
        .post<T>(this.endpoint, data)
        .then(res => res.data)
    }
}
// const axiosInstance = axios.create({
//     baseURL: "https://jsonplaceholder.typicode.com"
// })

// class APIClient<T> {
//     endpoint: string;

//     constructor(endpoint: string) {
//         this.endpoint = endpoint;
//     }

//     getAll = () => {
//         return axiosInstance.get<T[]>(this.endpoint).then(res => res.data);
//     }

//     post = (data: T) => {
//         return axiosInstance
//         .post<T>(this.endpoint, data)
//         .then(res => res.data);    
//     }
// }

export default APIClient;