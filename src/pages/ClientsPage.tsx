
import { Plus, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export default function ClientsPage() {
  const clients = [
    { id: 1, name: 'ABC Company', contact: 'John Doe', email: 'john@abc.com', phone: '+254 712 345 678', projects: 5, balance: '$12,500' },
    { id: 2, name: 'XYZ Ltd', contact: 'Jane Smith', email: 'jane@xyz.com', phone: '+254 723 456 789', projects: 3, balance: '$0' },
    { id: 3, name: 'Tech Corp', contact: 'Bob Wilson', email: 'bob@tech.com', phone: '+254 734 567 890', projects: 8, balance: '$25,000' },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Clients</h2>
          <p className="text-muted-foreground">Manage client information and relationships</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          New Client
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search clients..." className="pl-9" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Client Name</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Contact Person</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Email</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Phone</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Projects</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Balance</th>
                </tr>
              </thead>
              <tbody>
                {clients.map((client) => (
                  <tr key={client.id} className="border-b border-border hover:bg-muted/50 cursor-pointer">
                    <td className="py-3 px-4 font-medium text-foreground">{client.name}</td>
                    <td className="py-3 px-4 text-foreground">{client.contact}</td>
                    <td className="py-3 px-4 text-muted-foreground">{client.email}</td>
                    <td className="py-3 px-4 text-muted-foreground">{client.phone}</td>
                    <td className="py-3 px-4 text-foreground">{client.projects}</td>
                    <td className="py-3 px-4 font-semibold text-foreground">{client.balance}</td>
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