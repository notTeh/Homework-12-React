import './Project.css';

function Project({ title, image, deployedLink, githubLink, description }) {
  return (
    <div className="project">
      <img src={image} alt={title} className="project-image" />
      <div className="project-details">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-links">
          <a href={deployedLink} target="_blank" rel="noopener noreferrer">
            View Deployment
          </a>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            GitHub Repository
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;