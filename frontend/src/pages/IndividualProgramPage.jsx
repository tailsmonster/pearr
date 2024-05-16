import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProgramById } from "../adapters/program-adapter";
// import handleFetch from '../Utils/handleFetch.js'


const IndividualProgramPage = () => {
    const {id} = useParams();
    // const breed = breed.find((breed) => breed.name = breedName)

    const [programInfo, setProgramInfo] = useState([])
    const [error, setError] = useState('')

    useEffect(() => {
        const getProgramInfo = async () => {
            const program = await getProgramById(id);
            if (program) setProgramInfo(program[0]);
            console.log(program)
        }
        getProgramInfo();
    }, [])


    console.log(programInfo)
    return (
        <>
            <h2 id="program-title">{programInfo.name}</h2>
            <div id="program-info">
              <img src="" alt="" />
            </div>
        </>
    )
};

export default IndividualProgramPage;