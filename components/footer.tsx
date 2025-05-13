import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="w-full border-t bg-najd-blue text-white py-8">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/NajdLogo.png" alt="منصة نَجِدْ" width={40} height={40} className="h-10 w-auto" />
            <span className="text-xl font-bold">منصة نَجِدْ</span>
          </Link>
          <p className="text-sm text-gray-300">
            منصة تجمع المبتكرين والمستثمرين والخبراء في مكان واحد. احمِ فكرتك، طورها، واحصل على التمويل المناسب.
          </p>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-semibold">روابط سريعة</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-najd-yellow transition-colors">
                الرئيسية
              </Link>
            </li>
            <li>
              <Link href="/innovation" className="hover:text-najd-yellow transition-colors">
                الأفكار
              </Link>
            </li>
            <li>
              <Link href="/library" className="hover:text-najd-yellow transition-colors">
                المكتبة
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-najd-yellow transition-colors">
                عن المنصة
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-semibold">تواصل معنا</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <i className="fas fa-envelope text-najd-yellow"></i>
              <span>ijaz2024najd@gmail.com</span>
            </li>
            <li className="flex items-center gap-2">
              <i className="fas fa-phone text-najd-yellow"></i>
              <span>+968 9242 1050</span>
            </li>
            <li className="flex items-center gap-2">
              <i className="fas fa-map-marker-alt text-najd-yellow"></i>
              <span>عمان، مسقط</span>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-semibold">تابعنا</h3>
          <div className="flex gap-4">
            <a href="#" className="text-white hover:text-najd-yellow transition-colors">
              <i className="fab fa-twitter text-xl"></i>
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#" className="text-white hover:text-najd-yellow transition-colors">
              <i className="fab fa-instagram text-xl"></i>
              <span className="sr-only">Instagram</span>
            </a>
            <a href="#" className="text-white hover:text-najd-yellow transition-colors">
              <i className="fab fa-linkedin text-xl"></i>
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
      <div className="container mt-8 border-t border-gray-700 pt-4">
        <p className="text-center text-sm text-gray-300">
          &copy; {new Date().getFullYear()} منصة نَجِدْ. جميع الحقوق محفوظة.
        </p>
      </div>
    </footer>
  )
}
