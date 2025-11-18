
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import DrillingOpsPage from './pages/DrillingOpsPage';
import WellManagementPage from './pages/WellManagementPage';
import DataAnalyticsPage from './pages/DataAnalyticsPage';
import ReportsPage from './pages/ReportsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/drilling-ops" element={<DrillingOpsPage />} />
          <Route path="/well-management" element={<WellManagementPage />} />
          <Route path="/analytics" element={<DataAnalyticsPage />} />
          <Route path="/reports" element={<ReportsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;