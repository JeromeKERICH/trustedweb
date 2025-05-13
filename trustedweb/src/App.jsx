// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

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





import './index.css'; // Import your global CSS file



import Auth from './pages/Auth';
import DashboardLayout from './layout/DashboardLayout';
import Dashboard from './pages/Dashboard';
import Articles from './pages/Articles';
import Categories from './pages/Categories';
import Downloads from './pages/Downloads';
import Quiz from './pages/Quiz';
import Estimator from './pages/Estimator';
import Bookings from './pages/Bookings';
import Settings from './pages/Settings';
import QuizManager from './components/quiz/QuizManager';
import Resources from './pages/Resources';
import SingleArticle from './pages/SingleArticle';




function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/developers" element={<Developers />} />
            <Route path="/webquiz" element={<WebsiteTypeQuiz />} />
            <Route path="/calculator" element={<WebsiteBudgetEstimator />} />
            <Route path="/planning" element={<WebsitePlanningBlueprint />} />
            <Route path="/audit" element={<WebsiteAudit />} />
            <Route path="/custom" element={<CustomDevelopment />} />
            <Route path="/coaching" element={<PreWebsiteCoaching />} />
            <Route path="/training" element={<MonthlyWorkshop />} />
            <Route path="/subscribe" element={<SubPage />} />
            <Route path="/store" element={<Store />} />
            <Route path="/resources" element={<Resources/>}/>
            <Route path="/resources/:slug" element={<SingleArticle />} />

        
         

            {/* Admin Routes */}
          
            <Route path="/auth" element={<Auth/>}/>

            <Route path="/dashboard/*" element={<DashboardLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="articles" element={<Articles />} />
              <Route path="categories" element={<Categories />} />
              <Route path="downloads" element={<Downloads />} />
              <Route path="quiz" element={<Quiz />} />
              <Route path="quiz-manager" element={<QuizManager/>}/>
              <Route path="estimator" element={<Estimator />} />
              <Route path="bookings" element={<Bookings />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
