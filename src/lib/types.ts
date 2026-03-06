
export interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
}

export interface Invoice {
  id: string;
  invoiceNumber: string;
  clientId: string;
  dueDate: Date;
  amount: number;
  status: 'due' | 'paid';
  clientName?: string; // Optional field for display
}
