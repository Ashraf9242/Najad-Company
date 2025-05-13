"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { MenuIcon } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const routes = [
  {
    name: "الرئيسية",
    path: "/",
    icon: "fas fa-home",
  },
  {
    name: "الأفكار",
    path: "/innovation",
    icon: "fas fa-brain",
  },
  {
    name: "المكتبة",
    path: "/library",
    icon: "fas fa-book",
  },
  {
    name: "تواصل معنا",
    path: "/contact",
    icon: "fas fa-envelope",
  },
  {
    name: "عن المنصة",
    path: "/about",
    icon: "fas fa-info-circle",
  },
]

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-najd-blue shadow-sm">
      <div className="container flex h-16 items-center">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden text-white">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">فتح القائمة</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="pr-0">
            <div className="px-7">
              <Link
                href="/"
                className="flex items-center gap-2 text-2xl font-bold text-najd-blue"
                onClick={() => setIsOpen(false)}
              >
                <Image src="/images/NajdLogo.png" alt="منصة نَجِدْ" width={40} height={40} className="h-10 w-auto" />
                <span>منصة نَجِدْ</span>
              </Link>
            </div>
            <nav className="mt-8 flex flex-col gap-4 px-7">
              {routes.map((route) => (
                <Link
                  key={route.path}
                  href={route.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center gap-2 text-lg font-medium transition-colors hover:text-najd-yellow",
                    pathname === route.path ? "text-najd-yellow" : "text-najd-blue",
                  )}
                >
                  <i className={route.icon}></i>
                  {route.name}
                </Link>
              ))}
              <div className="mt-4 flex flex-col gap-2">
                <Button asChild variant="outline" className="w-full">
                  <Link href="/login" onClick={() => setIsOpen(false)}>
                    تسجيل الدخول
                  </Link>
                </Button>
                <Button asChild className="w-full bg-najd-yellow hover:bg-najd-yellow/90 text-najd-blue">
                  <Link href="/register" onClick={() => setIsOpen(false)}>
                    إنشاء حساب
                  </Link>
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
        <Link href="/" className="flex items-center gap-2 mr-4 lg:mr-0">
          <Image src="/images/NajdLogo.png" alt="منصة نَجِدْ" width={40} height={40} className="h-10 w-auto" />
          <span className="text-xl font-bold text-white">منصة نَجِدْ</span>
        </Link>
        <nav className="mx-6 hidden items-center space-x-4 lg:flex lg:space-x-6 mr-auto">
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className={cn(
                "flex items-center gap-2 text-sm font-medium transition-colors hover:text-najd-yellow",
                pathname === route.path ? "text-najd-yellow" : "text-white",
              )}
            >
              <i className={route.icon}></i>
              {route.name}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-4 mr-auto">
          <Button asChild variant="ghost" className="text-white hover:text-white hover:bg-najd-blue/80">
            <Link href="/login">تسجيل الدخول</Link>
          </Button>
          <Button asChild className="bg-najd-yellow hover:bg-najd-yellow/90 text-najd-blue">
            <Link href="/register">إنشاء حساب</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
