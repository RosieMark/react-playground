import { useState } from "react";
const students = ['yair', 'itay', 'nicole', 'ophir', 'ben'];

export default function StudentPicker() {
    
    const [student, setStudent] = useState(null);

    function pick() {
        setStudent(students.pop())
    }


    return <div>
        <button onClick={pick}>Pick student from the array (1/5)</button>
        <div>{student}</div>
    </div>
}