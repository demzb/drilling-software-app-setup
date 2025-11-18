
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Drill, BarChart3, FileText, Database, Activity } from 'lucide-react';

export default function Layout() {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Dashboard', icon: Activity },
    { path: '/drilling-ops', label: 'Drilling Ops', icon: Drill },
    { path: '/well-management', label: 'Well Management', icon: Database },
    { path: '/analytics', label: 'Analytics', icon: BarChart3 },
    { path: '/reports', label: 'Reports', icon: FileText },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary text-primary-foreground shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Drill className="h-8 w-8" />
              <h1 className="text-2xl font-bold">DrillTech Pro</h1>
            </div>
            <nav className="hidden md:flex gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
                      isActive
                        ? 'bg-primary-foreground/20 font-semibold'
                        : 'hover:bg-primary-foreground/10'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-secondary text-secondary-foreground py-6 mt-auto">
        <div className="container mx-auto px-4 text-center text-sm">
          <p>&copy; 2025 DrillTech Pro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}