import StatsGrid from "../components/dashboard/StatsGrid";
import ProductivityChart from "../components/dashboard/ProductivityChart";
import RecentActivity from "../components/dashboard/RecentActivity";
import RecentProjects from "../components/dashboard/RecentProjects";
import QuickActions from "../components/dashboard/QuickActions";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Good morning, Omkar! 👋</h1>
        <p className="text-text-secondary text-sm mt-1">
          Here's what's happening with your workspace today.
        </p>
      </div>

      <StatsGrid />

      <div className="grid lg:grid-cols-3 gap-4">
        <ProductivityChart />
        <RecentActivity />
      </div>

      <div className="grid lg:grid-cols-2 gap-4">
        <RecentProjects />
        <QuickActions />
      </div>
    </div>
  );
}