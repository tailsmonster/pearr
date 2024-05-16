const { hashPassword } = require("../../utils/auth-utils");
const Organization = require("../models/Organization");
const User = require("../models/User");
const Program = require("../models/Program");
const Comment = require("../models/Comment");
const Recommend = require("../models/Recommend");
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) => {
  // Before you have models you can always just do `await knex('table_name').del`
  const tables = [
    "organizations",
    "users",
    "programs",
    "comments",
    "recommends",
  ];

  tables.forEach((table) => {
    knex(table).del();
  });

  await knex.raw("ALTER SEQUENCE organizations_id_seq RESTART WITH 1"); // resets the incrementing id to 1
  await knex.raw("ALTER SEQUENCE users_id_seq RESTART WITH 1"); // resets the incrementing id to 1
  await knex.raw("ALTER SEQUENCE programs_id_seq RESTART WITH 1"); // resets the incrementing id to 1
  await knex.raw("ALTER SEQUENCE comments_id_seq RESTART WITH 1"); // resets the incrementing id to 1
  await knex.raw("ALTER SEQUENCE recommends_id_seq RESTART WITH 1"); // resets the incrementing id to 1

  // await knex("organizations").insert([
  //   {
  //     username: "Marcy Lab School",
  //     password_hash: await hashPassword("everyone Except Nico13$"),
  //     pfp_url: "https://avatars.githubusercontent.com/u/54635790?s=200&v=4",
  //   },
  //   {
  //     username: "Randy Lab School",
  //     password_hash: await hashPassword("Who needs a raise, 15 an hour$$$"),
  //     pfp_url:
  //       "https://static.wikia.nocookie.net/b__/images/e/e2/Btd6monkey.png/revision/latest/scale-to-width-down/90?cb=20180426113758&path-prefix=bloons",
  //   },
  // ]);
  await Organization.create(
    "Marcy Lab School",
    "everyone Except Nico13$",
    "https://avatars.githubusercontent.com/u/54635790?s=200&v=4"
  );

  await Organization.create(
    "Randy Lab School",
    "Who needs a raise, 15 an hour$$$",
    "https://static.wikia.nocookie.net/b__/images/e/e2/Btd6monkey.png/revision/latest/scale-to-width-down/90?cb=20180426113758&path-prefix=bloons"
  );

  // await knex("users").insert([
  //   {
  //     username: "real_Gonzo",
  //     password_hash: await hashPassword("goons4Lyfe!!!"),
  //   },
  //   {
  //     username: "TheOfficialAllan",
  //     password_hash: await hashPassword("MushroomsRTHe(*est"),
  //     pfp_url:
  //       "https://static.wikia.nocookie.net/b__/images/e/e1/Bomb_Shooter.png/revision/latest/scale-to-width-down/100?cb=20180616145810&path-prefix=bloons",
  //   },
  // ]);
  await User.create("real_Gonzo", "goons4Lyfe!!!");
  await User.create(
    "TheOfficialAllan",
    "MushroomsRTHe(*est",
    "https://static.wikia.nocookie.net/b__/images/e/e1/Bomb_Shooter.png/revision/latest/scale-to-width-down/100?cb=20180616145810&path-prefix=bloons"
  );

  // await knex("programs").insert([
  //   {
  //     name: "Marcy Lab School Fall '24 Fellowship",
  //     bio: `This will be the most fun you’ve ever had at school.
  //     We promise. We also promise that it will be one of the most
  //     challenging experiences of your life. You will create real
  //     apps that real users can experience. You will learn why your
  //     story makes you the leader we need. You will earn a position
  //     as a salaried software engineer. We can’t wait for you to get started.`,
  //     organization_id: 1,
  //     img_url:
  //       "https://static.wikia.nocookie.net/b__/images/e/e2/Btd6monkey.png/revision/latest/scale-to-width-down/90?cb=20180426113758&path-prefix=bloons",
  //     color: "white",
  //     rating: 4.8,
  //     website_url: "https://www.marcylabschool.org/",
  //     borough: "Brooklyn",
  //   },
  //   {
  //     name: "Randy Lab School",
  //     bio: `GIVE ME A RAISE. GIVE ME A RAISE GIVE ME A RAISE`,
  //     organization_id: 2,
  //     img_url:
  //       "https://static.wikia.nocookie.net/b__/images/f/ff/BTD6_Sniper_Monkey.png/revision/latest/scale-to-width-down/100?cb=20180616150336&path-prefix=bloons",
  //     color: "Red",
  //     rating: 5,
  //     website_url: "https://bloons.fandom.com/wiki/Bloons_Wiki",
  //     borough: "Manhattan",
  //   },
  // ]);

  await Program.create(
    "Marcy Lab School Fall '24 Fellowship",
    "This will be the most fun you've ever had at school. We promise. We also promise that it will be one of the most challenging experiences of your life. You will create real apps that real users can experience. You will learn why your story makes you the leader we need. You will earn a position as a salaried software engineer. We can't wait for you to get started.",
    "https://www.marcylabschool.org/",
    "Brooklyn",
    1,
    "https://www.marcylabschool.org/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F5tpkas7gb5io%2F4jXk6I0OfjAJNYxGL7VpeI%2F0c885a5f54e37aa58a7bfdfe351b7583%2Fbreakthrough-fellows.webp&w=3840&q=75",
    "white",
    4.8
  );

  await Program.create(
    "Randy Lab School",
    `GIVE ME A RAISE. GIVE ME A RAISE GIVE ME A RAISE`,
    "https://bloons.fandom.com/wiki/Bloons_Wiki",
    "Manhattan",
    2,
    "https://nypost.com/wp-content/uploads/sites/2/2021/01/spoon-bridgerton-01.jpg?quality=75&strip=all&w=1024",
    "black",
    5.0
  );

  // await knex("comments").insert([
  //   {
  //     program_id: 1,
  //     user_id: 2,
  //     body: "You should give Randy a raise",
  //     date: JSON.stringify(new Date()),
  //   },
  //   {
  //     program_id: 1,
  //     user_id: 1,
  //     body: "Randy will NEVER get a raise",
  //     date: JSON.stringify(new Date()),
  //   },
  //   {
  //     program_id: 2,
  //     user_id: 1,
  //     body: "Hey now...",
  //     date: JSON.stringify(new Date()),
  //   },
  //   {
  //     program_id: 2,
  //     user_id: 2,
  //     body: "Now THIS is where you'll get that raise",
  //     date: JSON.stringify(new Date()),
  //   },
  // ]);

  await Comment.create({
    program_id: 1,
    user_id: 2,
    body: "You should give Randy a raise",
    date: JSON.stringify(new Date()),
  });

  await Comment.create({
    program_id: 1,
    user_id: 1,
    body: "Randy will NEVER get a raise",
    date: JSON.stringify(new Date()),
  });

  await Comment.create({
    program_id: 2,
    user_id: 1,
    body: "Hey now...",
    date: JSON.stringify(new Date()),
  });

  await Comment.create({
    program_id: 2,
    user_id: 2,
    body: "Now THIS is where you'll get that raise",
    date: JSON.stringify(new Date()),
  });

  // await knex("recommends").insert([
  //   {
  //     program_id: 1,
  //     user_id: 1,
  //   },
  //   {
  //     program_id: 1,
  //     user_id: 1,
  //   },
  //   {
  //     program_id: 2,
  //     user_id: 2,
  //   },
  // ]);

  await Recommend.create({
    program_id: 1,
    user_id: 1,
    recommend: false
  });
  await Recommend.create({
    program_id: 1,
    user_id: 1,
    recommend: false
  });
  await Recommend.create({
    program_id: 2,
    user_id: 2,
    recommend: false
  });
};
