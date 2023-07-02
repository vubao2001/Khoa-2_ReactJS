import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./StudentManagement.css";
import StudentTable from "../StudentTable/StudentTable";
import AddNewStudent from "../AddNewStudent/AddNewStudent";

const studentMockData = [
    {
        studentName: "Nguyễn Văn A",
        classCode: "12CTin",
        math: 10,
        phy: 8,
        chem: 9,
        id: "46852d05-8052-4e4b-a0ef-ec4218bd5db5",
    },
    {
        studentName: "Lee Chong Wei",
        classCode: "12B",
        math: 5,
        phy: 6,
        chem: 9,
        id: "2fed325a-7d4c-48c6-8527-98e3c958d1d4",
    },
    {
        studentName: "CR7",
        classCode: "12ABCD",
        math: 5,
        phy: 10,
        chem: 9,
        id: "c93f2e07-5d18-4509-978d-af1dcb37804e",
    },
    {
        studentName: "Lin Dan",
        classCode: "12A",
        math: 10,
        phy: 7,
        chem: 7,
        id: "56fd0096-df35-4364-90f4-4a47dd29cfde",
    },
];

const StudentManagement = () => {

    const [studentList, setStudentList] = useState(studentMockData);

    const onAddStudentHandler = (student) => {
        const newStudent = {
            ...student,
            id: uuidv4(),
        }
        setStudentList([...studentList, newStudent]);
    };

    const onDeleteStudentHandler = (id) => {
        // studentList.map((student, index) => {
        //     if (student.id === id) {
        //         studentList.splice(index, 1);
        //     }
        // })
        // setStudentList(studentList);

        const filteredStudentList = studentList.filter(
            (student) => student.id !== id
        );
        setStudentList(filteredStudentList);
    };

    return (
        <div className="container">
            <h1 className="text-center">Dự án quản lý học sinh</h1>
            <AddNewStudent addNewStudent={onAddStudentHandler} />
            <div className="d-flex align-items-center justify-content-end gap-2 my-3">
                <button className="btn btn-primary" onClick={onAddStudentHandler}>
                    Thêm học sinh mới
                </button>
                <button className="btn btn-success">Sắp xếp</button>
            </div>
            <StudentTable
                studentList={studentList}
                deleteStudent={onDeleteStudentHandler}
            />
        </div>
    )
}

export default StudentManagement;