import { useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

//Adapter Imports
import { checkForLoggedInUser } from "./adapters/auth-adapter";

//Page Imports
import HomePage from "./pages/Home.jsx";
import SignUpPage from "./pages/SignUp.jsx";
import LoginPage from "./pages/Login.jsx";
import EditUserPage from "./pages/EditAccountPage.jsx";
// import YourProgramsPage from "./pages/YourPrograms.jsx";
// import AddProgramPage from "./pages/edit/org/AddProgram.jsx";
// import EditProgramPage from "./pages/edit/org/EditProgram.jsx";
import ProgramsPage from "./pages/ProgramInfo.jsx";
import ProgramPage from "./pages/ProgramsList.jsx";
import NotFoundPage from "./components/NotFound.jsx";
import AccessDeniedPage from "./components/AccessDenied.jsx";
import AboutPage from "./pages/About.jsx";

// import UsersPage from './pages/Users';
// import UserPage from './pages/User';

//Component Imports
import UserContext from "./contexts/current-user-context";
import SiteHeadingAndNav from "./components/SiteHeadingAndNav";

export default function App() {
  const { setCurrentUser } = useContext(UserContext);
  useEffect(() => {
    checkForLoggedInUser().then(setCurrentUser);
  }, [setCurrentUser]);

  return (
    <>
      <SiteHeadingAndNav />
      <main>
        <Routes>
          {/* home page */}
          <Route path="/" element={<HomePage />} />
          {/* signing/logging in */}
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          {/* edit stuff */}
          <Route path="/edit" element={<EditUserPage />} />
          {/* <Route
            path="/edit/orgs/:org-id/programs"
            element={<YourProgramsPage />}
          /> */}
          {/* <Route
            path="/edit/orgs/:org-id/programs/add"
            element={<AddProgramPage />}
          /> */}
          {/* <Route
            path="/edit/orgs/:org-id/programs/:program-id"
            element={<EditProgramPage />}
          /> */}
          {/* Programs */}
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/programs/:program-id" element={<ProgramPage />} />2
          {/* Misc */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/access-denied" element={<AccessDeniedPage />} />
          <Route path="/*" element={<NotFoundPage />} />
          {/* <Route path='/users' element={<UsersPage />} />
        <Route path='/users/:id' element={<UserPage />} /> */}
          {/* critikal error!!! */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </>
  );
}
