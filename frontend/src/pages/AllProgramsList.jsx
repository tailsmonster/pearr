import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAllPrograms } from '../adapters/program-adapter.js';
import CurrentUserContext from '../contexts/current-user-context';
import "./AllProgramsList.css"

const AllProgramsPage = () => {

    function redirectToPage() {
        window.location.href = "https://www.example.com";
      }

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
                                <img id="li-thumbnail" src={program.imgUrl} alt={program.id} />
                                <Link to={`/programs/${program.id}`}>{program.name}</Link>
                                {/* <p>{program.name}</p> */}
                              </div>
                            </li>
                        )
                    })
                }
            </ul>
            <button>Add Program</button>
        </>
    )
}

export default AllProgramsPage