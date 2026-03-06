interface ActivityItem {
  id: number;
  user: string;
  action: string;
  timestamp: string;
}

const activities: ActivityItem[] = [
  {
    id: 1,
    user: 'John Doe',
    action: 'created a new invoice',
    timestamp: '2 hours ago',
  },
  {
    id: 2,
    user: 'Jane Smith',
    action: 'updated client information',
    timestamp: '5 hours ago',
  },
  {
    id: 3,
    user: 'Admin',
    action: 'processed a payment',
    timestamp: '1 day ago',
  },
];

export default function RecentActivity() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id} className="border-b last:border-b-0 py-2">
            <p className="text-gray-800">
              <span className="font-semibold">{activity.user}</span> {activity.action}
            </p>
            <p className="text-sm text-gray-500">{activity.timestamp}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}