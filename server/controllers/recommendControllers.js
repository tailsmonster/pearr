const Recommend = require("../db/models/Recommend");
const User = require('../db/models/User');

exports.createRecommend = async (req, res) => {
  const { program_id, user_id, recommend } = req.body;

  const isAvailable = await Recommend.findSpecific(user_id, program_id);
  if (isAvailable !== null) {
    return res.sendStatus(400);
  }

  const recommendMade = await Recommend.create(program_id, user_id, recommend);
  res.send(recommendMade);
};

exports.listAllRecommends = async (req, res) => {
  const recommends = await Recommend.list();
  res.send(recommends);
};

exports.listAllUserRecommends = async (req, res) => {
  const { id } = req.params;
  const recommends = await User.getAllRecommends(id);
  res.send(recommends);
};

exports.showRecommend = async (req, res) => {
  const { id } = req.params;
  const recommend = await Recommend.findById(id);
  res.send(recommend);
};

exports.updateRecommend = async (req, res) => {
  const { newRec } = req.body;
  const { id } = req.params;
  const recommend = await Recommend.update(newRec, id);
  res.send(recommend);
};

exports.checkIfExists = async (req,res) => {
  const {program, user} = req.query;
  if (!program || !user) return res.sendStatus(400);
  const recommend = await Recommend.findSpecific(+user,+program);
  res.send(recommend);
}