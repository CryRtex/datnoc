"use client"
import * as React from "react"
import { Logo } from "@/components/logo";

import { Button } from "@/components/ui/button";
import Link from "next/link";

import { Icons } from "@/components/ui/icons";
import { cn } from "@/lib/utils"

import { Menu } from 'lucide-react';
import Lınk from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
const components: { title: string; href: string; description: string }[] = [
  {
    title: "Web Hosting",
    href: "/web-hosting",
    description:
      "Fast response rate web hosting plan ",
  },
  {
    title: "AMD VDS Rack ",
    href: "/VDS/AMD",
    description:
      "For fast VDS customer initiliza.",
  },
  {
    title: "Intel VDS Rack",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "For Gamer's",
    href: "/gamerzone",
    description: "Gamer's VDS Rack for Developers and Players.", 
  },
  {
    title: "D-Drive ",
    href: "/drive",
    description:
      "Fast response time virtual disk space in datacenter.",
  },
  {
    title: "F-Drive",
    href: "/fdrive",
    description:
      "Consumer for big data or big file storage server ",
  },
]

export const Navbar = () => {
    return (
      <div className=" fixed top-0 w-full h-14 px-4 border-b shadow-sm bg-white flex items-center">
      <div className=" md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
         <Logo/>
         <div className=" space-x-4 md:block md:w-auto flex items-center justify-between w-full ">
        <div className=" ">
         <NavigationMenu className= "hidden sm:block">
          <NavigationMenuList>
            <NavigationMenuItem >
                <NavigationMenuTrigger>Datacenter</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Icons.logo className="h-6 w-6" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Colocation
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                    DataCenter is preferred primarily among other new generation internet data centersthanks to the unique infrastructure, uptime rate of 99.99%.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/" title="Internet">
                2X20 GbIt Fast Internet Conenction
              </ListItem>
              <ListItem href="/" title="Fıbre Connection">
                Full connector and connection area is fibre
              </ListItem>
              <ListItem href="/" title="Router">
                Rent router for your server
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>VDS/VPS</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" >
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Refer a Friend
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Button size="sm" variant="outline">
                    <Link href="/sign-ın">
                    Sign Up
                    </Link>
                </Button>
        </NavigationMenuItem>
        <NavigationMenuItem>
        <Button size="sm" asChild>
                    <Link href="/sign-ın">
                    Sign In
                    </Link>
                </Button>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
    </div>
    <div className="sm:hidden">

      <div>
      <div>
        <DropdownMenu>
      <DropdownMenuTrigger asChild>
      <Menu></Menu>
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" w-96 xs:w-16 h-full ">
        <DropdownMenuLabel>Datacenter</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Lınk href="/datacenter">
            Internet
            </Lınk>
          </DropdownMenuItem>
          <DropdownMenuItem>
          <Lınk href="/datacenter">
            Fıbre Connection
            </Lınk>
          </DropdownMenuItem>
          <DropdownMenuItem>
          <Lınk href="/datacenter">
             Router
            </Lınk>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator/>
        <DropdownMenuGroup>
        <DropdownMenuLabel>VDS/VPS</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Lınk href="/web-hosting">
            Web Hosting
            </Lınk>
          </DropdownMenuItem>
          <DropdownMenuItem>
          <Lınk href="/VDS/AMD">
            AMD VDS Rack
            </Lınk>
          </DropdownMenuItem>
          <DropdownMenuItem>
          <Lınk href="/VDS/ıntel">
            Intel VDS Rack
            </Lınk>
          </DropdownMenuItem>
          <DropdownMenuItem>
          <Lınk href="/gamerzone">
            For Gamers
            </Lınk>
          </DropdownMenuItem>
          <DropdownMenuItem>
          <Lınk href="/drive">
            D-Drive
            </Lınk>
          </DropdownMenuItem>
          <DropdownMenuItem>
          <Lınk href="/fdrive">
            F-Drive
            </Lınk>
          </DropdownMenuItem>
        </DropdownMenuGroup>
         
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        
        <DropdownMenuSeparator />
        <DropdownMenuItem>
        <Lınk href="/log-in">
            Log-In
            </Lınk>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
      </div>

    </div>
         </div>
      </div>
    </div>
    );
    }

     
const ListItem = React.forwardRef<
React.ElementRef<"a">,
React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
return (
  <li>
    <NavigationMenuLink asChild>
      <a
        ref={ref}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className
        )}
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </a>
    </NavigationMenuLink>
  </li>
)
})
ListItem.displayName = "ListItem"