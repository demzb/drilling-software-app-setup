
import { DollarSign, FolderKanban, Users, FileText, TrendingUp, TrendingDown, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function DashboardPage() {
  const stats = [
    { 
      label: 'Total Revenue', 
      value: '$245,680', 
      change: '+12.5%', 
      trend: 'up',
      icon: DollarSign,
      color: 'text-success'
    },
    { 
      label: 'Active Projects', 
      value: '18', 
      change: '+3', 
      trend: 'up',
      icon: FolderKanban,
      color: 'text-primary'
    },
    { 
      label: 'Total Clients', 
      value: '42', 
      change: '+5', 
      trend: 'up',
      icon: Users,
      color: 'text-secondary'
    },
    { 
      label: 'Pending Invoices', 
      value: '7', 
      change: '-2', 
      trend: 'down',
      icon: FileText,
      color: 'text-warning'
    },
  ];

  const recentProjects = [
    { name: 'Borehole - Nairobi West', client: 'ABC Company', status: 'Drilling', progress: 65 },
    { name: 'Borehole - Kiambu', client: 'XYZ Ltd', status: 'Quote Sent', progress: 20 },
    { name: 'Borehole - Machakos', client: 'Tech Corp', status: 'Completed', progress: 100 },
  ];

  const alerts = [
    { message: 'Invoice #INV-2024-0045 is overdue', type: 'warning' },
    { message: 'Project "Nairobi West" needs material approval', type: 'info' },
    { message: 'Payment received: $15,000 from ABC Company', type: 'success' },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.label}
                </CardTitle>
                <Icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="flex items-center gap-1 mt-1">
                  {stat.trend === 'up' ? (
                    <TrendingUp className="h-3 w-3 text-success" />
                  ) : (
                    <TrendingDown className="h-3 w-3 text-destructive" />
                  )}
                  <span className={`text-xs ${stat.trend === 'up' ? 'text-success' : 'text-destructive'}`}>
                    {stat.change}
                  </span>
                  <span className="text-xs text-muted-foreground">from last month</span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Projects */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentProjects.map((project) => (
                <div key={project.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-foreground">{project.name}</p>
                      <p className="text-sm text-muted-foreground">{project.client}</p>
                    </div>
                    <Badge 
                      variant={
                        project.status === 'Completed' ? 'default' : 
                        project.status === 'Drilling' ? 'secondary' : 
                        'outline'
                      }
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Alerts */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {alerts.map((alert, index) => (
                <div 
                  key={index}
                  className={`flex items-start gap-3 p-3 rounded-md ${
                    alert.type === 'warning' ? 'bg-warning/10' :
                    alert.type === 'success' ? 'bg-success/10' :
                    'bg-primary/10'
                  }`}
                >
                  <AlertCircle className={`h-4 w-4 mt-0.5 ${
                    alert.type === 'warning' ? 'text-warning' :
                    alert.type === 'success' ? 'text-success' :
                    'text-primary'
                  }`} />
                  <p className="text-sm text-foreground">{alert.message}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}