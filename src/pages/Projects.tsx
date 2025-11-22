export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Portfolio Site',
      description: 'A modern portfolio built with Vite, React, and MDX',
      technologies: ['Vite', 'React', 'TypeScript', 'Tailwind CSS', 'MDX'],
      link: '#'
    },
    {
      id: 2,
      title: 'Example Project',
      description: 'Add your own projects here',
      technologies: ['React', 'Node.js'],
      link: '#'
    }
  ]

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Projects</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div 
            key={project.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              {project.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a 
              href={project.link}
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
