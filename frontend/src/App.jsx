import { useContext, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

//Adapter Imports
import { checkForLoggedInUser } from './adapters/auth-adapter';

//Page Imports
import HomePage from './pages/home/Home.jsx';
import SignUpPage from './pages/authorization/SignUp.jsx';
import LoginPage from './pages/authorization/Login.jsx';
import EditLandingPage from './pages/user/EditLandingPage.jsx';
import EditUserPage from './pages/user/EditLandingPage.jsx';
import EditOrgPage from './pages/user/EditLOrg.jsx';
import YourProgramsPage from './pages/user/YourPrograms.jsx';
import AddProgramPage from './pages/user/AddProgram.jsx';
import EditProgramPage from './pages/user/EditProgram.jsx';
import ProgramsPage from './pages/user/ProgramsPage.jsx'; 
import ProgramPage from './pages/user/ProgramPage.jsx'; 
import NotFoundPage from './pages/NotFound.jsx';
import AccessDeniedPage from './pages/error/AccessDenied.jsx';
// import UsersPage from './pages/Users';
// import UserPage from './pages/User';

//Component Imports
import UserContext from './contexts/current-user-context';
import SiteHeadingAndNav from './components/SiteHeadingAndNav';


export default function App() {
  const { setCurrentUser } = useContext(UserContext);
  useEffect(() => {
    checkForLoggedInUser().then(setCurrentUser);
  }, [setCurrentUser]);

  return <>
    <SiteHeadingAndNav />
    <main>
      <Routes>
        {/* home page */}
        <Route path='/' element={<Home />} />

        {/* signing/logging in */}
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/login' element={<LoginPage />} />

        {/* edit stuff */}

        <Route path='/edit' element={<UsersPage />} />

        <Route path='/edit/users/:user-id' element={<UsersPage />} />

        <Route path='/edit/orgs/:org-id' element={<UsersPage />} />
        <Route path='/edit/orgd/:org-id/programs' element={<UsersPage />} />
        <Route path='/edit/orgd/:org-id/programs/add' element={<UsersPage />} />
        <Route path='/edit/orgd/:org-id/programs/edit' element={<UsersPage />} />

        

        <Route path='/users' element={<UsersPage />} />
        <Route path='/users/:id' element={<UserPage />} />
        {/* critikal error!!! */}
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </main>
  </>;
}
