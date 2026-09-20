import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProgramCarousel } from './components/ProgramCarousel';
import { FeeEstimator } from './components/FeeEstimator';
import { FacultyMatrix } from './components/FacultyMatrix';
import { HallOfFame } from './components/HallOfFame';
import { ExamDashboard } from './components/ExamDashboard';
import { CampusLocations } from './components/CampusLocations';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { CourseFinderQuiz } from './components/CourseFinderQuiz';
import { GlobalSearchModal } from './components/GlobalSearchModal';
import { DemoModal } from './components/DemoModal';
import type { Course } from './data/coachingData';

export function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [selectedCourseForDemo, setSelectedCourseForDemo] = useState<Course | null>(null);

  const handleOpenDemoForCourse = (course?: Course) => {
    setSelectedCourseForDemo(course || null);
    setIsDemoModalOpen(true);
  };

  return (
    <div className="min-h-screen max-w-full overflow-x-hidden bg-slate-50 text-[#0F172A] font-sans selection:bg-[#D97706] selection:text-white">
      
      {/* 1. Sleek Navigation Header */}
      <Header
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenDemoModal={() => handleOpenDemoForCourse()}
      />

      {/* Main Content Body - Tight top padding matching fixed header height */}
      <main className="pt-[112px]">
        
        {/* 2. Flagship Scholastic Hero Section */}
        <Hero
          onOpenQuiz={() => setIsQuizOpen(true)}
          onOpenDemoModal={() => handleOpenDemoForCourse()}
        />

        {/* 3. Unified Academic Program Explorer Carousel */}
        <ProgramCarousel
          onOpenDemoModal={handleOpenDemoForCourse}
        />

        {/* 4. Interactive Fee & Merit Scholarship Estimator */}
        <FeeEstimator />

        {/* 5. Faculty Council & Audit Matrix */}
        <FacultyMatrix />

        {/* 6. Hall of Fame & Proven Track Record */}
        <HallOfFame />

        {/* 7. Exam Countdown & Syllabus Dashboard */}
        <ExamDashboard />

        {/* 8. Institutional Flagship Campuses with 1-Tap Google Maps */}
        <CampusLocations />

        {/* 9. Frequently Addressed Questions */}
        <FAQSection />
      </main>

      {/* 10. Institutional Footer */}
      <Footer />

      {/* Floating Action Dock (Desktop & Mobile) */}
      <FloatingActions
        onOpenDemoModal={() => handleOpenDemoForCourse()}
      />

      {/* Course Finder Quiz Modal */}
      <CourseFinderQuiz
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        onSelectCourse={handleOpenDemoForCourse}
      />

      {/* Global Search Modal (Cmd/Ctrl+K) */}
      <GlobalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectCourse={handleOpenDemoForCourse}
      />

      {/* Free Demo & SAT Test Booking Modal */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        preSelectedCourse={selectedCourseForDemo}
      />

    </div>
  );
}

export default App;
