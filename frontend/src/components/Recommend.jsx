import { useEffect, useState } from "react";
import {
  createRecommend,
  doesRecommendExist,
  updateRecommend,
} from "../adapters/recommend-adapter";
import "./Recommend.css";

const Recommend = ({ programId, userId, update }) => {
  const [recommend, setRecommend] = useState({});

  useEffect(() => {
    // const fetchRecommends = async () => {
    // const [recommendation, error] = await doesRecommendExist(programId, userId);
    // setRecommend(recommendation);
    // };
    // fetchRecommends();
  }, []);

  const handleChange = async (e) => {
    const recommend = e.target.value === "Yes";
    const [recommendation, error] = await doesRecommendExist(programId, userId);
    setRecommend(recommendation);

    if (!recommendation) {
      const [updated] = await createRecommend({ programId, userId, recommend });
      console.log(updated);
    } else {
      const [updated] = await updateRecommend(recommendation.id, recommend);
      console.log(updated);
    }

    await update();
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
              onChange={handleChange}
              type="radio"
              name="recommend"
              id="recommend-form-radio1"
              value="Yes"
            />
          </label>
          <label htmlFor="recommend-form-radio">
            No
            <input
              onChange={handleChange}
              type="radio"
              name="recommend"
              id="recommend-form-radio2"
              value="No"
            />
          </label>
        </div>
      </div>
    </>
  );
};

export default Recommend;
