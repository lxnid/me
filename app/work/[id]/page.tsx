'use client';

import { useParams } from 'next/navigation';
import { projects, Project } from '../../data/projects';

const WorkPage = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id as string, 10));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <img src={project.image} alt={project.title} className="w-full h-auto mb-4" />
      <p>This is a template for project {project.id}.</p>
    </div>
  );
};

export default WorkPage;