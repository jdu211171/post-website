import {
    BookmarkIcon,
    FolderIcon,
    HomeIcon,
    Settings
} from "lucide-react";

import {cn} from "@/lib/utils.ts";
import {useNavigate, useNavigation} from "react-router-dom";

const routes = [
    {
        label: 'All posts',
        icon: HomeIcon,
        href: '/',
        color: "text-sky-500"
    },
    {
        label: 'My Posts',
        icon: FolderIcon,
        href: '/private',
        color: "text-orange-500",
    },
    {
        label: 'Saved Posts',
        icon: BookmarkIcon,
        href: '/bookmark',
        color: "text-violet-500",
    },
    {
        label: 'Settings',
        icon: Settings,
        href: '/settings',
        color: "text-gray-500"
    },
];

export default function Sidebar() {
    const pathname = useNavigation()
    const navigate = useNavigate()
    return (
        <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
            <div className="px-3 py-2 flex-1">
                <div className="flex items-center pl-3 mb-14">
                    <a onClick={() => navigate('/')} className="cursor-pointer">
                        <h1 className={cn("text-2xl font-bold")}>Post App</h1>
                    </a>
                </div>
                <div className="space-y-1">
                    {routes.map((route) => (
                        <a
                            key={route.href}
                            onClick={() => navigate(route.href)}
                            className={cn(
                                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                                pathname.location?.pathname === route.href ? "text-white bg-white/10" : "text-zinc-400",
                            )}
                        >
                            {/*    pathname.location?.pathname === route.href ? "text-white bg-white/10" : */}
                            <div className="flex items-center flex-1">
                                <route.icon className={cn("h-5 w-5 mr-3", route.color)}/>
                                {route.label}
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}