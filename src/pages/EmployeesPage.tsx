
import { Plus, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function EmployeesPage() {
  const employees = [
    { id: 1, name: 'Michael Johnson', role: 'Driller', email: 'michael@borepro.com', phone: '+254 745 678 901', rate: '$50/hr', status: 'Active' },
    { id: 2, name: 'Sarah Williams', role: 'Supervisor', email: 'sarah@borepro.com', phone: '+254 756 789 012', rate: '$65/hr', status: 'Active' },
    { id: 3, name: 'David Brown', role: 'Technician', email: 'david@borepro.com', phone: '+254 767 890 123', rate: '$45/hr', status: 'On Leave' },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Employees</h2>
          <p className="text-muted-foreground">Manage staff and assignments</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          New Employee
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search employees..." className="pl-9" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Name</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Role</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Email</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Phone</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Rate</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Status</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee) => (
                  <tr key={employee.id} className="border-b border-border hover:bg-muted/50 cursor-pointer">
                    <td className="py-3 px-4 font-medium text-foreground">{employee.name}</td>
                    <td className="py-3 px-4 text-foreground">{employee.role}</td>
                    <td className="py-3 px-4 text-muted-foreground">{employee.email}</td>
                    <td className="py-3 px-4 text-muted-foreground">{employee.phone}</td>
                    <td className="py-3 px-4 text-foreground">{employee.rate}</td>
                    <td className="py-3 px-4">
                      <Badge variant={employee.status === 'Active' ? 'default' : 'secondary'}>
                        {employee.status}
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