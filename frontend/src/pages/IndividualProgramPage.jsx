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
            if (program) setProgramInfo(program);
            console.log(program)
        }
        getProgramInfo();
    }, [])


    console.log(programInfo)
    return (
        <>
            {/* <h2>Look at these cool pictures of the great {p}!</h2>
            <ul>
                {
                    pics.map((pic, idx) => {
                        return (
                            <li key={idx}>
                                <img src={pic} alt="picture of dog" />
                            </li>
                        )
                    })
                }
            </ul> */}
            <p>{programInfo.name}</p>


        </>
    )
};

export default IndividualProgramPage;