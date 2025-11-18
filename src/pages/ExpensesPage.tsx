
import { Plus, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function ExpensesPage() {
  const expenses = [
    { id: 1, project: 'Nairobi West', category: 'Equipment', description: 'Drill bit replacement', amount: '$1,200', date: '2024-11-12', status: 'Approved' },
    { id: 2, project: 'Kiambu', category: 'Fuel', description: 'Diesel for generator', amount: '$450', date: '2024-11-14', status: 'Pending' },
    { id: 3, project: 'Machakos', category: 'Labor', description: 'Overtime pay - 3 workers', amount: '$800', date: '2024-11-10', status: 'Approved' },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Expenses</h2>
          <p className="text-muted-foreground">Track project costs and overhead</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          New Expense
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search expenses..." className="pl-9" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Project</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Category</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Description</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Amount</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Date</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Status</th>
                </tr>
              </thead>
              <tbody>
                {expenses.map((expense) => (
                  <tr key={expense.id} className="border-b border-border hover:bg-muted/50 cursor-pointer">
                    <td className="py-3 px-4 font-medium text-foreground">{expense.project}</td>
                    <td className="py-3 px-4 text-foreground">{expense.category}</td>
                    <td className="py-3 px-4 text-muted-foreground">{expense.description}</td>
                    <td className="py-3 px-4 font-semibold text-destructive">{expense.amount}</td>
                    <td className="py-3 px-4 text-muted-foreground">{expense.date}</td>
                    <td className="py-3 px-4">
                      <Badge variant={expense.status === 'Approved' ? 'default' : 'secondary'}>
                        {expense.status}
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