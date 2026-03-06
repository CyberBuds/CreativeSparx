import { IconType } from 'react-icons';

interface SummaryCardProps {
    title: string;
    value: number;
    icon: IconType;
}

export default function SummaryCard({ title, value, icon: Icon }: SummaryCardProps) {
    return (
        <div className="p-6 bg-white rounded-lg shadow-sm">
            <div className="flex items-center">
                <div className="flex-shrink-0">
                    <Icon className="w-8 h-8 text-gray-400" />
                </div>
                <div className="ml-5 w-0 flex-1">
                    <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                            {title}
                        </dt>
                        <dd>
                            <div className="text-lg font-medium text-gray-900">
                                {value}
                            </div>
                        </dd>
                    </dl>
                </div>
            </div>
        </div>
    );
}
