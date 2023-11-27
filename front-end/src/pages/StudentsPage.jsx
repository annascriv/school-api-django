import Row from 'react-bootstrap/Row'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const StudentsPage = () => {

    const [studentState, setStudentState] = useState([])

    const getAllStudents = async() => {

        let response = await axios.get("http://127.0.0.1:8000/api/v1/students/ ")
        .catch((err)=> {
            console.log('getAllStudents err', err)
        })

        setStudentState(response.data)
    }

    useEffect(()=> {
        getAllStudents();
    }, [])

    return (
        <>
            <Row style={{textAlign:"center"}}>
                <h2>Students Page</h2>
                {studentState.map((stud, index)=> (
                    <li key={index}>
                        <Link to={`/students/${stud.id}/`}>{stud.name}</Link>

                    </li>
                ))}
            </Row>
        </>
    )
}