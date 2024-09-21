import { NavLink } from "@remix-run/react";

export default function NavButton({ href, label }: { href: string, label: string }) {
    return (
        <NavLink to={href} className={({ isActive, isPending }) =>
            isActive
                ? "block py-1 px-4 mb-2 text-xs bg-blue-500 text-white rounded"
                : isPending
                    ? "block py-1 px-4 mb-2 text-xs bg-blue-100 rounded"
                    : "block py-1 px-4 mb-2 text-xs border rounded"
        }>
            {label}
        </NavLink>
    )
}
