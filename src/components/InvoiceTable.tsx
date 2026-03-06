const invoices = [
  {
    id: 'INV-001',
    client: 'John Doe',
    amount: 150.0,
    status: 'Paid',
    date: '2024-07-20',
  },
  {
    id: 'INV-002',
    client: 'Jane Smith',
    amount: 250.5,
    status: 'Pending',
    date: '2024-07-22',
  },
  {
    id: 'INV-003',
    client: 'Peter Jones',
    amount: 75.0,
    status: 'Overdue',
    date: '2024-06-15',
  },
];

export default function InvoiceTable() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="py-2">Invoice ID</th>
            <th className="py-2">Client</th>
            <th className="py-2">Amount</th>
            <th className="py-2">Status</th>
            <th className="py-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice) => (
            <tr key={invoice.id} className="border-b last:border-b-0">
              <td className="py-2">{invoice.id}</td>
              <td className="py-2">{invoice.client}</td>
              <td className="py-2">${invoice.amount.toFixed(2)}</td>
              <td className="py-2">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-semibold ${{
                    Paid: 'bg-green-200 text-green-800',
                    Pending: 'bg-yellow-200 text-yellow-800',
                    Overdue: 'bg-red-200 text-red-800',
                  }[invoice.status]}`}>
                  {invoice.status}
                </span>
              </td>
              <td className="py-2">{invoice.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}