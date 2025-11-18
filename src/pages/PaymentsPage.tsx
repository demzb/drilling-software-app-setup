
import { Plus, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function PaymentsPage() {
  const payments = [
    { id: 1, invoice: 'INV-2024-0045', client: 'ABC Company', amount: '$25,000', date: '2024-11-15', method: 'Bank Transfer', reference: 'TXN123456' },
    { id: 2, invoice: 'INV-2024-0044', client: 'XYZ Ltd', amount: '$15,000', date: '2024-11-10', method: 'Check', reference: 'CHK789012' },
    { id: 3, invoice: 'INV-2024-0043', client: 'Tech Corp', amount: '$20,000', date: '2024-11-08', method: 'M-Pesa', reference: 'MPE345678' },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Payments</h2>
          <p className="text-muted-foreground">Track and record client payments</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Record Payment
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search payments..." className="pl-9" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Invoice #</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Client</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Amount</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Date</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Method</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Reference</th>
                </tr>
              </thead>
              <tbody>
                {payments.map((payment) => (
                  <tr key={payment.id} className="border-b border-border hover:bg-muted/50 cursor-pointer">
                    <td className="py-3 px-4 font-medium text-foreground">{payment.invoice}</td>
                    <td className="py-3 px-4 text-foreground">{payment.client}</td>
                    <td className="py-3 px-4 font-semibold text-success">{payment.amount}</td>
                    <td className="py-3 px-4 text-muted-foreground">{payment.date}</td>
                    <td className="py-3 px-4">
                      <Badge variant="outline">{payment.method}</Badge>
                    </td>
                    <td className="py-3 px-4 text-muted-foreground">{payment.reference}</td>
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