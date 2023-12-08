import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";
import { ThemeSwitch } from "@/components/theme-switch";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Navbar = () => {
  return (
    <div className="flex justify-center">
      <NextUINavbar
        maxWidth="xl"
        position="sticky"
        className="bg-gray-400 rounded w-8/12 m-4 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10"
      >
        <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
          <NavbarBrand as="li" className="gap-3 max-w-fit">
            <NextLink
              className="flex justify-start items-center gap-1"
              href="/"
            >
              <p className="font-bold text-inherit">Portfolio</p>
            </NextLink>
          </NavbarBrand>
          <ul className="hidden lg:flex gap-4 justify-start ml-2">
            {siteConfig.navItems.map((item) => (
              <NavbarItem key={item.href}>
                <NextLink
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "data-[active=true]:text-primary data-[active=true]:font-medium"
                  )}
                  color="foreground"
                  href={item.href}
                >
                  {item.label}
                </NextLink>
              </NavbarItem>
            ))}
          </ul>
        </NavbarContent>

        <NavbarContent
          className="flex basis-1/5 sm:basis-full"
          justify="end"
        >
          <NavbarItem className="flex gap-2">
            <Link
              isExternal
              href={siteConfig.links.linkedin}
              aria-label="Linkedin"
            >
              <FaLinkedin size={24} className="text-default-500" />
            </Link>
            <Link isExternal href={siteConfig.links.github} aria-label="Github">
              <FaGithub size={24} className="text-default-500" />
            </Link>
            <ThemeSwitch />
          </NavbarItem>
        </NavbarContent>
      </NextUINavbar>
    </div>
  );
};
