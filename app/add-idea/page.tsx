"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import type React from "react"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertCircleIcon, CheckCircleIcon, FileTextIcon, Loader2, ShieldIcon } from "lucide-react"
import { api } from "@/lib/api"

export default function AddIdeaPage() {
  const router = useRouter()
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const [patentRequest, setPatentRequest] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!title.trim()) {
      setError("عنوان الفكرة مطلوب")
      return
    }

    if (!description.trim()) {
      setError("وصف الفكرة مطلوب")
      return
    }

    if (!category) {
      setError("يرجى اختيار مجال الفكرة")
      return
    }

    if (!patentRequest) {
      setError("يرجى تحديد ما إذا كنت ترغب في حماية الملكية الفكرية")
      return
    }

    try {
      setIsSubmitting(true)
      await api.addIdea({
        title,
        description,
        category,
        patentRequest: patentRequest === "نعم",
      })
      setSubmitted(true)

      // Scroll to top to show success message
      window.scrollTo({ top: 0, behavior: "smooth" })
    } catch (err) {
      setError(err instanceof Error ? err.message : "حدث خطأ أثناء إرسال الفكرة. يرجى المحاولة مرة أخرى.")
      console.error(err)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="animated-bg py-20 text-white">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="animate-slide-up mb-6 text-4xl font-bold md:text-5xl">إضافة فكرة جديدة</h1>
              <p className="animate-slide-up mb-8 text-lg text-gray-200">
                شارك فكرتك المبتكرة مع مجتمع المبتكرين والمستثمرين واحصل على الدعم والتمويل اللازم لتحويلها إلى مشروع
                ناجح.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-3">
              <div className="lg:col-span-2">
                {submitted ? (
                  <Card className="animate-scale border-green-200 bg-green-50">
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <CheckCircleIcon className="h-6 w-6 text-green-600" />
                        <CardTitle className="text-green-700">تم إرسال فكرتك بنجاح!</CardTitle>
                      </div>
                      <CardDescription className="text-green-600">
                        شكراً لمشاركة فكرتك معنا. سيقوم فريقنا بمراجعتها والتواصل معك قريباً.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="rounded-lg bg-white p-6">
                        <h3 className="mb-4 text-lg font-bold text-najd-blue">ماذا بعد؟</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-xs text-green-600">
                              1
                            </span>
                            <span>سيقوم فريقنا بمراجعة فكرتك خلال 48 ساعة.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-xs text-green-600">
                              2
                            </span>
                            <span>إذا كنت قد طلبت حماية الملكية الفكرية، سنتواصل معك لاستكمال الإجراءات.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-xs text-green-600">
                              3
                            </span>
                            <span>بعد الموافقة، ستظهر فكرتك في معرض الأفكار وستكون متاحة للخبراء والمستثمرين.</span>
                          </li>
                        </ul>
                      </div>
                      <div className="mt-6 flex gap-4">
                        <Button
                          onClick={() => setSubmitted(false)}
                          className="w-full bg-najd-blue hover:bg-najd-blue/90"
                        >
                          إضافة فكرة أخرى
                        </Button>
                        <Button onClick={() => router.push("/innovation")} variant="outline" className="w-full">
                          استعراض الأفكار
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <Card className="animate-fade-in">
                      <CardHeader>
                        <CardTitle>معلومات الفكرة</CardTitle>
                        <CardDescription>
                          أدخل المعلومات الأساسية عن فكرتك. كلما كانت المعلومات دقيقة ومفصلة، زادت فرص جذب اهتمام
                          المستثمرين والخبراء.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="space-y-2">
                          <Label htmlFor="idea-title">عنوان الفكرة</Label>
                          <Input
                            id="idea-title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="أدخل عنواناً واضحاً ومختصراً لفكرتك"
                            className="animate-fade-in"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="idea-description">نموذج تقديم الفكرة</Label>
                          <Textarea
                            id="idea-description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="اشرح فكرتك بالتفصيل، مع توضيح المشكلة التي تحلها والفئة المستهدفة والميزات التنافسية"
                            className="min-h-32 resize-none animate-fade-in"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="idea-category">تحديد المجال</Label>
                          <Select value={category} onValueChange={setCategory} required>
                            <SelectTrigger id="idea-category" className="animate-fade-in">
                              <SelectValue placeholder="اختر المجال" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="التقنية">التقنية</SelectItem>
                              <SelectItem value="الصحة">الصحة</SelectItem>
                              <SelectItem value="الطاقة">الطاقة</SelectItem>
                              <SelectItem value="التعليم">التعليم</SelectItem>
                              <SelectItem value="البيئة">البيئة</SelectItem>
                              <SelectItem value="الزراعة">الزراعة</SelectItem>
                              <SelectItem value="النقل">النقل</SelectItem>
                              <SelectItem value="الخدمات">الخدمات</SelectItem>
                              <SelectItem value="أخرى">أخرى</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="idea-documents">رفع المستندات</Label>
                          <div className="animate-fade-in rounded-lg border border-dashed p-6 text-center">
                            <FileTextIcon className="mx-auto mb-2 h-8 w-8 text-muted-foreground" />
                            <p className="mb-2 text-sm text-muted-foreground">
                              اسحب وأفلت الملفات هنا أو انقر لاختيار الملفات
                            </p>
                            <p className="text-xs text-muted-foreground">
                              يمكنك رفع ملفات PDF، Word، PowerPoint، صور، أو أي مستندات داعمة لفكرتك (الحد الأقصى: 10
                              ميجابايت)
                            </p>
                            <Input id="idea-documents" type="file" className="mt-4 cursor-pointer" multiple />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="patent-request">طلب حماية الملكية الفكرية</Label>
                          <Select value={patentRequest} onValueChange={setPatentRequest} required>
                            <SelectTrigger id="patent-request" className="animate-fade-in">
                              <SelectValue placeholder="اختر الخيار" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="نعم">نعم</SelectItem>
                              <SelectItem value="لا">لا</SelectItem>
                            </SelectContent>
                          </Select>
                          <p className="mt-1 text-xs text-muted-foreground">
                            اختر "نعم" إذا كنت ترغب في حماية فكرتك قانونياً. سيتواصل معك فريقنا لاستكمال الإجراءات (قد
                            تتطلب رسوماً إضافية).
                          </p>
                        </div>

                        {error && (
                          <div className="rounded-md bg-red-50 p-4 text-sm text-red-600">
                            <div className="flex items-center">
                              <AlertCircleIcon className="mr-2 h-4 w-4" />
                              <span>{error}</span>
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                    <Button
                      type="submit"
                      className="w-full bg-najd-blue hover:bg-najd-blue/90 hover-glow"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          جاري إرسال الفكرة...
                        </>
                      ) : (
                        "إرسال الفكرة"
                      )}
                    </Button>
                  </form>
                )}
              </div>
              <div>
                <div className="space-y-6">
                  <Card className="animate-fade-in">
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <AlertCircleIcon className="h-5 w-5 text-najd-blue" />
                        <CardTitle>إرشادات مهمة</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-najd-blue/10 text-xs text-najd-blue">
                            1
                          </span>
                          <span>قدم وصفاً واضحاً ومفصلاً لفكرتك، مع توضيح المشكلة التي تحلها والحلول المقترحة.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-najd-blue/10 text-xs text-najd-blue">
                            2
                          </span>
                          <span>حدد الفئة المستهدفة والسوق المحتمل لفكرتك.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-najd-blue/10 text-xs text-najd-blue">
                            3
                          </span>
                          <span>
                            أرفق أي مستندات داعمة مثل الرسومات التوضيحية، النماذج الأولية، أو دراسات الجدوى إن وجدت.
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-najd-blue/10 text-xs text-najd-blue">
                            4
                          </span>
                          <span>حدد ما إذا كنت ترغب في حماية فكرتك من خلال تسجيل الملكية الفكرية.</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card className="animate-fade-in">
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <ShieldIcon className="h-5 w-5 text-najd-blue" />
                        <CardTitle>حماية الملكية الفكرية</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Tabs defaultValue="what">
                        <TabsList className="grid w-full grid-cols-3">
                          <TabsTrigger value="what">ما هي؟</TabsTrigger>
                          <TabsTrigger value="why">لماذا؟</TabsTrigger>
                          <TabsTrigger value="how">كيف؟</TabsTrigger>
                        </TabsList>
                        <TabsContent value="what" className="mt-4 text-sm">
                          <p>
                            الملكية الفكرية هي حقوق قانونية تمنح المبتكرين السيطرة على استخدام إبداعاتهم وأفكارهم لفترة
                            زمنية محددة.
                          </p>
                        </TabsContent>
                        <TabsContent value="why" className="mt-4 text-sm">
                          <p>
                            تحمي حقوق الملكية الفكرية أفكارك من الاستخدام غير المصرح به، وتمنحك الحق في الاستفادة مادياً
                            من ابتكارك.
                          </p>
                        </TabsContent>
                        <TabsContent value="how" className="mt-4 text-sm">
                          <p>
                            عند اختيار "نعم" لطلب حماية الملكية الفكرية، سيتواصل معك فريقنا القانوني لمساعدتك في تسجيل
                            براءة اختراع أو علامة تجارية أو حقوق نشر حسب طبيعة فكرتك.
                          </p>
                        </TabsContent>
                      </Tabs>
                    </CardContent>
                  </Card>
                  <Card className="animate-fade-in">
                    <CardContent className="p-6">
                      <h3 className="mb-4 font-bold">هل تحتاج إلى مساعدة؟</h3>
                      <p className="mb-4 text-sm text-muted-foreground">
                        إذا كنت تواجه أي صعوبات في تقديم فكرتك أو لديك أسئلة، يمكنك التواصل مع فريق الدعم.
                      </p>
                      <Button asChild variant="outline" className="w-full hover-lift">
                        <Link href="/contact">تواصل مع فريق الدعم</Link>
                      </Button>
                    </CardContent>
                  </Card>
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
