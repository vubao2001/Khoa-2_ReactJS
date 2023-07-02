import "./Student.css";

const Student = (props) => {

    const { student, stt, deleteStudent } = props;
    const { id, classCode, studentName, math, phy, chem } = student || {};
    const gpa = ((+math + +phy + +chem ) / 3).toFixed(1);

    return (
        <tr>
            <th scope="row">{stt + 1}</th>
            <td>{studentName}</td>
            <td>{classCode}</td>
            <td>{math}</td>
            <td>{phy}</td>
            <td>{chem}</td>
            <td>{gpa}</td>
            <td>
                <div className="d-flex align-items-center">
                    <button className="btn btn-danger" onClick={() => deleteStudent(id)}>
                        Delete
                    </button>
                </div>
            </td>
        </tr>
    )
}

export default Student;