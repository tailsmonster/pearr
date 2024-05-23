import { useContext, useEffect, useState } from "react";
import {
  createRecommend,
  doesRecommendExist,
  updateRecommend,
} from "../adapters/recommend-adapter";
import "./Recommend.css";
import CurrentUserContext from "../contexts/current-user-context";
import { checkForLoggedInUser } from "../adapters/auth-adapter";
import { useNavigate } from "react-router-dom";
import { getUser } from "../adapters/user-adapter";

const Recommend = ({ programId, userId, update }) => {
  const [recommend, setRecommend] = useState({});
  const {currentUser,isOrganization, setIsOrganization, setCurrentUser} = useContext(CurrentUserContext);
  const navigate = useNavigate();
  const [check, setCheck] = useState(true);

  useEffect(() => {
    const fetchRecommends = async () => {
    const [org,id] = await checkForLoggedInUser();
    if (org) return setIsOrganization(true);
    const [user] = await getUser(id);
    setCurrentUser(user);
    userId = userId || user.id;
    const [recommendation, error] = await doesRecommendExist(programId, userId);
    setRecommend(recommendation);
    setCheck(recommendation.recommend);
    };
    fetchRecommends();
  }, []);

  const handleChange = async (e) => {
    const recommend = e.target.value === "Yes";
    if (isOrganization) navigate('/opportunities');
    const [recommendation, error] = await doesRecommendExist(programId, userId);
    setRecommend(recommendation);
    e.target.value = 'option1'

    if (!recommendation) {
      const [updated] = await createRecommend({ programId, userId, recommend });
      setRecommend(update);
      console.log(updated);
    } else {
      const [updated] = await updateRecommend(recommendation.id, recommend);
      setRecommend(update);
      setCheck(update.recommend);
    }
    setCheck(e.target.value === "Yes");

    update();
  };

  return (
    <>
      <div id="recommend-wrapper">
        <h3 htmlFor="recommend-form-radio">
          Would you recommend this opportunity?
        </h3>
        <div id="radios">
          <label htmlFor="recommend-form-radio">
            Yes
            <input
              className="normal-font"
              type="radio"
              name="recommend"
              id="recommend-form-radio1"
              value="Yes"
              checked={check}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="recommend-form-radio">
            No
            <input
              className="normal-font"
              type="radio"
              name="recommend"
              id="recommend-form-radio2"
              value="No"
              checked={!check}
              onChange={handleChange}
            />
          </label>
        </div>
      </div>
    </>
  );
};

export default Recommend;
