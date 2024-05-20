import { useParams } from "react-router-dom";
import { useState, useEffect, useRef, useContext } from "react";
import { getProgramById } from "../adapters/program-adapter";
import "./IndividualProgramPage.css";
import { getAllProgramComments } from "../adapters/comment-adapter";
import CurrentUserContext from "../contexts/current-user-context";
import MakeComment from "../components/MakeComment";
import { getUser } from "../adapters/user-adapter";
import { getOrganization } from "../adapters/organization-adapter";
import { checkForLoggedInUser } from "../adapters/auth-adapter";
// import handleFetch from '../Utils/handleFetch.js'

const IndividualProgramPage = () => {
  const { id } = useParams();
  const [isOrganization, setIsOrganization] = useState(false);
  const {currentUser, setCurrentUser} = useContext(CurrentUserContext);
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
    const getAccount = async () => {
      const [org, id] = await checkForLoggedInUser();
      console.log(org,id)
      if (id === -1) {
        setIsOrganization(false);
        return setCurrentUser(null);
      }
      if (org) {
        setIsOrganization(true);
        return setCurrentUser(await getOrganization(id));
      }
      setIsOrganization(false);
      return setCurrentUser(await getUser(id))

    };
    getAccount();
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
      {currentUser !== null && currentUser.id !== -1 && <MakeComment id={+id}/>}
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
