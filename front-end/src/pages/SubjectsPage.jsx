import Row from 'react-bootstrap/Row'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const SubjectsPage = () => {

    const [subjectState, setSubjectState] = useState([])

    const getAllSubjects = async() => {

        let response = await axios.get("http://127.0.0.1:8000/api/v1/subjects/")
        .catch((err)=> {
            console.log('getAllSubjects err', err);
        });

        setSubjectState(response.data);
    }

    useEffect(()=> {
        getAllSubjects();
    }, [])

    return (
        <>
            <Row>
                <h2>Subjects</h2>
                <ul>
                    {subjectState.map((subj, index)=> (
                        <li key={index}>
                        <Link to={`/subjects/${subj.subject_name}/`}>{subj.subject_name}</Link>
                        </li>
                    ))}
                </ul>

            </Row>
        </>
    )
}