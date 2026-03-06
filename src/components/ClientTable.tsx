const clients = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com', company: 'Doe Inc.' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', company: 'Smith & Co.' },
  { id: 3, name: 'Peter Jones', email: 'peter.jones@example.com', company: 'Jones Industries' },
];

export default function ClientTable() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="py-2">Name</th>
            <th className="py-2">Email</th>
            <th className="py-2">Company</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client.id} className="border-b last:border-b-0">
              <td className="py-2">{client.name}</td>
              <td className="py-2">{client.email}</td>
              <td className="py-2">{client.company}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}