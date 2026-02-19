import React from 'react';

interface ExperienceProps {
    companyName: string;
    jobTitle: string;
    timePeriod: string;
}

const ExperienceCard: React.FC<ExperienceProps> = ({ companyName, jobTitle, timePeriod }) => {
    return (
        <div className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/50 p-1 transition-all hover:border-sky-500/50 mb-6">
            <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-zinc-100">{companyName}</h3>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                    {jobTitle}
                </p>
                <div className="flex flex-wrap gap-3">
                    <span className="rounded-md bg-zinc-800 p-2 text-xs text-zinc-300 font-mono">
                        {timePeriod}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ExperienceCard;
