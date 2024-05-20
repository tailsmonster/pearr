const Comment = require("../db/models/Comment");
const User = require("../db/models/User");

exports.createComment = async (req, res) => {
  const { programId, userId, body, time } = req.body;
  console.log(programId,userId,body,time);

  if (!programId || !userId || !body || !time) {
    return res.sendStatus(400);
  }

  const comment = await Comment.create({program_id:programId, user_id:userId, body, date:time});
  res.send(comment);
};

exports.getAllComments = async (req, res) => {
  const comments = await Comment.list();
  res.send(comments);
};

exports.showComment = async (req, res) => {
  const { id } = req.params;
  const comment = await Comment.findById(id);
  res.send(comment);
};

exports.updateComment = async (req, res) => {
  const { id, body } = req.body;
  const comment = await Comment.update(id, body);
  res.send(comment);
};

exports.getAllCommentsOfUser = async (req, res) => {
  const { id } = req.params;
  const comments = await User.getAllComments(id);
  res.send(comments);
};
