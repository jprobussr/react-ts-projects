export type JobStatus = 'Applied' | 'Interview' | 'Offer' | 'Rejected';

export interface JobApplication {
  id: string;
  company: string;
  position: string;
  location: string;
  isRemote: boolean;
  status: JobStatus;
}

export const testApplication: JobApplication = {
  id: crypto.randomUUID(),
  company: 'Acme Corp',
  position: 'Junior Front-End Developer',
  location: 'Nashville, TN',
  isRemote: true,
  status: 'Applied',
};

