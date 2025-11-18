
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, TrendingDown, DollarSign, CreditCard } from 'lucide-react';

export default function FinancialsPage() {
  const summary = [
    { label: 'Total Revenue', value: '$245,680', change: '+12.5%', trend: 'up', icon: DollarSign },
    { label: 'Total Expenses', value: '$128,450', change: '+8.2%', trend: 'up', icon: CreditCard },
    { label: 'Net Profit', value: '$117,230', change: '+18.3%', trend: 'up', icon: TrendingUp },
    { label: 'Outstanding', value: '$42,500', change: '-5.1%', trend: 'down', icon: TrendingDown },
  ];

  return (
    <div className="p-6 space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Financial Overview</h2>
        <p className="text-muted-foreground">Revenue, expenses, and profit analysis</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {summary.map((item) => {
          const Icon = item.icon;
          return (
            <Card key={item.label}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {item.label}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{item.value}</div>
                <div className="flex items-center gap-1 mt-1">
                  {item.trend === 'up' ? (
                    <TrendingUp className="h-3 w-3 text-success" />
                  ) : (
                    <TrendingDown className="h-3 w-3 text-destructive" />
                  )}
                  <span className={`text-xs ${item.trend === 'up' ? 'text-success' : 'text-destructive'}`}>
                    {item.change}
                  </span>
                  <span className="text-xs text-muted-foreground">from last month</span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Financial Charts & Reports</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-center py-12">
            Advanced financial analytics and charts - Coming soon
          </p>
        </CardContent>
      </Card>
    </div>
  );
}