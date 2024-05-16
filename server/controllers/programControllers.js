const Program = require("../db/models/Program");
const { isAuthorized } = require("../utils/auth-utils");

exports.createProgram = async (req, res) => {
  const {
    name,
    bio,
    website_url,
    borough,
    organization_id,
    img_url,
    color,
    rating,
  } = req.body;

  if ((!name || !bio, !website_url, !borough, !img_url, !color)) return res.sendStatus(400);

  const isAvailable = (await Program.findByName(name)) === null;
  if (!isAvailable) return res.sendStatus(400);

  const program = await Program.create(
    name,
    bio,
    website_url,
    borough,
    organization_id,
    img_url,
    color,
    rating,
  );
  res.send(program);
};

exports.showProgram = async (req, res) => {
  const { id } = req.body;
  const program = await Program.findById(id);
  if (program === null) return res.sendStatus(404);

  res.send(program);
};

exports.updateProgram = async (req, res) => {
  const { id } = req.params;
  const { organizationId, name, bio, website_url, borough, img_url, color } = req.body;

  if (!isAuthorized(organizationId, req.session)) return res.sendStatus(403);

  const updatedProgram = await Program.update(id, name, bio, website_url, borough, img_url, color);
  if (updatedProgram === null) return res.sendStatus(404);

  res.send(updatedProgram);
};

exports.listAllPrograms = async (req,res) => {
  const programs = await Program.list();
  res.send(programs);
};
