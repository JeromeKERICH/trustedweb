// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';

import './index.css'; // Import your global CSS file
import Footer from './components/Footer';
import Library from './pages/Library';
import Services from './pages/ServicesPage';
import Developers from './pages/Developers';
import WebsiteTypeQuiz from './pages/WebQuiz';
import WebsiteBudgetEstimator from './pages/WebCalculator';
import WebsitePlanningBlueprint from './pages/Planning';
import WebsiteAudit from './pages/Audit';
import CustomDevelopment from './pages/Custom';
import PreWebsiteCoaching from './pages/Coaching';
import MonthlyWorkshop from './pages/Trainings';
import SubPage from './pages/SubPage';
import Store from './pages/Store';
import Article from './pages/Article';




function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar/>

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/library" element={<Library/>} />
            <Route path="/library/:slug" element={<Article/>} />
            <Route path="/services" element={<Services/>}/>
            <Route path="/developers" element={<Developers/>}/>
            <Route path="webquiz" element={<WebsiteTypeQuiz/>}/>
            <Route path="/calculator" element={<WebsiteBudgetEstimator/>}/>
            <Route path="/planning" element={<WebsitePlanningBlueprint/>}/>
            <Route path="/audit" element={<WebsiteAudit/>}/>
            <Route path="/custom" element={<CustomDevelopment/>}/>
            <Route path="/coaching" element={<PreWebsiteCoaching/>}/>
            <Route path="/training" element={<MonthlyWorkshop/>}/>
            <Route path="/subscribe" element={<SubPage/>}/>
            <Route path="/store" element={<Store/>}/>
          </Routes>

         
        </main>
       
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
