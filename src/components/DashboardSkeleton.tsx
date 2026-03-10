
export default function DashboardSkeleton() {
  return (
    <div className="p-6 animate-pulse">
      {/* Cards Skeleton */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="bg-card h-32 rounded-lg shadow-soft"></div>
        <div className="bg-card h-32 rounded-lg shadow-soft"></div>
        <div className="bg-card h-32 rounded-lg shadow-soft"></div>
        <div className="bg-card h-32 rounded-lg shadow-soft"></div>
      </div>

      {/* Chart and Invoices Skeleton */}
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <div className="lg:col-span-5 bg-card h-96 rounded-lg shadow-soft"></div>
        <div className="lg:col-span-3 bg-card h-96 rounded-lg shadow-soft"></div>
      </div>

      {/* Recent Activity Skeleton */}
      <div className="mt-6 bg-card h-64 rounded-lg shadow-soft"></div>
    </div>
  );
}
