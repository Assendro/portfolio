import React from 'react';

type TabId = 'projects' | 'skills' | 'about' | 'commercial' | 'experience';

interface TabsProps {
    activeTab: TabId;
    setActiveTab: (id: TabId) => void;
}

const Tabs: React.FC<TabsProps> = ({ activeTab, setActiveTab }) => {
    const tabs: { id: TabId; label: string }[] = [
        { id: 'commercial', label: 'Коммерческие проекты' },
        { id: 'projects', label: 'Pet проекты' },
        { id: 'experience', label: 'Опыт работы' },
        { id: 'skills', label: 'Навыки' },
        { id: 'about', label: 'Обо мне' },
    ];

    return (
        <div className="mt-24 mb-12 border-b border-zinc-800">
            {/* Контейнер со скроллом */}
            <div className="flex gap-8 overflow-x-auto pb-4 no-scrollbar whitespace-nowrap">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`relative text-sm font-bold uppercase tracking-widest transition-all cursor-pointer ${activeTab === tab.id ? 'text-sky-400' : 'text-zinc-500 hover:text-zinc-300'
                            }`}
                    >
                        {tab.label}
                        {activeTab === tab.id && (
                            <div className="absolute -bottom-[17px] left-0 h-[2px] w-full bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.4)] cursor-default" />
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Tabs;
