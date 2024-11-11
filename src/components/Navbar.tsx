import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import logo from "@/public/images/acmdslogo.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <NavigationMenu className="flex flex-row bg-gradient-to-t from-blue-400 to-blue-400 p-4">
      <NavigationMenuList>
        <div className="mr-96 h-1/5 w-1/5 rounded-full bg-gray-300">
          <NavigationMenuItem>
            <Link href="/">
              <Image src={logo} alt="Logo" className="h-12 w-12" />
            </Link>
          </NavigationMenuItem>
        </div>

        <div className="font-sans-serif w-full pl-64 pr-32 text-[vw] text-white">
          <NavigationMenuItem>
            <Link href="/projects">PROJECTS</Link>
          </NavigationMenuItem>
        </div>

        <div className="flex flex-row space-x-12 px-4 pl-48">
          <NavigationMenuItem className="font-sans-serif w-full text-[vw] text-white">
            <Link href="/projects/git">GIT / GITHUB</Link>
          </NavigationMenuItem>

          <NavigationMenuItem className="font-sans-serif w-full text-[vw] text-white">
            <Link href="/projects/nextjs">NEXT.JS</Link>
          </NavigationMenuItem>

          <NavigationMenuItem className="font-sans-serif w-full text-[vw] text-white">
            <Link href="/projects/tailwind">TAILWIND CSS</Link>
          </NavigationMenuItem>
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navbar;
