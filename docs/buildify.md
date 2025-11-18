### Requirements

**Application Type:** Borehole Project Management System - Business Operations Focus

**Core Features:**
1. Project Flow Chart - Visual pipeline showing project stages (Lead → Quote → Contract → Drilling → Completed)
2. Dashboard - Overview of active projects, financial summary, recent activities, alerts
3. Financial Management - Revenue tracking, expense tracking, profit/loss analysis
4. Invoicing System - Create, send, and track invoices for clients
5. Payment Tracking - Record payments received, outstanding balances, payment history
6. Expense Management - Track project expenses (equipment, fuel, labor, materials, overhead)
7. Employee Management - Staff database, role assignments, project assignments, payroll tracking
8. Client Management - Client database, contact information, project history, outstanding balances

**User Roles:**
- Admin (full access)
- Accountant (financials, invoicing, payments, expenses)
- Project Manager (projects, clients, employees)
- Viewer (read-only dashboard access)

**Data Entities:**
- Projects (name, client, location, depth, status, start_date, end_date, quoted_amount, actual_cost)
- Clients (name, contact_person, email, phone, address, total_projects, outstanding_balance)
- Employees (name, role, email, phone, hourly_rate, projects_assigned)
- Invoices (invoice_number, project, client, amount, date_issued, due_date, status, paid_amount)
- Payments (invoice, amount, payment_date, payment_method, reference_number)
- Expenses (project, category, description, amount, date, receipt_url, approved_by)

**Technical Stack:**
- Frontend: React + TypeScript + React Router + Tailwind CSS + shadcn/ui
- Backend: Supabase (PostgreSQL database, authentication, storage)
- Charts: Recharts for financial visualizations
- PDF Generation: For invoices and reports

### Designs

**Color Scheme:**
- Primary: Professional blue (#1e40af) - trust, stability
- Success: Green (#16a34a) - payments, profit
- Warning: Orange (#ea580c) - pending items
- Destructive: Red (#dc2626) - overdue, losses
- Background: Light gray (#f9fafb)
- Cards: White with subtle borders

**Layout Structure:**
- Sidebar navigation (collapsible on mobile)
- Top header with user profile, notifications
- Main content area with breadcrumbs
- Responsive grid layouts for cards and tables

**Key UI Components:**
- Project cards with status badges
- Financial summary cards with trend indicators
- Data tables with sorting, filtering, pagination
- Invoice templates with company branding
- Modal forms for creating/editing records
- Kanban board for project flow visualization

### Tasks

**Phase 1: Foundation & Database Setup (800 LOC)**
- [x] Update design system for business app theme
- [x] Create sidebar navigation layout
- [ ] Setup Supabase database schema (projects, clients, employees, invoices, payments, expenses)
- [ ] Create database types and interfaces
- [ ] Setup Supabase client and React Query integration
- [ ] Create authentication system (login, role-based access)

**Phase 2: Dashboard & Project Management (1200 LOC)**
- [ ] Build main dashboard with financial summary cards
- [ ] Create project list view with filtering
- [ ] Build project detail page
- [ ] Create project form (add/edit)
- [ ] Implement project flow chart/kanban view
- [ ] Add project status management

**Phase 3: Client & Employee Management (800 LOC)**
- [ ] Build client list and detail pages
- [ ] Create client form (add/edit)
- [ ] Build employee list and detail pages
- [ ] Create employee form (add/edit)
- [ ] Add employee assignment to projects

**Phase 4: Financial Management - Invoicing (1000 LOC)**
- [ ] Build invoice list view
- [ ] Create invoice generation form
- [ ] Design invoice PDF template
- [ ] Implement invoice PDF generation
- [ ] Add invoice status tracking (draft, sent, paid, overdue)
- [ ] Create invoice detail/preview page

**Phase 5: Financial Management - Payments & Expenses (900 LOC)**
- [ ] Build payment recording form
- [ ] Create payment history view
- [ ] Build expense tracking form
- [ ] Create expense list with filtering by project/category
- [ ] Add expense approval workflow
- [ ] Implement receipt upload to Supabase storage

**Phase 6: Financial Analytics & Reporting (700 LOC)**
- [ ] Create financial dashboard with charts (revenue, expenses, profit)
- [ ] Build profit/loss report by project
- [ ] Create cash flow visualization
- [ ] Add outstanding balance tracking
- [ ] Build expense breakdown by category
- [ ] Create exportable financial reports (PDF/CSV)

**Phase 7: Polish & Optimization (400 LOC)**
- [ ] Add loading states and error handling
- [ ] Implement search functionality across modules
- [ ] Add notifications for overdue invoices
- [ ] Create user settings page
- [ ] Add data export functionality
- [ ] Performance optimization and testing

**Total Estimated LOC: ~5,800**

### Discussions

**Database Design Considerations:**
- Use Row Level Security (RLS) for multi-user access control
- Create views for common queries (project financials, client balances)
- Add triggers for automatic calculations (invoice totals, project costs)
- Index frequently queried fields (client_id, project_id, status)

**Invoice Numbering:**
- Auto-generate invoice numbers with format: INV-YYYY-XXXX
- Store sequence in database to prevent duplicates

**Payment Allocation:**
- Support partial payments on invoices
- Track payment history with timestamps
- Calculate outstanding balance automatically

**Expense Categories:**
- Equipment rental, Fuel, Labor, Materials, Permits, Transportation, Overhead

**Project Status Flow:**
- Lead → Quote Sent → Contract Signed → Drilling → Completed → Invoiced → Paid

**File Storage:**
- Store invoice PDFs in Supabase storage
- Store expense receipts in Supabase storage
- Organize by project folders
