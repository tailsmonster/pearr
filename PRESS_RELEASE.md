<!-- Replace with your project name and delete me -->

# PEAR

Authors:

<!-- Replace Name with your names -->

- Nico Aroca
- Cris Martinez
- Allan Ramirez

Team Name:

## 😞 The Problem

<!-- content goes below -->

Across NYC, low-income children often participate in extracurricular activities and enrichment programs at a significantly lower rate than higher-income families. This is distressing as these programs are often linked to positive education and socio-emotional outcomes and support long-term development.

<!-- content goes above -->

## 📝 Summary

<!-- content goes below -->

New York City is home to a diverse array of programs and activities designed to support the development, education, and well-being of its young residents. However, many low-income families struggle to navigate the fragmented landscape of children's programs, making it challenging to find and enroll in opportunities that best suit their needs (source. [NY Daily News](https://www.nydailynews.com/2023/03/23/parents-kids-missing-out-due-to-lack-of-awareness-about-subsidized-child-care-programs-in-nyc-report/#)). This lack of accessibility and transparency disproportionately impacts low-income and underserved communities, exacerbating existing inequalities in access to quality programs.

<!-- content goes above -->

## 🤔 Our Hypothesis

<!-- content goes below -->

If families in New York City have access to a centralized platform that connects them with organizations offering programs for their children and allows them to read and write reviews about these programs, then we think that parents will be able to enroll their kids in fun extracurricular activities when they otherwise wouldn’t have!

<!-- content goes above -->

## 📱 Product Overview

<!-- content goes below -->

Our product, PEAR, aims to address these issues by creating a centralized, user-friendly platform that provides borough-specific multilingual information to help low-income parents residing within NYC access free resources for their children in New York City.

- Make more informed decisions about enrolling their children in programs that suit their needs and preferences, leading to increased participation and satisfaction.
- Hold organizations accountable for the quality of their programs by providing detailed feedback and ratings, which will encourage organizations to maintain high standards and address any issues promptly.
- Create a community-driven knowledge base of program experiences and insights, which will help other families navigate the landscape of children's programs in NYC more effectively.

By empowering families with the tools to discover, compare, and review children's programs, our application aims to enhance the overall quality and accessibility of these programs, ultimately contributing to better developmental outcomes and experiences for children in New York City.

<!-- content goes above -->

## 🏙️ Mission Statement

<!-- content goes below -->

PEAR is an application that helps low-income families find enrichment programs for their children to support their development and close the achievement and play gap.

<!-- content goes above -->

## 🫂 Who do we serve?

<!-- content goes below -->

- Low-income parents who are less informed about the resources available for their children.
- Organizations who want to show off their opportunities to their target audience.

<!-- content goes above -->

## 🧳 User Journey Map

<!-- content goes below -->

A low income parent wants their child to spend more time in extracurricular activities, as their child spends most of their time playing video games instead of having fun outside.

- Step 1: The parent finds out about our website through an advert on facebook
- Step 2: They see the most recently added programs to the website on the homepage.
- Step 3: They find an interesting program (Randy Lab). They click on it to see more info
- Step 4: They see information relating to the program. And they see all the comments placed by people who’ve been there too!
- Step 5: They decide to tell their kid about the program, and start to prepare them for the program.
<!-- content goes above -->

## 👥 User-stories

<!-- content goes below -->

1. User Story: I’m a low income parent who's heard of PEAR and just landed on the homepage.
   - When a user first lands on the homepage, they see a big button to sign up, as well as a preview for some of the programs available.
   - A user can sign up as an organization or a regular user. A little message text is asking them if they are an organization, and if so to hit the toggle. Said toggle on the top of the sign-up page, and the background color changes to let the user know they’re signing up as a user/organization. There’s also a button to
   - After signing up as a user, they are redirected to the programs page. On the navbar, they can select a button to send them to an EDIT PROFILE PAGE and a button to take them to the top of the programs page. The programs are displayed on the page, and the user can choose any of them.
   - The user is redirected to a page featuring more information on that specific program. Here are pictures and text relating to the program. The user can also see a comments section about the program.
   - The User has learned about PEAR and has decided to enroll their child into a program!

- Tables needed for this user story:
  - Users - (id\*, username, password_hash, pfp_url)
  - Organizations - (id\*, name, password_hash, pfp_url)
  - Comments - (id\*, user_id, program_id, body, date)
  - Programs - (id\*, bio, name, img_url, color, organization_id, )

2. User Story: I’m a parent who discovered and has since enrolled my child into a program on PEAR. I want to leave my raving reviews.
   - A logged in user is automatically sent to the programs page once they’re logged in.
   - In the /programs page, the user can look up the program they enrolled their child into using the search bar. They’ll have to type in the name of the program.
   - Once they find the program, they’ll be able to click on it to be sent to the /programs/{ID} page, id corresponding with the program they chose.
   - The user can scroll down to the comments section, to enter a text input for a form, as well as a toggle for whether they recommend the program or not.
   - The user has posted a comment!

- Tables needed for this user story:
  - Users - (id\*, username, pfp_url)
  - Organizations - (id\*, name, password_hash, pfp_url)
  - Comments - (id\*, user_id, program_id, body, date)
  - Programs - (id\*, bio, name, img_url, color, organization_id, )

3. User Story: I’m an organizer who wants to promote my program on PEAR
   - An organizer lands on the home page, where they click the sign up button to create an ‘organization’ account
   - They click on the toggle to sign up as an organization.
   - They are redirected to a page where they can create a brand new program
   - They can click a button to make a new program. From there, they will enter information about their program.
   - After submitting, their program is now live for everyone to see

- Tables needed for this user story:
  - Users - (id\*, username, password_hash, pfp_url)
  - Organizations - (id\*, name, password_hash, pfp_url)
  - Comments - (id\*, user_id, program_id, body, date)
  - Programs - (id\*, bio, name, img_url, color, organization_id, )

<!-- content goes above -->

## 🧗‍♂️ Key Technical Challenge

<!-- content goes below -->

- Making and keeping up with the scum board
- The creative aspects of the website
- Creating a forum system for users to communicate and spread anecdotes of their experiences at each program.

<!-- content goes above -->

## 🏋🏽 Extension Opportunities

<!-- content goes below -->

- Users can add follows to certain topics, then be notified when a new program is posted related to certain topics.
- A mobile app found on an app store would help us reach a wider user base as well as making our resource more accessible to those who lack a computer / inexperienced, using a web browser

<!-- content goes above -->

## 📒 Sources

<!-- content goes below -->

- [Social Services & Benefits - MOPD - NYC.gov](https://www.nyc.gov/site/mopd/resources/social-services-benefits.page)
- [Now, Poorer Children Are Falling Behind on the Playing Field](https://archive.is/2x3RH#selection-641.175-641.215)
- [Why It Matters That Poor Kids Don’t Have Time to Play](https://talkpoverty.org/2017/06/01/matters-poor-kids-dont-time-play/index.html)
- https://www.nyc.gov/site/acs/early-care/apply-child-care.page

<!-- content goes above -->
