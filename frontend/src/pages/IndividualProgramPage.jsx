import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { getProgramById } from "../adapters/program-adapter";
import "./IndividualProgramPage.css";
import { getAllProgramComments } from "../adapters/comment-adapter";
// import handleFetch from '../Utils/handleFetch.js'

const IndividualProgramPage = () => {
  const { id } = useParams();
  // const breed = breed.find((breed) => breed.name = breedName)

  const [programInfo, setProgramInfo] = useState([]);
  const [error, setError] = useState("");
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const getProgramInfo = async () => {
      const program = await getProgramById(id);
      if (program) setProgramInfo(program[0]);
      console.log(program, `BALLSID: ${id}`);
      const [commentData, error] = await getAllProgramComments(id);
      if (commentData) setComments(commentData);

      console.log(commentData);
    };
    getProgramInfo();
  }, []);

  console.log(programInfo);
  return (
    <>
      <section id="info">
        <h2 id="program-title">{programInfo.name}</h2>
        <div id="p1">
          <img
            id="pr-thumbnail"
            src={programInfo.imgUrl}
            alt={`${programInfo} picture!`}
          />
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
      <section id="comments">
        <ul>
          {comments.map((comment, idx) => {
            console.log(comment)
            return (
              <li key={idx}>
                <p>{comment.program_id.body}</p>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default IndividualProgramPage;
