
import { Plus, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function ProjectsPage() {
  const projects = [
    { id: 1, name: 'Borehole - Nairobi West', client: 'ABC Company', location: 'Nairobi', depth: '150m', status: 'Drilling', amount: '$25,000' },
    { id: 2, name: 'Borehole - Kiambu', client: 'XYZ Ltd', location: 'Kiambu', depth: '120m', status: 'Quote Sent', amount: '$18,500' },
    { id: 3, name: 'Borehole - Machakos', client: 'Tech Corp', location: 'Machakos', depth: '180m', status: 'Completed', amount: '$32,000' },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Projects</h2>
          <p className="text-muted-foreground">Manage all borehole drilling projects</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          New Project
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search projects..." className="pl-9" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Project Name</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Client</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Location</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Depth</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Status</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Amount</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project) => (
                  <tr key={project.id} className="border-b border-border hover:bg-muted/50 cursor-pointer">
                    <td className="py-3 px-4 font-medium text-foreground">{project.name}</td>
                    <td className="py-3 px-4 text-foreground">{project.client}</td>
                    <td className="py-3 px-4 text-muted-foreground">{project.location}</td>
                    <td className="py-3 px-4 text-muted-foreground">{project.depth}</td>
                    <td className="py-3 px-4">
                      <Badge variant={project.status === 'Completed' ? 'default' : project.status === 'Drilling' ? 'secondary' : 'outline'}>
                        {project.status}
                      </Badge>
                    </td>
                    <td className="py-3 px-4 font-semibold text-foreground">{project.amount}</td>
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