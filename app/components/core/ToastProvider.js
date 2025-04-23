"use client";

import { useState } from 'react';
import { Toast, Portal } from 'radix-ui';

export const ToastProvider = ({ children }) => {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');

    const showToast = (msg) => {
        setMessage(msg);
        setOpen(false);
        setTimeout(() => setOpen(true), 50);
    };

    return (
        <Toast.Provider swipeDirection="right">
            {children(showToast)}

            <Toast.Root open={open} onOpenChange={setOpen} className="font-bold bg-white p-4 px-6"
                style={{
                    clipPath: `polygon(
                      0px calc(100% - 8px),
                      4px calc(100% - 8px),
                      4px calc(100% - 4px),
                      8px calc(100% - 4px),
                      8px 100%,
                      calc(100% - 8px) 100%,
                      calc(100% - 8px) calc(100% - 4px),
                      calc(100% - 4px) calc(100% - 4px),
                      calc(100% - 4px) calc(100% - 8px),
                      100% calc(100% - 8px),
                      100% 8px,
                      calc(100% - 4px) 8px,
                      calc(100% - 4px) 4px,
                      calc(100% - 8px) 4px,
                      calc(100% - 8px) 0px,
                      8px 0px,
                      8px 4px,
                      4px 4px,
                      4px 8px,
                      0px 8px
                    )`
                }}
            >
                <Toast.Title className="toast-title">{message}</Toast.Title>
            </Toast.Root>

            {/* This ensures the toast is always relative to <body> */}
            <Portal.Root>
                <Toast.Viewport className="fixed bottom-0 right-0 p-3 z-[100]" />
            </Portal.Root>
        </Toast.Provider>
    );
};
