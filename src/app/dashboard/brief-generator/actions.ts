'use server'

interface BriefFormData {
  projectName: string;
  projectDescription: string;
  projectGoals: string;
  targetAudienceDemographics: string;
  targetAudiencePsychographics: string;
  competitorsDirect: string;
  competitorsIndirect: string;
  keyMessage: string;
  toneOfVoice: string;
  deliverables: string;
  timeline: string;
}

export async function generateBrief(formData: BriefFormData) {
  // In a real application, you would format this data and send it to an LLM
  console.log('Generating brief with the following data:', formData);

  // Mock LLM response
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`
        ## Creative Brief: ${formData.projectName}

        **Project Overview:** ${formData.projectDescription}

        **Goals:** ${formData.projectGoals}

        **Target Audience:**
        *   **Demographics:** ${formData.targetAudienceDemographics}
        *   **Psychographics:** ${formData.targetAudiencePsychographics}

        **Competitors:**
        *   **Direct:** ${formData.competitorsDirect}
        *   **Indirect:** ${formData.competitorsIndirect}

        **Key Message:** ${formData.keyMessage}

        **Tone of Voice:** ${formData.toneOfVoice}

        **Deliverables:** ${formData.deliverables}

        **Timeline:** ${formData.timeline}
      `);
    }, 1000);
  });
}
