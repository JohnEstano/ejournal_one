import React, { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { House, Ampersand, Signature, Images, Sun, Moon } from "lucide-react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "@/components/theme-provider";

function NavItem({ to, label, icon: Icon, isActive }) {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button
                        asChild
                        variant="ghost"
                        size="icon"
                        className={cn(isActive ? "text-primary" : "text-muted-foreground")}
                    >
                        <Link to={to}>
                            <Icon className="h-6 w-6 text-zinc-900 dark:text-zinc-100" />
                        </Link>
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>{label}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}

export function DockNav({ className }) {
    const { theme, setTheme } = useTheme();
    const location = useLocation();
    const [mounted, setMounted] = useState(false);


    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;


    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <div className={cn("fixed top-0 left-0 w-full z-50 bg-transparent py-4", className)}>
            <Dock className="flex items-center justify-center space-x-4 mx-auto z-100">
                <DockIcon>
                    <NavItem to="/" label="Home" icon={House} isActive={location.pathname === "/"} />
                </DockIcon>
                <DockIcon>
                    <NavItem to="/about" label="About" icon={Ampersand} isActive={location.pathname === "/about"} />
                </DockIcon>
                <DockIcon>
                    <NavItem to="/blogs" label="Blogs" icon={Signature} isActive={location.pathname === "/blogs"} />
                </DockIcon>
                <DockIcon>
                    <NavItem to="/gallery" label="Gallery" icon={Images} isActive={location.pathname === "/gallery"} />
                </DockIcon>

                <Separator orientation="vertical" className="h-8 mx-2" />

                <DockIcon>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={toggleTheme}
                                    className="relative h-9 w-9"
                                    aria-label="Toggle theme"
                                >
                                    <motion.div
                                        key={theme}
                                        initial={{ rotate: 40, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute"
                                    >
                                        {theme === "dark" ? (
                                            <Moon className="h-[1.2rem] w-[1.2rem]" />
                                        ) : (
                                            <Sun className="h-[1.2rem] w-[1.2rem]" />
                                        )}
                                    </motion.div>
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{theme === "dark" ? "Dark mode" : "Light mode"}</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </DockIcon>
            </Dock>
        </div>
    );
}
