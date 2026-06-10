"use client";

import { useState, useCallback } from "react";

export function useLoading(initialState = false) {
    const [isLoading, setIsLoading] = useState(initialState);
    const [message, setMessage] = useState("Loading");

    const startLoading = useCallback((msg?: string) => {
        if (msg) setMessage(msg);
        setIsLoading(true);
    }, []);

    const stopLoading = useCallback(() => {
        setIsLoading(false);
    }, []);

    const withLoading = useCallback(
        async <T,>(asyncFn: () => Promise<T>, msg?: string): Promise<T> => {
            startLoading(msg);
            try {
                const result = await asyncFn();
                return result;
            } finally {
                stopLoading();
            }
        },
        [startLoading, stopLoading]
    );

    return {
        isLoading,
        message,
        startLoading,
        stopLoading,
        withLoading,
    };
}