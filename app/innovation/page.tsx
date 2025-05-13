"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { api, type Idea } from "@/lib/api"

export default function InnovationPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [field, setField] = useState("all")
  const [category, setCategory] = useState("all")
  const [stage, setStage] = useState("all")
  const [activePage, setActivePage] = useState(1)
  const [ideas, setIdeas] = useState<Idea[]>([])
  const [filteredIdeas, setFilteredIdeas] = useState<Idea[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState("")

  // Fetch ideas on component mount
  useEffect(() => {
    const fetchIdeas = async () => {
      try {
        setIsLoading(true)
        const data = await api.getIdeas()
        setIdeas(data)
        setFilteredIdeas(data)
      } catch (err) {
        setError("حدث خطأ أثناء تحميل الأفكار. يرجى المحاولة مرة أخرى.")
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchIdeas()
  }, [])

  // Filter ideas when search term or filters change
  useEffect(() => {
    const applyFilters = async () => {
      try {
        setIsLoading(true)
        const data = await api.getIdeas({
          category: field !== "all" ? field : undefined,
          badge: category !== "all" ? category : undefined,
          stage: stage !== "all" ? stage : undefined,
          search: searchTerm,
        })
        setFilteredIdeas(data)
      } catch (err) {
        setError("حدث خطأ أثناء تطبيق الفلاتر. يرجى المحاولة مرة أخرى.")
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }

    // Add a small delay to avoid too many API calls while typing
    const handler = setTimeout(() => {
      applyFilters()
    }, 300)

    return () => {
      clearTimeout(handler)
    }
  }, [searchTerm, field, category, stage])

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="animated-bg py-20 text-white">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="animate-slide-up mb-6 text-4xl font-bold md:text-5xl">معرض الأفكار الإبداعية</h1>
              <p className="animate-slide-up mb-8 text-lg text-gray-200">
                اكتشف أحدث الأفكار المبتكرة وشارك في تطوير المستقبل
              </p>
            </div>
          </div>
        </section>

        <section className="py-10">
          <div className="container">
            <div className="animate-fade-in rounded-lg border bg-card p-6 shadow-sm">
              <div className="mb-6">
                <Input
                  type="search"
                  placeholder="ابحث عن فكرة..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="max-w-full"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                <Select value={field} onValueChange={setField}>
                  <SelectTrigger>
                    <SelectValue placeholder="المجال" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">الكل</SelectItem>
                    <SelectItem value="تقنية">تقنية</SelectItem>
                    <SelectItem value="صحة">صحة</SelectItem>
                    <SelectItem value="تعليم">تعليم</SelectItem>
                    <SelectItem value="بيئة">بيئة</SelectItem>
                    <SelectItem value="اجتماعي">اجتماعي</SelectItem>
                    <SelectItem value="أعمال">أعمال</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="التصنيف" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">الكل</SelectItem>
                    <SelectItem value="مميز">مميز</SelectItem>
                    <SelectItem value="جديد">جديد</SelectItem>
                    <SelectItem value="قيد التطوير">قيد التطوير</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={stage} onValueChange={setStage}>
                  <SelectTrigger>
                    <SelectValue placeholder="مرحلة التطوير" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">الكل</SelectItem>
                    <SelectItem value="concept">فكرة مبدئية</SelectItem>
                    <SelectItem value="prototype">نموذج أولي</SelectItem>
                    <SelectItem value="development">قيد التطوير</SelectItem>
                    <SelectItem value="testing">في مرحلة الاختبار</SelectItem>
                    <SelectItem value="launched">تم الإطلاق</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10">
          <div className="container">
            {isLoading ? (
              // Loading skeleton
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="rounded-lg border bg-card shadow-sm overflow-hidden">
                    <Skeleton className="h-48 w-full" />
                    <div className="p-6">
                      <div className="mb-3 flex items-center justify-between">
                        <Skeleton className="h-6 w-24" />
                        <Skeleton className="h-6 w-16" />
                      </div>
                      <Skeleton className="h-8 w-3/4 mb-2" />
                      <Skeleton className="h-4 w-full mb-1" />
                      <Skeleton className="h-4 w-full mb-1" />
                      <Skeleton className="h-4 w-2/3 mb-4" />
                      <div className="flex items-center justify-between border-t pt-4">
                        <Skeleton className="h-4 w-24" />
                        <Skeleton className="h-9 w-28" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : error ? (
              // Error message
              <div className="text-center py-10">
                <p className="text-red-500 mb-4">{error}</p>
                <Button onClick={() => window.location.reload()} className="bg-najd-blue hover:bg-najd-blue/90">
                  إعادة المحاولة
                </Button>
              </div>
            ) : filteredIdeas.length === 0 ? (
              // No results
              <div className="text-center py-10">
                <p className="text-lg mb-4">لا توجد أفكار تطابق معايير البحث</p>
                <Button
                  onClick={() => {
                    setSearchTerm("")
                    setField("all")
                    setCategory("all")
                    setStage("all")
                  }}
                  className="bg-najd-blue hover:bg-najd-blue/90"
                >
                  إعادة ضبط الفلاتر
                </Button>
              </div>
            ) : (
              // Ideas grid
              <div className="stagger-children grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredIdeas.map((idea) => (
                  <div
                    key={idea.id}
                    className="hover-lift group overflow-hidden rounded-lg border bg-card shadow-sm transition-all"
                  >
                    <div className="aspect-video overflow-hidden bg-muted">
                      <Image
                        src={idea.image || "/placeholder.svg"}
                        width={300}
                        height={200}
                        alt={idea.title}
                        className="h-full w-full object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="mb-3 flex items-center justify-between">
                        <span className="inline-block rounded-full bg-najd-blue/10 px-3 py-1 text-sm font-medium text-najd-blue">
                          {idea.category}
                        </span>
                        <Badge
                          className={
                            idea.badgeColor === "featured"
                              ? "bg-green-500 hover:bg-green-600"
                              : idea.badgeColor === "new"
                                ? "bg-najd-blue hover:bg-najd-blue/90"
                                : "bg-amber-500 hover:bg-amber-600"
                          }
                        >
                          {idea.badge}
                        </Badge>
                      </div>
                      <h3 className="mb-2 text-xl font-bold">{idea.title}</h3>
                      <p className="mb-4 text-sm text-muted-foreground line-clamp-3">{idea.description}</p>
                      <div className="flex items-center justify-between border-t pt-4">
                        <span className="flex items-center text-sm text-muted-foreground">
                          <i className="fas fa-user mr-2"></i>
                          {idea.author}
                        </span>
                        <Button asChild size="sm" className="bg-najd-blue hover:bg-najd-blue/90">
                          <Link href={`/innovation/${idea.id}`}>عرض التفاصيل</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Pagination */}
            {!isLoading && !error && filteredIdeas.length > 0 && (
              <div className="mt-10 flex justify-center">
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setActivePage(Math.max(1, activePage - 1))}
                    disabled={activePage === 1}
                    className="hover-lift"
                  >
                    <i className="fas fa-chevron-right"></i>
                  </Button>
                  {[1, 2, 3, 4].map((page) => (
                    <Button
                      key={page}
                      variant={activePage === page ? "default" : "outline"}
                      className={activePage === page ? "bg-najd-blue hover:bg-najd-blue/90" : "hover-lift"}
                      onClick={() => setActivePage(page)}
                    >
                      {page}
                    </Button>
                  ))}
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setActivePage(Math.min(4, activePage + 1))}
                    disabled={activePage === 4}
                    className="hover-lift"
                  >
                    <i className="fas fa-chevron-left"></i>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="animated-bg py-20 text-white">
          <div className="container">
            <h2 className="animate-slide-up mb-12 text-center text-3xl font-bold md:text-4xl">إحصائيات المنصة</h2>
            <div className="stagger-children grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="hover-scale rounded-lg bg-white/10 p-6 text-center">
                <div className="mb-2 text-4xl font-bold text-najd-yellow">150+</div>
                <p className="text-lg">فكرة مبتكرة</p>
              </div>
              <div className="hover-scale rounded-lg bg-white/10 p-6 text-center">
                <div className="mb-2 text-4xl font-bold text-najd-yellow">1000+</div>
                <p className="text-lg">مستخدم نشط</p>
              </div>
              <div className="hover-scale rounded-lg bg-white/10 p-6 text-center">
                <div className="mb-2 text-4xl font-bold text-najd-yellow">50+</div>
                <p className="text-lg">مشروع ناجح</p>
              </div>
              <div className="hover-scale rounded-lg bg-white/10 p-6 text-center">
                <div className="mb-2 text-4xl font-bold text-najd-yellow">25+</div>
                <p className="text-lg">شريك استثماري</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container">
            <div className="animate-fade-in rounded-2xl animated-bg p-8 text-white md:p-12 lg:p-16">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="animate-slide-up mb-6 text-3xl font-bold md:text-4xl">هل لديك فكرة مبتكرة؟</h2>
                <p className="animate-slide-up mb-8 text-lg text-gray-200">
                  شارك فكرتك مع مجتمع المبتكرين والمستثمرين واحصل على الدعم والتمويل اللازم لتحويلها إلى مشروع ناجح.
                </p>
                <div className="animate-fade-in flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Button
                    asChild
                    size="lg"
                    className="hover-glow bg-najd-yellow hover:bg-najd-yellow/90 text-najd-blue font-bold"
                  >
                    <Link href="/add-idea">إضافة فكرة جديدة</Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="hover-lift border-white text-white hover:bg-white/10"
                  >
                    <Link href="/tutorial">كيفية إضافة فكرة</Link>
                  </Button>
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
