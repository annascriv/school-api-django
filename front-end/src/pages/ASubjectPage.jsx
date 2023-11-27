import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Subject } from "../components/Subject";

export const ASubjectPage = () => {

    const [subject, setSubjects] = useState([])
    const { name } = useParams();

    const getSubjects = async() => {
        let response = await axios.get(`http://127.0.0.1:8000/api/v1/subjects/${name}/`)
        .catch((err)=> {
            console.log('getSubjects err', err)
        })

        setSubjects(response.data)
    }

    useEffect(()=> {
        getSubjects();
    }, []);

    return (
        <>
        {subject? 
        <Subject subject={subject}/>
        : null}
        
        </>
    )
}
