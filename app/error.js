// app/error.js
"use client";

import Link from "next/link";

export default function ErrorPage({ error, reset }) {
    const errorConfig = {
      404: {
        title: 'LOST IN THE MATRIX',
        subtitle: 'Reality not found',
        description: 'The page you seek has either been deleted or never existed.',
        action: 'Return to Base'
      },
      500: {
        title: 'SYSTEM FAILURE',
        subtitle: 'Server core dumped',
        description: 'Our neural networks are rebooting. Try again soon.',
        action: 'Attempt Reboot'
      },
      default: {
        title: 'UNKNOWN ERROR',
        subtitle: 'Something broke the simulation',
        description: 'An unexpected rift in the digital continuum occurred.',
        action: 'Retry'
      }
    };

    const statusCode = error?.statusCode || 500;
    const { title, subtitle, description, action } = errorConfig[statusCode] || errorConfig.default;

    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <div className="max-w-md space-y-4 flex flex-col items-center justify-center gap-4">
          <h1 className="text-3xl font-bold glitch-1">{title}</h1>
          <p className="text-[20px]">{subtitle}</p>
          <p className="text-gray-700">{description}</p>

          <div className="pt-6">
            {statusCode === 404 ? (
              <Link
                href="/"
                className="inline-block px-6 py-2 bg-green-600 text-white rounded hover:bg-green-500 transition-colors"
              >
                {action}
              </Link>
            ) : (
              <button
                onClick={reset}
                className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition-colors"
              >
                {action}
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
