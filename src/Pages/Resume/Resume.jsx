import './Resume.css';
// Import your resume PDF if you have one
// import resumePDF from '../../assets/resume.pdf';

function Resume() {
  return (
    <section className="resume-section">
      <h2>Resume</h2>
      <div className="resume-content">
        <div className="resume-download">
          <p>Download my resume:</p>
          {/* Replace with your actual resume link */}
          <a 
            href="path-to-your-resume.pdf" 
            download 
            className="download-btn"
          >
            Download Resume
          </a>
        </div>
        
        <div className="proficiencies">
          <h3>Proficiencies</h3>
          <div className="proficiency-lists">
            <div className="proficiency-category">
              <h4>Front-End</h4>
              <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>React</li>
                <li>Bootstrap</li>
                <li>Responsive Design</li>
              </ul>
            </div>
            
            <div className="proficiency-category">
              <h4>Back-End</h4>
              <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>APIs</li>
                <li>MySQL, Sequelize</li>
                <li>MongoDB, Mongoose</li>
                <li>REST</li>
                <li>GraphQL</li>
              </ul>
            </div>
            
            <div className="proficiency-category">
              <h4>Tools & Deployment</h4>
              <ul>
                <li>Git</li>
                <li>GitHub</li>
                <li>Heroku</li>
                <li>Netlify</li>
                <li>Command Line</li>
                <li>npm</li>
                <li>Webpack</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;