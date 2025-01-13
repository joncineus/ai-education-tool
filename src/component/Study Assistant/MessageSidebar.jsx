import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Breadcrumb from './components/Breadcrumb';
import CourseList from './components/CourseList';
import MessageSidebar from './components/MessageSidebar';
import './App.css';

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Breadcrumb />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<CourseList />} />
            <Route path="/courses" element={<CourseList />} />
            <Route path="/quizzes" element={<div className="p-8">Quizzes Page</div>} />
            <Route path="/messages" element={<MessageSidebar />} />
            <Route path="/community" element={<div className="p-8">Community Page</div>} />
            <Route path="/study-assistant" element={<div className="p-8">Study Assistant Page</div>} />
            <Route
              path="*"
              element={
                <div className="flex items-center justify-center h-screen">
                  <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900">404</h1>
                    <p className="text-gray-600">Page not found</p>
                  </div>
                </div>
              }
            />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
