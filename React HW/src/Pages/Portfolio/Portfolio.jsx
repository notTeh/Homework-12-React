import Project from '../../components/Project/Project';


function Portfolio() {
  // Sample projects - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: 'Project One',
      description: 'A brief description of project one.',
      image: 'https://via.placeholder.com/350x200',
      deployedLink: 'https://project-one.example.com',
      githubLink: 'https://github.com/yourusername/project-one'
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'A brief description of project two.',
      image: 'https://via.placeholder.com/350x200',
      deployedLink: 'https://project-two.example.com',
      githubLink: 'https://github.com/yourusername/project-two'
    },
    // Add more projects to meet the requirement of six projects
    {
      id: 3,
      title: 'Project Three',
      description: 'A brief description of project three.',
      image: 'https://via.placeholder.com/350x200',
      deployedLink: 'https://project-three.example.com',
      githubLink: 'https://github.com/yourusername/project-three'
    },
    {
      id: 4,
      title: 'Project Four',
      description: 'A brief description of project four.',
      image: 'https://via.placeholder.com/350x200',
      deployedLink: 'https://project-four.example.com',
      githubLink: 'https://github.com/yourusername/project-four'
    },
    {
      id: 5,
      title: 'Project Five',
      description: 'A brief description of project five.',
      image: 'https://via.placeholder.com/350x200',
      deployedLink: 'https://project-five.example.com',
      githubLink: 'https://github.com/yourusername/project-five'
    },
    {
      id: 6,
      title: 'Project Six',
      description: 'A brief description of project six.',
      image: 'https://via.placeholder.com/350x200',
      deployedLink: 'https://project-six.example.com',
      githubLink: 'https://github.com/yourusername/project-six'
    }
  ];

  return (
    <section className="portfolio-section">
      <h2>Portfolio</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <Project
            key={project.id}
            title={project.title}
            image={project.image}
            description={project.description}
            deployedLink={project.deployedLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;