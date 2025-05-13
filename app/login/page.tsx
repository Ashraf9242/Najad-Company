"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { api } from "@/lib/api"
import { Loader2 } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function LoginPage() {
  const router = useRouter()
  const [loginEmail, setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")
  const [registerName, setRegisterName] = useState("")
  const [registerEmail, setRegisterEmail] = useState("")
  const [registerPassword, setRegisterPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [userType, setUserType] = useState("")
  const [loginError, setLoginError] = useState("")
  const [registerError, setRegisterError] = useState("")
  const [isLoginLoading, setIsLoginLoading] = useState(false)
  const [isRegisterLoading, setIsRegisterLoading] = useState(false)
  const [loginSuccess, setLoginSuccess] = useState(false)
  const [registerSuccess, setRegisterSuccess] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoginError("")
    setLoginSuccess(false)

    if (!loginEmail || !loginEmail.includes("@")) {
      setLoginError("الرجاء إدخال بريد إلكتروني صحيح")
      return
    }

    if (!loginPassword) {
      setLoginError("كلمة المرور مطلوبة")
      return
    }

    try {
      setIsLoginLoading(true)
      const result = await api.login(loginEmail, loginPassword)

      // Store user data in localStorage (in a real app, we'd use a more secure method)
      localStorage.setItem("user", JSON.stringify(result.user))
      localStorage.setItem("token", result.token)

      setLoginSuccess(true)

      // Redirect after a short delay to show success message
      setTimeout(() => {
        router.push("/tutorial")
      }, 1500)
    } catch (error) {
      setLoginError(error instanceof Error ? error.message : "حدث خطأ أثناء تسجيل الدخول")
    } finally {
      setIsLoginLoading(false)
    }
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setRegisterError("")
    setRegisterSuccess(false)

    if (!registerName) {
      setRegisterError("الاسم الكامل مطلوب")
      return
    }

    if (!registerEmail || !registerEmail.includes("@")) {
      setRegisterError("الرجاء إدخال بريد إلكتروني صحيح")
      return
    }

    if (!registerPassword) {
      setRegisterError("كلمة المرور مطلوبة")
      return
    }

    if (registerPassword !== confirmPassword) {
      setRegisterError("كلمات المرور غير متطابقة")
      return
    }

    if (!userType) {
      setRegisterError("الرجاء اختيار نوع الحساب")
      return
    }

    try {
      setIsRegisterLoading(true)
      const result = await api.register({
        name: registerName,
        email: registerEmail,
        userType,
        password: registerPassword,
      })

      // Store user data in localStorage (in a real app, we'd use a more secure method)
      localStorage.setItem("user", JSON.stringify(result.user))
      localStorage.setItem("token", result.token)

      setRegisterSuccess(true)

      // Redirect after a short delay to show success message
      setTimeout(() => {
        router.push("/tutorial")
      }, 1500)
    } catch (error) {
      setRegisterError(error instanceof Error ? error.message : "حدث خطأ أثناء إنشاء الحساب")
    } finally {
      setIsRegisterLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center py-12">
        <div className="container max-w-md">
          <div className="animate-scale rounded-lg border bg-card p-8 shadow-sm">
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="login">تسجيل الدخول</TabsTrigger>
                <TabsTrigger value="register">حساب جديد</TabsTrigger>
              </TabsList>
              <TabsContent value="login">
                {loginSuccess ? (
                  <Alert className="animate-fade-in border-green-500 bg-green-50 text-green-800">
                    <AlertTitle className="text-green-800">تم تسجيل الدخول بنجاح!</AlertTitle>
                    <AlertDescription className="text-green-700">
                      جاري تحويلك إلى صفحة الدليل التعليمي...
                    </AlertDescription>
                  </Alert>
                ) : (
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="loginEmail">البريد الإلكتروني</Label>
                      <Input
                        id="loginEmail"
                        type="email"
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                        placeholder="أدخل بريدك الإلكتروني"
                        className="animate-fade-in"
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="loginPassword">كلمة المرور</Label>
                        <Link href="/forgot-password" className="text-sm text-najd-blue hover:underline">
                          نسيت كلمة المرور؟
                        </Link>
                      </div>
                      <Input
                        id="loginPassword"
                        type="password"
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        placeholder="أدخل كلمة المرور"
                        className="animate-fade-in"
                      />
                    </div>
                    {loginError && (
                      <Alert variant="destructive" className="animate-fade-in py-2">
                        <AlertDescription>{loginError}</AlertDescription>
                      </Alert>
                    )}
                    <Button
                      type="submit"
                      className="w-full bg-najd-blue hover:bg-najd-blue/90 hover-glow"
                      disabled={isLoginLoading}
                    >
                      {isLoginLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          جاري تسجيل الدخول...
                        </>
                      ) : (
                        "تسجيل الدخول"
                      )}
                    </Button>
                  </form>
                )}
                <div className="mt-6">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-background px-2 text-muted-foreground">أو تسجيل الدخول باستخدام</span>
                    </div>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <Button variant="outline" className="w-full hover-lift">
                      <i className="fab fa-google mr-2"></i> Google
                    </Button>
                    <Button variant="outline" className="w-full hover-lift">
                      <i className="fab fa-linkedin mr-2"></i> LinkedIn
                    </Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="register">
                {registerSuccess ? (
                  <Alert className="animate-fade-in border-green-500 bg-green-50 text-green-800">
                    <AlertTitle className="text-green-800">تم إنشاء الحساب بنجاح!</AlertTitle>
                    <AlertDescription className="text-green-700">
                      جاري تحويلك إلى صفحة الدليل التعليمي...
                    </AlertDescription>
                  </Alert>
                ) : (
                  <form onSubmit={handleRegister} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="registerName">الاسم الكامل</Label>
                      <Input
                        id="registerName"
                        value={registerName}
                        onChange={(e) => setRegisterName(e.target.value)}
                        placeholder="أدخل اسمك الكامل"
                        className="animate-fade-in"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="registerEmail">البريد الإلكتروني</Label>
                      <Input
                        id="registerEmail"
                        type="email"
                        value={registerEmail}
                        onChange={(e) => setRegisterEmail(e.target.value)}
                        placeholder="أدخل بريدك الإلكتروني"
                        className="animate-fade-in"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="userType">نوع الحساب</Label>
                      <Select value={userType} onValueChange={setUserType}>
                        <SelectTrigger className="animate-fade-in">
                          <SelectValue placeholder="اختر نوع الحساب" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="innovator">مبتكر</SelectItem>
                          <SelectItem value="investor">مستثمر</SelectItem>
                          <SelectItem value="expert">خبير</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="registerPassword">كلمة المرور</Label>
                      <Input
                        id="registerPassword"
                        type="password"
                        value={registerPassword}
                        onChange={(e) => setRegisterPassword(e.target.value)}
                        placeholder="أدخل كلمة المرور"
                        className="animate-fade-in"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">تأكيد كلمة المرور</Label>
                      <Input
                        id="confirmPassword"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="أعد إدخال كلمة المرور"
                        className="animate-fade-in"
                      />
                    </div>
                    {registerError && (
                      <Alert variant="destructive" className="animate-fade-in py-2">
                        <AlertDescription>{registerError}</AlertDescription>
                      </Alert>
                    )}
                    <Button
                      type="submit"
                      className="w-full bg-najd-blue hover:bg-najd-blue/90 hover-glow"
                      disabled={isRegisterLoading}
                    >
                      {isRegisterLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          جاري إنشاء الحساب...
                        </>
                      ) : (
                        "إنشاء حساب"
                      )}
                    </Button>
                  </form>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
