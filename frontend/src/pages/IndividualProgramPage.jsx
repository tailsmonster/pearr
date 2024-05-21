import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect, useRef, useContext } from "react";
import { getProgramById } from "../adapters/program-adapter";
import "./IndividualProgramPage.css";
import { getAllProgramComments } from "../adapters/comment-adapter";
import CurrentUserContext from "../contexts/current-user-context";
import MakeComment from "../components/MakeComment";
import Comment from "../components/Comment";

// import handleFetch from '../Utils/handleFetch.js'

const IndividualProgramPage = () => {
  const { currentUser, isOrganization } = useContext(CurrentUserContext);
  const { id } = useParams();
  // const breed = breed.find((breed) => breed.name = breedName)
  const [programInfo, setProgramInfo] = useState([]);
  const [comments, setComments] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    const getProgramInfo = async () => {
      if(Number.isNaN(+id) || typeof(+id) === 'string') return navigate('/programs');
      const program = await getProgramById(id);
      if (program[0] === null) navigate('/programs')
      if (program) setProgramInfo(program[0]);
      const [commentData, error] = await getAllProgramComments(id);
      if (commentData) setComments(commentData);

      // console.log(commentData);
    };
    // const getAccount = async () => {
    //   const [org, id] = await checkForLoggedInUser();
    //   console.log(org,id)
    //   if (id === -1) {
    //     setIsOrganization(false);
    //     return setCurrentUser(null);
    //   }
    //   if (org) {
    //     setIsOrganization(true);
    //     return setCurrentUser(await getOrganization(id));
    //   }
    //   setIsOrganization(false);
    //   return setCurrentUser(await getUser(id))

    // };
    // getAccount();
    getProgramInfo();
  }, []);

  // console.log(programInfo);
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
      {currentUser !== null && currentUser.id !== -1 && (
        <MakeComment id={+id} setComments={setComments} />
      )}
      <section id="comments">
        <ul>
          {comments?.map((comment, idx) => {
            return <Comment key={idx} comment={comment} setComments={setComments}/>
          }
          )}
        </ul>
      </section>
    </>
  );
};

export default IndividualProgramPage;
