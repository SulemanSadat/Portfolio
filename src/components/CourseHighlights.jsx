import React from 'react';
import toast from 'react-hot-toast';
import '../styles/CourseHighlights.css';

function CourseHighlights() {
  const courses = [
    { id: 1, image: '#7f7f7fff', title: 'Programming', description: 'Learn and Build Web apps', price: '$199', tags: ['Advanced', '30 Weeks', 'Coming Soon'] },
    { id: 2, image: '#7f7f7fff', title: 'Video Editing', description: 'Monetize your content', price: '$249', tags: ['Advanced', '30 Weeks', 'Coming Soon'] },
    { id: 3, image: '#7f7f7fff', title: 'Ecommerce', description: 'Sell Products worldwide', price: '$599 + Discount', tags: ['Advanced', '60 Weeks', 'Coming Soon'] },
  ];

  const handleComingSoon = () => {
    toast('🚀 Coming Soon!', {
      duration: 1800,
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    });
  };

  return (
    <div className="course-highlights-container" id="courses">
      <div className="course-highlights-content">
        <div className="course-highlights-header">
          <h1 className="course-highlights-title">Course Highlights</h1>
          <p className="course-highlights-subtitle">
            Discover our most popular and upcoming courses designed to accelerate your career growth
          </p>

          <div className="courses-section">
            <h2 className="coming-soon-title">Coming Soon</h2>

            <div className="courses-grid">
              {courses.map((course) => (
                <div key={course.id} className="course-card">
                  <div
                    className="course-image"
                    style={{ backgroundColor: course.image }}
                  ></div>

                  <div className="course-content">
                    <div className="course-tags">
                      <span className="tag tag-advanced">Advanced</span>
                      <span className="tag tag-duration">30 Weeks</span>
                      <span className="tag tag-status">Coming Soon</span>
                    </div>

                    <h3 className="course-title">{course.title}</h3>
                    <p className="course-description">{course.description}</p>

                    <div className="course-footer">
                      <span className="course-price">{course.price}</span>
                      <button className="notify-button" onClick={handleComingSoon}>
                        Notify Me
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="action-buttons">
            <button className="browse-courses-btn" onClick={handleComingSoon}>
              Browse All Courses
            </button>
            <button className="free-trial-btn" onClick={handleComingSoon}>
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseHighlights;
