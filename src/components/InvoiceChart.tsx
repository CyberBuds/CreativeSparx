'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', Invoiced: 4000, Paid: 2400 },
  { name: 'Feb', Invoiced: 3000, Paid: 1398 },
  { name: 'Mar', Invoiced: 2000, Paid: 9800 },
  { name: 'Apr', Invoiced: 2780, Paid: 3908 },
  { name: 'May', Invoiced: 1890, Paid: 4800 },
  { name: 'Jun', Invoiced: 2390, Paid: 3800 },
  { name: 'Jul', Invoiced: 3490, Paid: 4300 },
];

export default function InvoiceChart() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-xl font-bold mb-4">Invoice Stats</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Invoiced" fill="#8884d8" />
          <Bar dataKey="Paid" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}