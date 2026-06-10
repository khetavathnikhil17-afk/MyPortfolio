"use client";

interface IntroWrapperProps {
    children: React.ReactNode;
}

export default function IntroWrapper({ children }: IntroWrapperProps) {
    return <>{children}</>;
}