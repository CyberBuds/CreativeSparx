import { demoInvoices } from '@/components/demo/demo-data';
import { lusitana } from '@/components/fonts';
import { formatCurrency, formatDateToLocal } from '@/lib/utils';
import InvoiceStatus from '@/components/invoices/status';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function Page() {
  return (
    <main className="w-full">
        <h1 className={`${lusitana.className} text-2xl`}>Demo Invoices</h1>
      <Card className="mt-6">
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Customer</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {demoInvoices.map((invoice) => (
                <TableRow key={invoice.id}>
                  <TableCell>{invoice.customer}</TableCell>
                  <TableCell>{formatCurrency(invoice.amount)}</TableCell>
                  <TableCell>{formatDateToLocal(invoice.date)}</TableCell>
                  <TableCell>
                    <InvoiceStatus status={invoice.status} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </main>
  );
}
