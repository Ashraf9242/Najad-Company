"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { BrainIcon, UsersIcon, ShieldIcon, GraduationCapIcon, LineChartIcon as ChartLineUpIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

// Fake data for statistics
const statsData = {
  innovators: 1500,
  ideas: 3000,
  investors: 500,
  successProjects: 200,
}

export default function Home() {
  const [animatedStats, setAnimatedStats] = useState({
    innovators: 0,
    ideas: 0,
    investors: 0,
    successProjects: 0,
  })
  const [isVisible, setIsVisible] = useState(false)

  // Animation for statistics
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    const statsSection = document.querySelector("#stats-section")
    if (statsSection) {
      observer.observe(statsSection)
    }

    return () => {
      if (statsSection) {
        observer.unobserve(statsSection)
      }
    }
  }, [])

  // Animate the numbers when visible
  useEffect(() => {
    if (!isVisible) return

    const duration = 2000 // 2 seconds
    const frameDuration = 1000 / 60 // 60fps
    const totalFrames = Math.round(duration / frameDuration)

    let frame = 0
    const counter = setInterval(() => {
      frame++
      const progress = frame / totalFrames

      setAnimatedStats({
        innovators: Math.floor(progress * statsData.innovators),
        ideas: Math.floor(progress * statsData.ideas),
        investors: Math.floor(progress * statsData.investors),
        successProjects: Math.floor(progress * statsData.successProjects),
      })

      if (frame === totalFrames) {
        clearInterval(counter)
      }
    }, frameDuration)

    return () => clearInterval(counter)
  }, [isVisible])

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden animated-bg py-20 text-white">
          <div className="absolute inset-0 bg-grid-white/5 bg-fixed opacity-20"></div>
          <div className="container relative z-10 mx-auto px-4 py-12 text-center md:py-24">
            <div className="animate-float mb-6 inline-block">
              <Image src="/images/NajdLogo.png" alt="منصة نَجِدْ" width={80} height={80} className="h-20 w-auto" />
            </div>
            <h1 className="animate-slide-up mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              اكتشف عالم الابتكار
            </h1>
            <p className="animate-slide-up mx-auto mb-8 max-w-2xl text-lg text-gray-200 md:text-xl">
              منصة تجمع المبتكرين والمستثمرين والخبراء في مكان واحد. احمِ فكرتك، طورها، واحصل على التمويل المناسب.
            </p>
            <div className="animate-fade-in flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="hover-glow bg-najd-yellow hover:bg-najd-yellow/90 text-najd-blue font-bold"
              >
                <Link href="/login">
                  <i className="fas fa-rocket ml-2"></i>
                  ابدأ الآن
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="hover-lift border-white text-white hover:bg-white/10"
              >
                <Link href="/about">تعرف علينا</Link>
              </Button>
            </div>
            <div className="mt-16 animate-pulse-slow">
              <Image
                src="/images/hero-innovation.png"
                width={800}
                height={400}
                alt="منصة نجد"
                className="mx-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container">
            <div className="mb-16 text-center">
              <span className="animate-fade-in mb-2 inline-block rounded-full bg-najd-blue/10 px-4 py-1 text-sm font-medium text-najd-blue">
                مميزات المنصة
              </span>
              <h2 className="animate-slide-up mb-4 text-3xl font-bold text-najd-gray md:text-4xl">
                كل ما تحتاجه لتحويل فكرتك إلى واقع
              </h2>
              <p className="animate-slide-up mx-auto max-w-2xl text-muted-foreground">
                نوفر لك بيئة متكاملة تدعم رحلتك من الفكرة إلى المشروع الناجح، مع حماية حقوقك الفكرية وربطك بالخبراء
                والمستثمرين.
              </p>
            </div>

            <div className="stagger-children grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="hover-lift group rounded-lg border bg-card p-6 shadow-sm transition-all">
                <div className="mb-4 rounded-full bg-najd-blue/10 p-3 w-fit">
                  <ShieldIcon className="h-6 w-6 text-najd-blue" />
                </div>
                <h3 className="mb-2 text-xl font-bold">حماية الملكية الفكرية</h3>
                <p className="text-muted-foreground">
                  نضمن حماية أفكارك وابتكاراتك من خلال نظام حماية متكامل يحفظ حقوقك.
                </p>
              </div>

              <div className="hover-lift group rounded-lg border bg-card p-6 shadow-sm transition-all">
                <div className="mb-4 rounded-full bg-najd-blue/10 p-3 w-fit">
                  <UsersIcon className="h-6 w-6 text-najd-blue" />
                </div>
                <h3 className="mb-2 text-xl font-bold">تواصل مع الخبراء</h3>
                <p className="text-muted-foreground">احصل على توجيه واستشارات من خبراء في مجال تخصصك لتطوير فكرتك.</p>
              </div>

              <div className="hover-lift group rounded-lg border bg-card p-6 shadow-sm transition-all">
                <div className="mb-4 rounded-full bg-najd-blue/10 p-3 w-fit">
                  <ChartLineUpIcon className="h-6 w-6 text-najd-blue" />
                </div>
                <h3 className="mb-2 text-xl font-bold">فرص استثمارية</h3>
                <p className="text-muted-foreground">
                  اعرض فكرتك على مستثمرين مهتمين بدعم المشاريع المبتكرة وتحويلها إلى واقع.
                </p>
              </div>

              <div className="hover-lift group rounded-lg border bg-card p-6 shadow-sm transition-all">
                <div className="mb-4 rounded-full bg-najd-blue/10 p-3 w-fit">
                  <GraduationCapIcon className="h-6 w-6 text-najd-blue" />
                </div>
                <h3 className="mb-2 text-xl font-bold">مكتبة تعليمية</h3>
                <p className="text-muted-foreground">
                  استفد من محتوى تعليمي متنوع لتطوير مهاراتك ومعرفتك في مجال ريادة الأعمال.
                </p>
              </div>

              <div className="hover-lift group rounded-lg border bg-card p-6 shadow-sm transition-all">
                <div className="mb-4 rounded-full bg-najd-blue/10 p-3 w-fit">
                  <BrainIcon className="h-6 w-6 text-najd-blue" />
                </div>
                <h3 className="mb-2 text-xl font-bold">تطوير الأفكار</h3>
                <p className="text-muted-foreground">استفد من أدوات وموارد متخصصة لتطوير فكرتك وتحسينها بشكل مستمر.</p>
              </div>

              <div className="hover-lift group rounded-lg border bg-card p-6 shadow-sm transition-all">
                <div className="mb-4 rounded-full bg-najd-blue/10 p-3 w-fit">
                  <UsersIcon className="h-6 w-6 text-najd-blue" />
                </div>
                <h3 className="mb-2 text-xl font-bold">بناء فريق العمل</h3>
                <p className="text-muted-foreground">
                  تواصل مع أصحاب المهارات والخبرات لبناء فريق متكامل يساعدك في تنفيذ مشروعك.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section id="stats-section" className="animated-bg py-20 text-white">
          <div className="container">
            <h2 className="animate-slide-up mb-16 text-center text-3xl font-bold md:text-4xl">إحصائيات المنصة</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="hover-scale rounded-lg bg-white/10 p-6 text-center">
                <div className="mb-4 text-4xl font-bold text-najd-yellow" id="innovatorsCount">
                  {animatedStats.innovators}+
                </div>
                <p className="text-lg">مبتكر</p>
              </div>
              <div className="hover-scale rounded-lg bg-white/10 p-6 text-center">
                <div className="mb-4 text-4xl font-bold text-najd-yellow" id="ideasCount">
                  {animatedStats.ideas}+
                </div>
                <p className="text-lg">فكرة مبتكرة</p>
              </div>
              <div className="hover-scale rounded-lg bg-white/10 p-6 text-center">
                <div className="mb-4 text-4xl font-bold text-najd-yellow" id="investorsCount">
                  {animatedStats.investors}+
                </div>
                <p className="text-lg">مستثمر</p>
              </div>
              <div className="hover-scale rounded-lg bg-white/10 p-6 text-center">
                <div className="mb-4 text-4xl font-bold text-najd-yellow" id="successCount">
                  {animatedStats.successProjects}+
                </div>
                <p className="text-lg">مشروع ناجح</p>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Ideas Section */}
        <section className="py-20">
          <div className="container">
            <div className="mb-12 text-center">
              <span className="animate-fade-in mb-2 inline-block rounded-full bg-najd-blue/10 px-4 py-1 text-sm font-medium text-najd-blue">
                أحدث الأفكار
              </span>
              <h2 className="animate-slide-up mb-4 text-3xl font-bold text-najd-gray md:text-4xl">
                أفكار مبتكرة حديثة
              </h2>
              <p className="animate-slide-up mx-auto max-w-2xl text-muted-foreground">
                تعرف على أحدث الأفكار المبتكرة التي تم إضافتها إلى المنصة وكن جزءًا من تطويرها
              </p>
            </div>

            <div className="stagger-children grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="hover-lift group overflow-hidden rounded-lg border bg-card shadow-sm transition-all">
                <div className="aspect-video overflow-hidden bg-muted">
                  <Image
                    src="/images/idea-water-management.png"
                    width={300}
                    height={200}
                    alt="نظام ذكي لإدارة المياه"
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="inline-block rounded-full bg-najd-blue/10 px-3 py-1 text-sm font-medium text-najd-blue">
                      تقنية
                    </span>
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                      مميز
                    </span>
                  </div>
                  <h3 className="mb-2 text-xl font-bold">نظام ذكي لإدارة المياه</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    نظام مبتكر يستخدم الذكاء الاصطناعي لترشيد استهلاك المياه في المباني السكنية والتجارية.
                  </p>
                  <div className="flex items-center justify-between border-t pt-4">
                    <span className="flex items-center text-sm text-muted-foreground">
                      <i className="fas fa-user mr-2"></i>
                      محمد أشرف
                    </span>
                    <Button asChild size="sm" className="bg-najd-blue hover:bg-najd-blue/90">
                      <Link href="/innovation/1">عرض التفاصيل</Link>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="hover-lift group overflow-hidden rounded-lg border bg-card shadow-sm transition-all">
                <div className="aspect-video overflow-hidden bg-muted">
                  <Image
                    src="/images/idea-health-app.png"
                    width={300}
                    height={200}
                    alt="تطبيق متابعة الحالة الصحية"
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="inline-block rounded-full bg-najd-blue/10 px-3 py-1 text-sm font-medium text-najd-blue">
                      صحة
                    </span>
                    <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                      جديد
                    </span>
                  </div>
                  <h3 className="mb-2 text-xl font-bold">تطبيق متابعة الحالة الصحية</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    تطبيق ذكي يساعد المرضى على متابعة حالتهم الصحية وتذكيرهم بمواعيد الأدوية والفحوصات الدورية.
                  </p>
                  <div className="flex items-center justify-between border-t pt-4">
                    <span className="flex items-center text-sm text-muted-foreground">
                      <i className="fas fa-user mr-2"></i>
                      سارة يعقوب
                    </span>
                    <Button asChild size="sm" className="bg-najd-blue hover:bg-najd-blue/90">
                      <Link href="/innovation/2">عرض التفاصيل</Link>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="hover-lift group overflow-hidden rounded-lg border bg-card shadow-sm transition-all">
                <div className="aspect-video overflow-hidden bg-muted">
                  <Image
                    src="/images/idea-education.png"
                    width={300}
                    height={200}
                    alt="منصة التعلم التفاعلي"
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="inline-block rounded-full bg-najd-blue/10 px-3 py-1 text-sm font-medium text-najd-blue">
                      تعليم
                    </span>
                    <span className="inline-flex items-center rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-800">
                      قيد التطوير
                    </span>
                  </div>
                  <h3 className="mb-2 text-xl font-bold">منصة التعلم التفاعلي</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    منصة تعليمية تفاعلية تستخدم الواقع المعزز لتحسين تجربة التعلم للطلاب في المراحل المختلفة.
                  </p>
                  <div className="flex items-center justify-between border-t pt-4">
                    <span className="flex items-center text-sm text-muted-foreground">
                      <i className="fas fa-user mr-2"></i>
                      عائشة سيف
                    </span>
                    <Button asChild size="sm" className="bg-najd-blue hover:bg-najd-blue/90">
                      <Link href="/innovation/3">عرض التفاصيل</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 text-center">
              <Button asChild className="hover-glow bg-najd-blue hover:bg-najd-blue/90">
                <Link href="/innovation">عرض جميع الأفكار</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container">
            <div className="animate-fade-in rounded-2xl animated-bg p-8 text-white md:p-12 lg:p-16">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="animate-slide-up mb-6 text-3xl font-bold md:text-4xl">انضم إلى مجتمع المبتكرين اليوم</h2>
                <p className="animate-slide-up mb-8 text-lg text-gray-200">
                  سجل الآن واستفد من جميع مميزات المنصة. احمِ أفكارك، تواصل مع الخبراء، واحصل على فرص استثمارية.
                </p>
                <div className="animate-fade-in flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Button
                    asChild
                    size="lg"
                    className="hover-glow bg-najd-yellow hover:bg-najd-yellow/90 text-najd-blue font-bold"
                  >
                    <Link href="/register">إنشاء حساب</Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="hover-lift border-white text-white hover:bg-white/10"
                  >
                    <Link href="/login">تسجيل الدخول</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <div className="mb-12 text-center">
              <span className="animate-fade-in mb-2 inline-block rounded-full bg-najd-blue/10 px-4 py-1 text-sm font-medium text-najd-blue">
                آراء المستخدمين
              </span>
              <h2 className="animate-slide-up mb-4 text-3xl font-bold text-najd-gray md:text-4xl">
                ماذا يقول مستخدمو المنصة
              </h2>
              <p className="animate-slide-up mx-auto max-w-2xl text-muted-foreground">
                تعرف على تجارب المبتكرين والمستثمرين الذين استفادوا من منصة نَجِدْ
              </p>
            </div>

            <div className="stagger-children grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="hover-lift rounded-lg bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-4">
                  <div className="h-12 w-12 overflow-hidden rounded-full bg-najd-blue/10">
                    <Image
                      src="/images/profile-1.png"
                      width={50}
                      height={50}
                      alt="صورة المستخدم"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold">أحمد محمد</h3>
                    <p className="text-sm text-muted-foreground">مبتكر</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "ساعدتني منصة نَجِدْ في تطوير فكرتي وحمايتها، وتمكنت من الحصول على تمويل من مستثمر مهتم. أنصح بشدة كل من
                  لديه فكرة مبتكرة بالانضمام إلى المنصة."
                </p>
                <div className="mt-4 flex text-najd-yellow">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>

              <div className="hover-lift rounded-lg bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-4">
                  <div className="h-12 w-12 overflow-hidden rounded-full bg-najd-blue/10">
                    <Image
                      src="/images/profile-2.png"
                      width={50}
                      height={50}
                      alt="صورة المستخدم"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold">سارة علي</h3>
                    <p className="text-sm text-muted-foreground">مستثمرة</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "كمستثمرة، وجدت في منصة نَجِدْ العديد من الأفكار المبتكرة والواعدة. المنصة سهلت علي التواصل مع المبتكرين
                  واختيار المشاريع المناسبة للاستثمار."
                </p>
                <div className="mt-4 flex text-najd-yellow">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>

                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>

              <div className="hover-lift rounded-lg bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-4">
                  <div className="h-12 w-12 overflow-hidden rounded-full bg-najd-blue/10">
                    <Image
                      src="/images/profile-3.png"
                      width={50}
                      height={50}
                      alt="صورة المستخدم"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold">خالد عبدالله</h3>
                    <p className="text-sm text-muted-foreground">خبير تقني</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "أقدم استشاراتي للمبتكرين عبر منصة نَجِدْ، وأجد أن المنصة توفر بيئة مثالية للتعاون وتبادل الخبرات.
                  المكتبة التعليمية مفيدة جداً وتساعد المبتكرين على تطوير مهاراتهم."
                </p>
                <div className="mt-4 flex text-najd-yellow">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
