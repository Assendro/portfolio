import { useState } from 'react';
import Tabs from './components/Tabs';
import ProjectCard from './components/ProjectCard';

type TabId = 'projects' | 'skills' | 'about';

function App() {
    const [activeTab, setActiveTab] = useState<TabId>('projects');

    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-sky-500/30">
            <main className="mx-auto max-w-5xl px-6 py-24 md:py-32">

                {/* Hero Секция (оставляем как есть) */}
                <section className="flex flex-col items-start gap-6">
                    <div className="inline-flex items-center rounded-full border border-sky-500/20 bg-sky-500/10 px-3 py-1 text-sm font-medium text-sky-400">
                        Доступен для новых проектов
                    </div>
                    <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl">
                        Привет, я <span className="bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">Кирилл</span>
                    </h1>
                    <p className="max-w-2xl text-lg text-zinc-400 sm:text-xl leading-relaxed">
                        Frontend-разработчик на <span className="text-zinc-100 font-medium italic">React</span>...
                    </p>
                    <div className="mt-4 flex flex-wrap gap-4">
                        <button className="rounded-xl bg-sky-500 px-8 py-4 font-bold text-white transition-all hover:bg-sky-600 active:scale-95">
                            Связаться со мной
                        </button>
                        <button className="rounded-xl border border-zinc-800 bg-zinc-900/50 px-8 py-4 font-bold text-zinc-300 transition-all hover:bg-zinc-800">
                            Мой GitHub
                        </button>
                    </div>
                </section>

                {/* Навигация по вкладкам */}
                <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

                {/* Контент вкладок */}
                <section>
                    {activeTab === 'projects' && (
                        <div className="animate-in fade-in duration-500">
                            <h2 className="text-zinc-500 uppercase tracking-widest text-sm mb-8">Избранные работы</h2>
                            <ProjectCard
                                title="Klumba.ru"
                                description="Разработка фронтенд-части. Реализовал адаптивную верстку, интеграцию с API."
                                stack={['React', 'TypeScript', 'SCSS']}
                                link="#"
                            />
                            {/* Сюда можно добавить еще ProjectCard */}
                        </div>
                    )}

                    {activeTab === 'skills' && (
                        <div className="animate-in fade-in duration-500">
                            <h2 className="text-zinc-500 uppercase tracking-widest text-sm mb-8">Мой стек</h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div className="p-4 rounded-2xl border border-zinc-800 bg-zinc-900/30 text-center">React</div>
                                <div className="p-4 rounded-2xl border border-zinc-800 bg-zinc-900/30 text-center">TypeScript</div>
                                <div className="p-4 rounded-2xl border border-zinc-800 bg-zinc-900/30 text-center">Tailwind</div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'about' && (
                        <div className="animate-in fade-in duration-500 text-zinc-400">
                            Здесь будет информация о твоем опыте на фрилансе...
                        </div>
                    )}
                </section>
            </main>
        </div>
    );
}

export default App;
