import React from 'react';

const ProjectList: React.FC = () => {
    // Позже мы вынесем эти данные в отдельный конфиг-файл
    const projects = [
        {
            id: 1,
            title: 'Klumba.ru',
            description: 'Разработка фронтенд-части. Реализовал адаптивную верстку, интеграцию с API.',
            stack: ['React', 'TypeScript', 'SCSS'],
            link: '#',
        },
        // Тут можно добавить второй проект для проверки
    ];

    return (
        <div className="space-y-8">
            <h3 className="text-gray-500 text-xs uppercase tracking-widest mb-8">Избранные работы</h3>
            {projects.map((project) => (
                <div
                    key={project.id}
                    className="bg-[#0f0f0f] border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all group"
                >
                    <div className="flex justify-between items-start mb-4">
                        <h4 className="text-2xl font-bold">{project.title}</h4>
                        <a href={project.link} className="text-cyan-400 text-sm hover:underline transition-all">
                            Посмотреть live →
                        </a>
                    </div>
                    <p className="text-gray-400 mb-6 max-w-2xl">{project.description}</p>

                    <div className="flex gap-2">
                        {project.stack.map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-1 bg-gray-900 border border-gray-800 rounded-md text-xs text-gray-400"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProjectList;
