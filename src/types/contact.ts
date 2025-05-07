export interface Contact {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  jobTitle?: string;
  status: 'active' | 'inactive';
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
  interactions: Interaction[];
}

export interface Interaction {
  date: Date;
  type: '📧 Email' | '📅 Meeting' | '📞 Call' | '📝 Note' | '🍱 Lunch';
  note: string;
}
