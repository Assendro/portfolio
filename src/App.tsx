import { useState } from 'react';
import Tabs from './components/Tabs';
import ProjectCard from './components/ProjectCard';

type TabId = 'projects' | 'skills' | 'about' | 'commercial' | 'experience';

function App() {
    const [activeTab, setActiveTab] = useState<TabId>('projects');

    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-sky-500/30">
            <main className="mx-auto max-w-7xl px-6 py-24 md:py-32">

                {/* Hero Секция */}
                <section className="flex flex-col items-start gap-6">
                    <div className="inline-flex items-center rounded-full border border-sky-500/20 bg-sky-500/10 px-3 py-1 text-sm font-medium text-sky-400 cursor-default">
                        Доступен для новых проектов
                    </div>
                    <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl">
                        Привет, я <span className="bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">Кирилл</span>
                    </h1>
                    <p className="max-w-2xl text-lg text-zinc-400 sm:text-xl leading-relaxed">
                        Frontend-разработчик на <span className="text-zinc-100 font-medium italic">React</span>...
                    </p>
                    <div className="mt-4 flex flex-wrap gap-4">
                        <button className="rounded-xl bg-sky-500 px-8 py-4 font-bold text-white transition-all hover:bg-sky-600 active:scale-95 cursor-pointer" onClick={() => window.open('https://t.me/assendro')}>
                            Связаться со мной
                        </button>
                        <button className="rounded-xl border border-zinc-800 bg-zinc-900/50 px-8 py-4 font-bold text-zinc-300 transition-all hover:bg-zinc-800 cursor-pointer" onClick={() => window.open('https://github.com/Assendro')}>
                            Мой GitHub
                        </button>
                    </div>
                </section>

                {/* Навигация по вкладкам */}
                <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

                {/* Контент вкладок */}
                <section>
                    {activeTab === 'commercial' && (
                        <div className="animate-in fade-in duration-500">
                            <ProjectCard
                                title="klum-ba.ru"
                                description="Разработка фронтенд-части. Реализовал адаптивную верстку, интеграцию с API."
                                stack={['HTML', 'JavaScript', 'CSS']}
                                link="https://klum-ba.ru/"
                            />
                        </div>
                    )}
                    {activeTab === 'projects' && (
                        <div className="animate-in fade-in duration-500">
                            <ProjectCard
                                title="Resume website"
                                description="Сайт, который выступает альтернативой резюме. В нём собранны все мои работы, указаны мои навыки и немного рассказано обо мне."
                                stack={['HTML', 'React', 'Tailwind', 'TypeScript']}
                                link="https://portfolio-one-topaz-k0d5rsqkdz.vercel.app/"
                            />
                            <ProjectCard
                                title="Rouge-game"
                                description="Разработка фронтенд-части. Реализовал адаптивную верстку, интеграцию с API."
                                stack={['HTML', 'JavaScript', 'CSS']}
                                link="https://assendro.github.io/Rouge-game1.1/"
                            />
                            <ProjectCard
                                title="Arena"
                                description="Разработка фронтенд-части. Реализовал адаптивную верстку, интеграцию с API."
                                stack={['React', 'HTML', 'JavaScript', 'CSS']}
                                link="https://assendro.github.io/AssendroArena/"
                            />
                            <ProjectCard
                                title="TowerDefense"
                                description="Разработка фронтенд-части. Реализовал адаптивную верстку, интеграцию с API."
                                stack={['HTML', 'JavaScript', 'CSS']}
                                link="https://assendro.github.io/AssendroTD/"
                            />
                        </div>
                    )}
                    {activeTab === 'experience' && (
                        <div className="animate-in fade-in duration-500">
                        </div>
                    )}

                    {activeTab === 'skills' && (
                        <div className="animate-in fade-in duration-500">
                            <h2 className="text-zinc-500 uppercase tracking-widest text-lg my-8">Основные навыки</h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                                <button className="p-3 rounded-2xl border border-zinc-800 bg-zinc-900/30 text-center cursor-pointer">HTML</button>
                                <button className="p-3 rounded-2xl border border-zinc-800 bg-zinc-900/30 text-center cursor-pointer">JavaScript</button>
                                <button className="p-3 rounded-2xl border border-zinc-800 bg-zinc-900/30 text-center cursor-pointer">TypeScript</button>
                                <button className="p-3 rounded-2xl border border-zinc-800 bg-zinc-900/30 text-center cursor-pointer">React</button>
                                <button className="p-3 rounded-2xl border border-zinc-800 bg-zinc-900/30 text-center cursor-pointer">CSS</button>
                                <button className="p-3 rounded-2xl border border-zinc-800 bg-zinc-900/30 text-center cursor-pointer">Tailwind</button>
                                <button className="p-3 rounded-2xl border border-zinc-800 bg-zinc-900/30 text-center cursor-pointer">SASS</button>
                            </div>
                            <h2 className="text-zinc-500 uppercase tracking-widest text-lg my-8">Все навыки</h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                                <button className="p-3 rounded-2xl border border-zinc-800 bg-zinc-900/30 text-center cursor-pointer">Node.js</button>
                                <button className="p-3 rounded-2xl border border-zinc-800 bg-zinc-900/30 text-center cursor-pointer">MySQL</button>
                                <button className="p-3 rounded-2xl border border-zinc-800 bg-zinc-900/30 text-center cursor-pointer">ClickHouse</button>
                                <button className="p-3 rounded-2xl border border-zinc-800 bg-zinc-900/30 text-center cursor-pointer">Metabase</button>
                                <button className="p-3 rounded-2xl border border-zinc-800 bg-zinc-900/30 text-center cursor-pointer">API</button>
                                <button className="p-3 rounded-2xl border border-zinc-800 bg-zinc-900/30 text-center cursor-pointer">git</button>
                                <button className="p-3 rounded-2xl border border-zinc-800 bg-zinc-900/30 text-center cursor-pointer">JSON</button>
                                <button className="p-3 rounded-2xl border border-zinc-800 bg-zinc-900/30 text-center cursor-pointer">XML</button>
                                <button className="p-3 rounded-2xl border border-zinc-800 bg-zinc-900/30 text-center cursor-pointer">jQuery</button>
                                <button className="p-3 rounded-2xl border border-zinc-800 bg-zinc-900/30 text-center cursor-pointer">Ajax</button>
                            </div>
                        </div>
                    )}

                    {activeTab === 'about' && (
                        <div className="animate-in fade-in duration-500 text-zinc-400">
                            Здесь будет информация обо мне...
                        </div>
                    )}
                </section>
            </main>
        </div>
    );
}

export default App;
