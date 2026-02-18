import { useState } from 'react';

const skills = [
    { name: 'React', source: 'Курс на Udemy + 3 проекта', level: 'Advanced' },
    { name: 'TypeScript', source: 'Документация + практика на фрилансе', level: 'Intermediate' },
];

export const Skills = () => {
    const [activeSkill, setActiveSkill] = useState<string | null>(null);

    return (
        <section className="mt-20">
            <h2 className="text-2xl font-bold mb-8">Навыки</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {skills.map((skill) => (
                    <div
                        key={skill.name}
                        onClick={() => setActiveSkill(activeSkill === skill.name ? null : skill.name)}
                        className="cursor-pointer p-4 rounded-xl border border-zinc-800 bg-zinc-900 transition-all hover:border-sky-500"
                    >
                        <p className="font-bold">{skill.name}</p>

                        {/* Анимированное раскрытие подробностей */}
                        <div className={`overflow-hidden transition-all duration-300 ${activeSkill === skill.name ? 'max-h-20 mt-2' : 'max-h-0'}`}>
                            <p className="text-xs text-zinc-400">{skill.source}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};