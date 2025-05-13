"use client"

import type React from "react"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { InboxIcon as EnvelopeIcon, MessageSquareIcon, PhoneIcon, UserIcon, Loader2, CheckCircle } from "lucide-react"
import { api } from "@/lib/api"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function ContactPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!name.trim()) {
      setError("الاسم مطلوب")
      return
    }

    if (!email.trim() || !email.includes("@")) {
      setError("البريد الإلكتروني غير صالح")
      return
    }

    if (!subject) {
      setError("يرجى اختيار موضوع الرسالة")
      return
    }

    if (!message.trim()) {
      setError("الرسالة مطلوبة")
      return
    }

    try {
      setIsSubmitting(true)
      const result = await api.sendContactMessage({
        name,
        email,
        subject,
        message,
      })

      setSubmitted(true)

      // Reset form
      setName("")
      setEmail("")
      setSubject("")
      setMessage("")

      // Scroll to top to show success message
      window.scrollTo({ top: 0, behavior: "smooth" })
    } catch (err) {
      setError(err instanceof Error ? err.message : "حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.")
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
              <h1 className="animate-slide-up mb-6 text-4xl font-bold md:text-5xl">تواصل معنا</h1>
              <p className="animate-slide-up mb-8 text-lg text-gray-200">
                نحن هنا للإجابة على استفساراتك ومساعدتك في كل ما يتعلق بمنصة نَجِدْ. لا تتردد في التواصل معنا.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <h2 className="animate-slide-up mb-6 text-2xl font-bold text-najd-blue">أرسل لنا رسالة</h2>

                {submitted ? (
                  <Alert className="animate-scale border-green-500 bg-green-50 text-green-800">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <AlertTitle className="text-green-800">تم إرسال رسالتك بنجاح!</AlertTitle>
                    <AlertDescription className="text-green-700">
                      شكراً لتواصلك معنا. سنقوم بالرد عليك في أقرب وقت ممكن.
                    </AlertDescription>
                    <Button onClick={() => setSubmitted(false)} className="mt-4 bg-najd-blue hover:bg-najd-blue/90">
                      إرسال رسالة أخرى
                    </Button>
                  </Alert>
                ) : (
                  <form onSubmit={handleSubmit} className="animate-fade-in space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">الاسم الكامل</Label>
                        <div className="relative">
                          <Input
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="أدخل اسمك الكامل"
                            className="pr-10"
                            required
                          />
                          <UserIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">البريد الإلكتروني</Label>
                        <div className="relative">
                          <Input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="أدخل بريدك الإلكتروني"
                            className="pr-10"
                            required
                          />
                          <EnvelopeIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">الموضوع</Label>
                      <Select value={subject} onValueChange={setSubject} required>
                        <SelectTrigger>
                          <SelectValue placeholder="اختر موضوع الرسالة" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">استفسار عام</SelectItem>
                          <SelectItem value="support">الدعم الفني</SelectItem>
                          <SelectItem value="partnership">شراكة</SelectItem>
                          <SelectItem value="suggestion">اقتراح</SelectItem>
                          <SelectItem value="other">أخرى</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">الرسالة</Label>
                      <div className="relative">
                        <Textarea
                          id="message"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="اكتب رسالتك هنا..."
                          className="min-h-32 resize-none pr-10"
                          required
                        />
                        <MessageSquareIcon className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                      </div>
                    </div>

                    {error && (
                      <Alert variant="destructive">
                        <AlertDescription>{error}</AlertDescription>
                      </Alert>
                    )}

                    <Button
                      type="submit"
                      className="hover-glow bg-najd-blue hover:bg-najd-blue/90"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          جاري الإرسال...
                        </>
                      ) : (
                        "إرسال الرسالة"
                      )}
                    </Button>
                  </form>
                )}
              </div>
              <div>
                <h2 className="animate-slide-up mb-6 text-2xl font-bold text-najd-blue">معلومات التواصل</h2>
                <div className="stagger-children space-y-6">
                  <Card className="hover-lift">
                    <CardContent className="flex items-start gap-4 p-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-najd-blue/10">
                        <EnvelopeIcon className="h-6 w-6 text-najd-blue" />
                      </div>
                      <div>
                        <h3 className="mb-1 font-bold">البريد الإلكتروني</h3>
                        <p className="text-muted-foreground">info@najd-platform.com</p>
                        <p className="text-muted-foreground">support@najd-platform.com</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="hover-lift">
                    <CardContent className="flex items-start gap-4 p-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-najd-blue/10">
                        <PhoneIcon className="h-6 w-6 text-najd-blue" />
                      </div>
                      <div>
                        <h3 className="mb-1 font-bold">الهاتف</h3>
                        <p className="text-muted-foreground">+968 9214 4459</p>
                        <p className="text-muted-foreground">+968 9242 1050</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="hover-lift">
                    <CardContent className="p-6">
                      <h3 className="mb-4 font-bold">تابعنا على</h3>
                      <div className="flex gap-4">
                        <a
                          href="#"
                          className="flex h-10 w-10 items-center justify-center rounded-full bg-najd-blue/10 text-najd-blue transition-colors hover:bg-najd-blue hover:text-white"
                        >
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a
                          href="#"
                          className="flex h-10 w-10 items-center justify-center rounded-full bg-najd-blue/10 text-najd-blue transition-colors hover:bg-najd-blue hover:text-white"
                        >
                          <i className="fab fa-instagram"></i>
                        </a>
                        <a
                          href="#"
                          className="flex h-10 w-10 items-center justify-center rounded-full bg-najd-blue/10 text-najd-blue transition-colors hover:bg-najd-blue hover:text-white"
                        >
                          <i className="fab fa-linkedin"></i>
                        </a>
                        <a
                          href="#"
                          className="flex h-10 w-10 items-center justify-center rounded-full bg-najd-blue/10 text-najd-blue transition-colors hover:bg-najd-blue hover:text-white"
                        >
                          <i className="fab fa-facebook"></i>
                        </a>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover-lift">
                    <CardContent className="p-6">
                      <h3 className="mb-4 font-bold">ساعات العمل</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>الأحد - الخميس</span>
                          <span>8:00 ص - 4:00 م</span>
                        </div>
                        <div className="flex justify-between">
                          <span>الجمعة</span>
                          <span>مغلق</span>
                        </div>
                        <div className="flex justify-between">
                          <span>السبت</span>
                          <span>9:00 ص - 2:00 م</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="animated-bg py-20 text-white">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="animate-slide-up mb-6 text-3xl font-bold md:text-4xl">الأسئلة الشائعة</h2>
              <p className="animate-slide-up mb-8 text-lg text-gray-200">
                قبل التواصل معنا، يمكنك الاطلاع على الأسئلة الشائعة التي قد تجد فيها إجابة على استفسارك.
              </p>
              <Button
                asChild
                size="lg"
                className="hover-glow bg-najd-yellow hover:bg-najd-yellow/90 text-najd-blue font-bold"
              >
                <a href="/tutorial#faq">الأسئلة الشائعة</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
