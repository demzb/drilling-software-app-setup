
import { Plus, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function InvoicesPage() {
  const invoices = [
    { id: 1, number: 'INV-2024-0045', client: 'ABC Company', project: 'Nairobi West', amount: '$25,000', issued: '2024-11-01', due: '2024-11-30', status: 'Paid' },
    { id: 2, number: 'INV-2024-0046', client: 'XYZ Ltd', project: 'Kiambu', amount: '$18,500', issued: '2024-11-05', due: '2024-12-05', status: 'Sent' },
    { id: 3, number: 'INV-2024-0047', client: 'Tech Corp', project: 'Machakos', amount: '$32,000', issued: '2024-10-15', due: '2024-11-15', status: 'Overdue' },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Invoices</h2>
          <p className="text-muted-foreground">Create and manage client invoices</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          New Invoice
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search invoices..." className="pl-9" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Invoice #</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Client</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Project</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Amount</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Issued</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Due Date</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Status</th>
                </tr>
              </thead>
              <tbody>
                {invoices.map((invoice) => (
                  <tr key={invoice.id} className="border-b border-border hover:bg-muted/50 cursor-pointer">
                    <td className="py-3 px-4 font-medium text-foreground">{invoice.number}</td>
                    <td className="py-3 px-4 text-foreground">{invoice.client}</td>
                    <td className="py-3 px-4 text-muted-foreground">{invoice.project}</td>
                    <td className="py-3 px-4 font-semibold text-foreground">{invoice.amount}</td>
                    <td className="py-3 px-4 text-muted-foreground">{invoice.issued}</td>
                    <td className="py-3 px-4 text-muted-foreground">{invoice.due}</td>
                    <td className="py-3 px-4">
                      <Badge variant={
                        invoice.status === 'Paid' ? 'default' : 
                        invoice.status === 'Overdue' ? 'destructive' : 
                        'secondary'
                      }>
                        {invoice.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}