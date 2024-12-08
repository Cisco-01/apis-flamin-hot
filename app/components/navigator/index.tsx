"use client";

/*import { useState } from "react";
import Link from "next/link";*/

//import { useMediaQuery } from "@custom-react-hooks/use-media-query";
import {
  Breadcrumb,
  //BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../../@/components/ui/breadcrumb";
/*import { Button } from "../../../@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../../../@/components/ui/drawer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../../@/components/ui/dropdown-menu";*/
import { Home } from "lucide-react";

const items = [
  { href: "/", label: "Home" },
  { href: "#", label: "Documentation" },
  { href: "#", label: "Building Your Application" },
  { href: "#", label: "Data Fetching" },
  { label: "Caching and Revalidating" },
];

//const ITEMS_TO_DISPLAY = 3;

export function Navigator() {
  //const [open, setOpen] = useState(false);
  //const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <Breadcrumb className="mt-2">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href={items[0].href}>
            <span className="hover:text-gray-300 transition-all ease-in-out flex items-center">
              <Home className="h-5 w-5" />
            </span>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>
            <div className="flex tracking-widest">
              <p className="text-white">POKE</p>
              <p className="text-red-500">API</p>
            </div>
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
