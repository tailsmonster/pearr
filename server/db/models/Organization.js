const knex = require("../knex");
const authUtils = require("../../utils/auth-utils");

class Organization {
  #passwordHash = null;

  constructor({ id, username, password_hash, pfp_url, website_url, borough }) {
    this.id = id;
    this.username = username;
    this.#passwordHash = password_hash;
    this.pfpUrl = pfp_url;
    this.websiteUrl = website_url;
    this.borough = borough;
  }

  async isValidPassword(password) {
    return authUtils.isValidPassword(password, this.#passwordHash);
  }

  static async list() {
    const query = "SELECT * FROM organizations";
    const { rows } = await knex.raw(query);
    return rows.map((org) => new Organization(org));
  }

  static async findById(id) {
    const query = "SELECT * FROM organizations WHERE id = ?";
    const { rows } = await knex.raw(query, [id]);
    const org = rows[0];
    return org ? new Organization(org) : null;
  }

  static async findByUsername(username) {
    const query = "SELECT * FROM organizations WHERE username = ?";
    const { rows } = await knex.raw(query, [username]);
    const org = rows[0];
    return org ? new Organization(org) : null;
  }

  static async create({
    username,
    password_hash,
    pfp_url,
    website_url,
    borough,
  }) {
    const passwordHash = await authUtils.hashPassword(password_hash);
    const query = `INSERT INTO organizations (username, password_hash, pfp_url, website_url, borough) 
    VALUES(?,?,?,?,?) 
    RETURNING *`;
    const { rows } = await knex.raw(query, [
      username,
      passwordHash,
      pfp_url,
      website_url,
      borough,
    ]);
    const org = rows[0];
    return new Organization(org);
  }

  static async update({ id, username, password_hash, pfp_url }) {
    const oldData = await Organization.findById(id);
    const query = `
    UPDATE organizations
    SET username = ?, password_hash = ?, pfp_url = ?
    WHERE id = ?
    RETURNING *
    `;
    const { rows } = await knex.raw(query, [
      username || oldData.username,
      password_hash ? authUtils.hashPassword(password_hash) : oldData.#passwordHash,
      pfp_url || oldData.pfpUrl,
      id,
    ]);
    const updatedOrg = rows[0];
    return updatedOrg ? new Organization(updatedOrg) : null;
  }

  static deleteAll() {
    return knex('organizations').del();
  }
}

module.exports = Organization;
