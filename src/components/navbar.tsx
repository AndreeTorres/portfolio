import React from "react";
import {
    Navbar as MTNavbar,
    Collapse,
    IconButton,
    Typography,
} from "@material-tailwind/react";
import {
    HomeIcon,
    CodeBracketIcon,
    Squares2X2Icon,
    BriefcaseIcon,
    RectangleStackIcon,
    UserCircleIcon,
    DocumentTextIcon,
    LinkIcon,
} from "@heroicons/react/24/solid";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/20/solid";
import {BrowserRouter} from "react-router-dom";
import Link from "next/link";

const NAV_MENU = [
    {name: "Home", icon: HomeIcon, href: "/"},
    {name: "Projects", icon: CodeBracketIcon, href: "/projects"},
    {name: "Experience", icon: BriefcaseIcon, href: "/experience"},
    {name: "Resume", icon: DocumentTextIcon, href: "/resume"},
    {name: "GitHub", icon: LinkIcon, href: "https://github.com/AndreeTorres"},
];

interface NavItemProps {
    children: React.ReactNode;
    href?: string;
}

function NavItem({children, href}: NavItemProps) {
    const isExternal = href?.startsWith("http");

    if (isExternal) {
        return (
            <li>
                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-medium text-gray-900 hover:text-blue-500 transition"
                >
                    {children}
                </a>
            </li>
        );
    }

    return (
        <li>
            <Link
                href={href || "/"}
                className="flex items-center gap-2 font-medium text-gray-900 hover:text-blue-500 transition no-underline"
            >
                {children}
            </Link>
        </li>
    );
}

export function Navbar() {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen((cur) => !cur);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpen(false)
        );
    }, []);

    return (
        <MTNavbar
            shadow={false}
            fullWidth
            className="border-0 sticky top-0 z-50"
            placeholder=""
            onPointerEnterCapture={() => {
            }}
            onPointerLeaveCapture={() => {
            }}
            onResize={() => {
            }}
            onResizeCapture={() => {
            }}
        >
            <div className="container mx-auto flex items-center justify-between">
                <Typography
                    color="blue-gray"
                    className="text-lg font-bold"
                    placeholder=""
                    onPointerEnterCapture={() => {
                    }}
                    onPointerLeaveCapture={() => {
                    }}
                    onResize={() => {
                    }}
                    onResizeCapture={() => {
                    }}
                >
                    Portfolio
                </Typography>
                <ul className="ml-10 hidden items-center gap-8 lg:flex">
                    {NAV_MENU.map(({name, icon: Icon, href}) => (
                        <NavItem key={name} href={href}>
                            <Icon className="h-5 w-5"/>
                            {name}
                        </NavItem>
                    ))}
                </ul>
                <IconButton
                    variant="text"
                    color="gray"
                    onClick={handleOpen}
                    className="ml-auto inline-block lg:hidden"
                    placeholder=""
                    onPointerEnterCapture={() => {
                    }}
                    onPointerLeaveCapture={() => {
                    }}
                    onResize={() => {
                    }}
                    onResizeCapture={() => {
                    }}
                >
                    {open ? (
                        <XMarkIcon strokeWidth={2} className="h-6 w-6"/>
                    ) : (
                        <Bars3Icon strokeWidth={2} className="h-6 w-6"/>
                    )}
                </IconButton>
            </div>
            <Collapse open={open}>
                <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
                    <ul className="flex flex-col gap-4">
                        {NAV_MENU.map(({name, icon: Icon, href}) => (
                            <NavItem key={name} href={href}>
                                <Icon className="h-5 w-5"/>
                                {name}
                            </NavItem>
                        ))}
                    </ul>
                </div>
            </Collapse>
        </MTNavbar>
    );
}

export default Navbar;