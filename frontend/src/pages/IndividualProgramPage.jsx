import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
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
      <section id='info'>
        <h2 id="program-title">{programInfo.name}</h2>
        <div id="p1">
          <img src={programInfo.imgUrl} alt={`${programInfo} picture!`} />
        </div>
        <div id="p2">
          <h4>About:</h4>
          <p>{programInfo.bio}</p>
          <br />
          <h4>Location:</h4>
          <p>{programInfo.borough}</p>
          
          <h4>Website:</h4>
          <a ref={useRef(programInfo.websiteUrl)}>{programInfo.websiteUrl}</a>
        </div>
      </section>
    </>
  )
};

export default IndividualProgramPage;