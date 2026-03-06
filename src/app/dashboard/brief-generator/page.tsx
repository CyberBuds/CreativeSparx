'use client'

import { useState } from 'react';
import { generateBrief } from './actions';

export default function BriefGeneratorPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    projectName: '',
    projectDescription: '',
    projectGoals: '',
    targetAudienceDemographics: '',
    targetAudiencePsychographics: '',
    competitorsDirect: '',
    competitorsIndirect: '',
    keyMessage: '',
    toneOfVoice: '',
    deliverables: '',
    timeline: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [generatedBrief, setGeneratedBrief] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleGenerateBrief = async () => {
    setIsLoading(true);
    setStep(6); // Move to the results view
    const brief = await generateBrief(formData);
    setGeneratedBrief(brief as string);
    setIsLoading(false);
  };

  const handleStartOver = () => {
    setStep(1);
    setFormData({
        projectName: '',
        projectDescription: '',
        projectGoals: '',
        targetAudienceDemographics: '',
        targetAudiencePsychographics: '',
        competitorsDirect: '',
        competitorsIndirect: '',
        keyMessage: '',
        toneOfVoice: '',
        deliverables: '',
        timeline: ''
    });
    setGeneratedBrief(null);
    setIsLoading(false);
  }

  return (
    <div className="bg-gray-900 text-white p-8 rounded-lg shadow-lg w-full max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Creative Brief Generator</h1>

      {step < 6 && (
        <div className="space-y-6">
          {/* Stepper UI could go here */}
        </div>
      )}

      {step === 1 && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Step 1: Project Overview</h2>
          <div className="space-y-4">
            <input type="text" name="projectName" placeholder="Project Name" value={formData.projectName} onChange={handleChange} className="w-full px-4 py-2 text-white bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            <textarea name="projectDescription" placeholder="Project Description" value={formData.projectDescription} onChange={handleChange} className="w-full px-4 py-2 text-white bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
            <textarea name="projectGoals" placeholder="Project Goals" value={formData.projectGoals} onChange={handleChange} className="w-full px-4 py-2 text-white bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
          </div>
          <button onClick={() => setStep(2)} className="mt-6 px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Next</button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Step 2: Target Audience</h2>
          <div className="space-y-4">
            <textarea name="targetAudienceDemographics" placeholder="Demographics (e.g., age, gender, location)" value={formData.targetAudienceDemographics} onChange={handleChange} className="w-full px-4 py-2 text-white bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
            <textarea name="targetAudiencePsychographics" placeholder="Psychographics (e.g., interests, values, lifestyle)" value={formData.targetAudiencePsychographics} onChange={handleChange} className="w-full px-4 py-2 text-white bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
          </div>
          <button onClick={() => setStep(1)} className="mt-6 px-4 py-2 text-sm font-medium text-gray-300 bg-gray-700 border border-transparent rounded-md shadow-sm hover:bg-gray-600">Back</button>
          <button onClick={() => setStep(3)} className="ml-4 mt-6 px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700">Next</button>
        </div>
      )}

      {step === 3 && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Step 3: Competitors</h2>
          <div className="space-y-4">
            <textarea name="competitorsDirect" placeholder="Direct Competitors" value={formData.competitorsDirect} onChange={handleChange} className="w-full px-4 py-2 text-white bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
            <textarea name="competitorsIndirect" placeholder="Indirect Competitors" value={formData.competitorsIndirect} onChange={handleChange} className="w-full px-4 py-2 text-white bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
          </div>
          <button onClick={() => setStep(2)} className="mt-6 px-4 py-2 text-sm font-medium text-gray-300 bg-gray-700 border border-transparent rounded-md shadow-sm hover:bg-gray-600">Back</button>
          <button onClick={() => setStep(4)} className="ml-4 mt-6 px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700">Next</button>
        </div>
      )}

      {step === 4 && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Step 4: Key Message & Tone of Voice</h2>
          <div className="space-y-4">
            <textarea name="keyMessage" placeholder="What is the single most important message?" value={formData.keyMessage} onChange={handleChange} className="w-full px-4 py-2 text-white bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
            <textarea name="toneOfVoice" placeholder="e.g., Professional, friendly, witty" value={formData.toneOfVoice} onChange={handleChange} className="w-full px-4 py-2 text-white bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
          </div>
          <button onClick={() => setStep(3)} className="mt-6 px-4 py-2 text-sm font-medium text-gray-300 bg-gray-700 border border-transparent rounded-md shadow-sm hover:bg-gray-600">Back</button>
          <button onClick={() => setStep(5)} className="ml-4 mt-6 px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700">Next</button>
        </div>
      )}

      {step === 5 && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Step 5: Deliverables & Timeline</h2>
          <div className="space-y-4">
            <textarea name="deliverables" placeholder="What needs to be created? (e.g., website, logo)" value={formData.deliverables} onChange={handleChange} className="w-full px-4 py-2 text-white bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
            <input type="text" name="timeline" placeholder="Desired timeline (e.g., 2 weeks, end of month)" value={formData.timeline} onChange={handleChange} className="w-full px-4 py-2 text-white bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
          <button onClick={() => setStep(4)} className="mt-6 px-4 py-2 text-sm font-medium text-gray-300 bg-gray-700 border border-transparent rounded-md shadow-sm hover:bg-gray-600">Back</button>
          <button onClick={handleGenerateBrief} className="ml-4 mt-6 px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700">Generate Brief</button>
        </div>
      )}

      {step === 6 && (
        <div>
            {isLoading ? (
                <p>Generating your creative brief...</p>
            ) : (
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Your Generated Brief</h2>
                    <div className="p-4 bg-gray-800 rounded-md whitespace-pre-wrap">{generatedBrief}</div>
                    <div className="mt-6 flex justify-end space-x-4">
                        <button onClick={handleStartOver} className="px-4 py-2 text-sm font-medium text-gray-300 bg-gray-700 border border-transparent rounded-md shadow-sm hover:bg-gray-600">Start Over</button>
                        <button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700">Save</button>
                        <button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700">Download as PDF</button>
                    </div>
                </div>
            )}
        </div>
      )}

    </div>
  );
}
