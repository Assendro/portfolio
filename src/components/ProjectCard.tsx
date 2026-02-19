import React from 'react';

interface ProjectProps {
    title: string;
    description: string;
    stack: string[];
    link: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ title, description, stack, link }) => {
    return (
        <div className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/50 p-1 transition-all hover:border-sky-500/50 mb-6">
            <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-zinc-100">{title}</h3>
                    <a href={link} target="_blank" rel="noreferrer" className="text-sky-400 hover:text-sky-300 text-sm font-medium">
                        Посмотреть live →
                    </a>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                    {description}
                </p>
                <div className="flex flex-wrap gap-3">
                    {stack.map((tech) => (
                        <span key={tech} className="rounded-md bg-zinc-800 p-2 text-xs text-zinc-300 font-mono">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
