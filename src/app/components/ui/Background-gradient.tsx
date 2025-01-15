import { cn } from "@/app/lib/utils";
import React from "react";

export const BackgroundGradient = ({
                                       className,
                                       children,
                                   }: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "relative group/card rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300",
                className
            )}
        >
            <div className="absolute -inset-px bg-gradient-to-r from-purple-500/50 to-blue-500/50 rounded-xl opacity-0 group-hover/card:opacity-100 transition-all duration-500" />
            <div className="relative">{children}</div>
        </div>
    );
};