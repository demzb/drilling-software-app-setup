
import { Activity, Drill, AlertTriangle, TrendingUp, Clock, MapPin } from 'lucide-react';

export default function HomePage() {
  const stats = [
    { label: 'Active Wells', value: '12', icon: Drill, color: 'bg-primary' },
    { label: 'Total Depth (ft)', value: '45,230', icon: TrendingUp, color: 'bg-success' },
    { label: 'Active Alerts', value: '3', icon: AlertTriangle, color: 'bg-warning' },
    { label: 'Avg. ROP (ft/hr)', value: '87.5', icon: Activity, color: 'bg-accent' },
  ];

  const activeWells = [
    { name: 'Well A-101', status: 'Drilling', depth: '8,450 ft', location: 'Sector 7-B', rop: '92 ft/hr' },
    { name: 'Well B-205', status: 'Tripping', depth: '12,300 ft', location: 'Sector 3-A', rop: '0 ft/hr' },
    { name: 'Well C-089', status: 'Drilling', depth: '6,780 ft', location: 'Sector 5-C', rop: '85 ft/hr' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center py-20"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1920&h=600&fit=crop)',
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Real-Time Drilling Operations Management
            </h2>
            <p className="text-xl text-gray-200">
              Monitor, analyze, and optimize your drilling operations with advanced data analytics and real-time insights.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="bg-card rounded-lg shadow-md p-6 border border-border">
                <div className="flex items-center justify-between mb-2">
                  <div className={`${stat.color} p-3 rounded-lg`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Active Wells Table */}
        <div className="bg-card rounded-lg shadow-md border border-border overflow-hidden">
          <div className="bg-secondary px-6 py-4">
            <h3 className="text-xl font-semibold text-secondary-foreground">Active Wells</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Well Name</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Status</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Current Depth</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Location</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">ROP</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {activeWells.map((well) => (
                  <tr key={well.name} className="hover:bg-muted/50 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-foreground">{well.name}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
                        well.status === 'Drilling' 
                          ? 'bg-success/10 text-success' 
                          : 'bg-warning/10 text-warning'
                      }`}>
                        <Clock className="h-3 w-3" />
                        {well.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-foreground">{well.depth}</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        {well.location}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-foreground">{well.rop}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-card rounded-lg shadow-md p-6 border border-border hover:shadow-lg transition-shadow">
            <Drill className="h-10 w-10 text-primary mb-4" />
            <h4 className="text-lg font-semibold text-foreground mb-2">Start New Operation</h4>
            <p className="text-sm text-muted-foreground">Initialize drilling parameters for a new well</p>
          </div>
          <div className="bg-card rounded-lg shadow-md p-6 border border-border hover:shadow-lg transition-shadow">
            <Activity className="h-10 w-10 text-success mb-4" />
            <h4 className="text-lg font-semibold text-foreground mb-2">View Live Data</h4>
            <p className="text-sm text-muted-foreground">Monitor real-time drilling metrics and sensors</p>
          </div>
          <div className="bg-card rounded-lg shadow-md p-6 border border-border hover:shadow-lg transition-shadow">
            <AlertTriangle className="h-10 w-10 text-warning mb-4" />
            <h4 className="text-lg font-semibold text-foreground mb-2">Safety Alerts</h4>
            <p className="text-sm text-muted-foreground">Review and manage active safety notifications</p>
          </div>
        </div>
      </div>
    </div>
  );
}