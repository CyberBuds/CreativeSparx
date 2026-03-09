'use client'

import { FiCheckCircle, FiClock, FiFile } from 'react-icons/fi';
import clsx from 'clsx';

export default function InvoiceStatus({ status }: { status: string }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-xs',
        {
          'bg-gray-100 text-gray-500': status === 'draft',
          'bg-green-500 text-white': status === 'paid',
          'bg-yellow-500 text-white': status === 'pending',
        },
      )}
    >
      {
        status === 'draft' ? <FiFile className="mr-1" /> :
        status === 'pending' ? <FiClock className="mr-1" /> :
        <FiCheckCircle className="mr-1" />
      }
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
}
