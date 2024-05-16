import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import {fetchHandler} from '../utils.js'
import {getAllPrograms} from '../adapters/program-adapter.js'


const AllProgramsPage = () => {

    const [programs, setPrograms] = useState([])
    const [error, setError] = useState('')
    useEffect(() => {
        const getPrograms = async () => {
            const data = await getAllPrograms()
            console.log(data);
            if (data) setPrograms(data);
            if (error) setError(error);
        }
        getPrograms()
        console.log(programs)
    }, [])


    return (
        <>
            <h1>ALL PROGRAMS HERE</h1>
            <ul>
                {
                    programs.map((program, idx) => {
                        return (
                            <li key={idx}>
                              <div>
                                <img src={program.imgUrl} alt={program.id} />
                                <Link to={`/programs/${program.id}`}>{program.name}</Link>
                                {/* <p>{program.name}</p> */}
                              </div>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default AllProgramsPage