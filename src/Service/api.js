import axios from 'axios';

const url = 'http://localhost:3003/students';

export const getStudents = async () => {
    return await axios.get(url);
}

export const addStudent = async(student) => {
    return await axios.post(url, student);
}

export const deleteStudent = async(id) => {
    return await axios.delete(`${url}/${id}`);
}


