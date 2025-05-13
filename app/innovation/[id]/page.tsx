"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { api, type Idea } from "@/lib/api"
import {
  CalendarIcon,
  EyeIcon,
  HeartIcon,
  MessageSquareIcon,
  ShareIcon,
  ShieldIcon,
  ThumbsUpIcon,
  UserIcon,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

export default function IdeaDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [idea, setIdea] = useState<Idea | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState("")
  const [relatedIdeas, setRelatedIdeas] = useState<Idea[]>([])
  const [liked, setLiked] = useState(false)
  const [comment, setComment] = useState("")
  const [isSubmittingComment, setIsSubmittingComment] = useState(false)
  const [commentSuccess, setCommentSuccess] = useState(false)

  // Fetch idea details on component mount
  useEffect(() => {
    const fetchIdeaDetails = async () => {
      try {
        setIsLoading(true)
        const id = Number(params.id)
        if (isNaN(id)) {
          throw new Error("معرف الفكرة غير صالح")
        }

        const ideaData = await api.getIdeaById(id)
        if (!ideaData) {
          throw new Error("لم يتم العثور على الفكرة")
        }

        setIdea(ideaData)

        // Fetch related ideas (same category)
        const allIdeas = await api.getIdeas()
        const related = allIdeas.filter((i) => i.category === ideaData.category && i.id !== ideaData.id).slice(0, 3)
        setRelatedIdeas(related)
      } catch (err) {
        setError(err instanceof Error ? err.message : "حدث خطأ أثناء تحميل تفاصيل الفكرة")
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchIdeaDetails()
  }, [params.id])

  const handleLike = () => {
    setLiked(!liked)
    if (idea) {
      // In a real app, we'd send this to the server
      setIdea({
        ...idea,
        likes: liked ? idea.likes - 1 : idea.likes + 1,
      })
    }
  }

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!comment.trim()) return

    setIsSubmittingComment(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmittingComment(false)
      setCommentSuccess(true)
      setComment("")

      // Reset success message after a delay
      setTimeout(() => {
        setCommentSuccess(false)
      }, 3000)
    }, 1000)
  }

  if (isLoading) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 py-10">
          <div className="container">
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <Skeleton className="h-64 w-full rounded-lg mb-6" />
                <Skeleton className="h-10 w-3/4 mb-4" />
                <Skeleton className="h-6 w-1/4 mb-6" />
                <div className="space-y-2 mb-6">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
                <div className="flex gap-4 mb-8">
                  <Skeleton className="h-10 w-24" />
                  <Skeleton className="h-10 w-24" />
                </div>
                <Skeleton className="h-40 w-full rounded-lg" />
              </div>
              <div>
                <Skeleton className="h-64 w-full rounded-lg mb-6" />
                <Skeleton className="h-64 w-full rounded-lg" />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  if (error || !idea) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 py-20">
          <div className="container">
            <div className="text-center py-10">
              <h1 className="text-2xl font-bold mb-4 text-red-600">{error || "لم يتم العثور على الفكرة"}</h1>
              <p className="mb-6 text-muted-foreground">يبدو أن هناك مشكلة في تحميل تفاصيل الفكرة</p>
              <Button onClick={() => router.push("/innovation")} className="bg-najd-blue hover:bg-najd-blue/90">
                العودة إلى معرض الأفكار
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  // Map idea ID to the correct image
  const getIdeaImage = (id: number) => {
    switch (id) {
      case 1:
        return "/images/idea-water-management.png"
      case 2:
        return "/images/idea-health-app.png"
      case 3:
        return "/images/idea-education.png"
      case 4:
        return "/images/idea-robot.png"
      case 5:
        return "/images/idea-recycling.png"
      case 6:
        return "/images/idea-ecommerce.png"
      default:
        return "/images/innovation-concept.png"
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-10">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="mb-6 overflow-hidden rounded-lg">
                <Image
                  src={getIdeaImage(idea.id) || "/placeholder.svg"}
                  width={800}
                  height={400}
                  alt={idea.title}
                  className="h-full w-full object-cover animate-fade-in"
                />
              </div>

              <h1 className="animate-slide-up mb-4 text-3xl font-bold">{idea.title}</h1>

              <div className="mb-6 flex flex-wrap items-center gap-4">
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

                <span className="inline-flex items-center rounded-full bg-najd-blue/10 px-3 py-1 text-sm font-medium text-najd-blue">
                  {idea.category}
                </span>

                {idea.isPatented && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800">
                    <ShieldIcon className="h-4 w-4" />
                    محمي بحقوق الملكية الفكرية
                  </span>
                )}
              </div>

              <div className="animate-fade-in mb-8 text-lg leading-relaxed text-muted-foreground">
                <p>{idea.description}</p>
              </div>

              <div className="mb-8 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <UserIcon className="h-4 w-4" />
                  <span>{idea.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CalendarIcon className="h-4 w-4" />
                  <span>{idea.createdAt}</span>
                </div>
                <div className="flex items-center gap-2">
                  <EyeIcon className="h-4 w-4" />
                  <span>{idea.views} مشاهدة</span>
                </div>
                <div className="flex items-center gap-2">
                  <HeartIcon className="h-4 w-4" />
                  <span>{idea.likes} إعجاب</span>
                </div>
              </div>

              <div className="mb-10 flex flex-wrap gap-4">
                <Button
                  onClick={handleLike}
                  variant={liked ? "default" : "outline"}
                  className={liked ? "bg-najd-blue hover:bg-najd-blue/90" : "hover-lift"}
                >
                  <ThumbsUpIcon className="mr-2 h-4 w-4" />
                  {liked ? "أعجبني" : "إعجاب"}
                </Button>
                <Button variant="outline" className="hover-lift">
                  <ShareIcon className="mr-2 h-4 w-4" />
                  مشاركة
                </Button>
                <Button variant="outline" className="hover-lift">
                  <MessageSquareIcon className="mr-2 h-4 w-4" />
                  تعليق
                </Button>
              </div>

              <div className="animate-fade-in mb-10">
                <h2 className="mb-4 text-2xl font-bold">التعليقات</h2>

                <div className="mb-6 rounded-lg border p-4">
                  <form onSubmit={handleCommentSubmit}>
                    <Textarea
                      placeholder="أضف تعليقك هنا..."
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      className="mb-4 resize-none"
                    />
                    <div className="flex items-center justify-between">
                      <Button
                        type="submit"
                        className="bg-najd-blue hover:bg-najd-blue/90"
                        disabled={isSubmittingComment || !comment.trim()}
                      >
                        {isSubmittingComment ? "جاري الإرسال..." : "إرسال التعليق"}
                      </Button>
                      {commentSuccess && <span className="text-green-600">تم إرسال تعليقك بنجاح!</span>}
                    </div>
                  </form>
                </div>

                <div className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <div className="mb-2 flex items-center gap-3">
                      <div className="h-10 w-10 overflow-hidden rounded-full bg-muted">
                        <Image
                          src="/images/profile-1.png"
                          width={40}
                          height={40}
                          alt="صورة المستخدم"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold">أحمد محمد</h4>
                        <p className="text-xs text-muted-foreground">منذ 3 أيام</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      فكرة رائعة ومبتكرة! أعتقد أنها ستكون مفيدة جداً في حل مشكلة استهلاك المياه. هل فكرت في إضافة ميزة
                      التنبيهات الذكية عند اكتشاف تسرب المياه؟
                    </p>
                  </div>

                  <div className="rounded-lg border p-4">
                    <div className="mb-2 flex items-center gap-3">
                      <div className="h-10 w-10 overflow-hidden rounded-full bg-muted">
                        <Image
                          src="/images/profile-2.png"
                          width={40}
                          height={40}
                          alt="صورة المستخدم"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold">سارة علي</h4>
                        <p className="text-xs text-muted-foreground">منذ 5 أيام</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      أنا مهتم بالاستثمار في هذه الفكرة. هل يمكننا التواصل لمناقشة التفاصيل؟
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Card className="mb-6 animate-fade-in">
                <CardHeader>
                  <CardTitle>معلومات المبتكر</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 overflow-hidden rounded-full bg-muted">
                      <Image
                        src={
                          idea.authorId === "u1"
                            ? "/images/profile-1.png"
                            : idea.authorId === "u2"
                              ? "/images/profile-2.png"
                              : idea.authorId === "u3"
                                ? "/images/profile-3.png"
                                : "/images/profile-4.png"
                        }
                        width={64}
                        height={64}
                        alt={idea.author}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold">{idea.author}</h3>
                      <p className="text-sm text-muted-foreground">مبتكر</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Button asChild className="w-full bg-najd-blue hover:bg-najd-blue/90">
                      <Link href="#">التواصل مع المبتكر</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-6 animate-fade-in">
                <CardHeader>
                  <CardTitle>تفاصيل الفكرة</CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="info">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="info">معلومات</TabsTrigger>
                      <TabsTrigger value="stage">المرحلة</TabsTrigger>
                    </TabsList>
                    <TabsContent value="info" className="space-y-4 pt-4">
                      <div>
                        <h4 className="font-bold text-sm">المجال</h4>
                        <p className="text-muted-foreground">{idea.category}</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-sm">تاريخ النشر</h4>
                        <p className="text-muted-foreground">{idea.createdAt}</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-sm">الملكية الفكرية</h4>
                        <p className="text-muted-foreground">{idea.isPatented ? "محمية" : "غير محمية"}</p>
                      </div>
                    </TabsContent>
                    <TabsContent value="stage" className="pt-4">
                      <div className="space-y-4">
                        <div className="relative pt-1">
                          <div className="mb-2 flex items-center justify-between">
                            <div>
                              <span className="text-xs font-semibold inline-block text-najd-blue">مرحلة التطوير</span>
                            </div>
                            <div>
                              <span className="text-xs font-semibold inline-block text-najd-blue">
                                {idea.stage === "concept"
                                  ? "فكرة مبدئية"
                                  : idea.stage === "prototype"
                                    ? "نموذج أولي"
                                    : idea.stage === "development"
                                      ? "قيد التطوير"
                                      : idea.stage === "testing"
                                        ? "في مرحلة الاختبار"
                                        : "تم الإطلاق"}
                              </span>
                            </div>
                          </div>
                          <div className="mb-4 flex h-2 overflow-hidden rounded bg-najd-blue/20 text-xs">
                            <div
                              style={{
                                width:
                                  idea.stage === "concept"
                                    ? "20%"
                                    : idea.stage === "prototype"
                                      ? "40%"
                                      : idea.stage === "development"
                                        ? "60%"
                                        : idea.stage === "testing"
                                          ? "80%"
                                          : "100%",
                              }}
                              className="animate-shimmer flex flex-col justify-center whitespace-nowrap rounded bg-najd-blue text-center text-white shadow-none"
                            ></div>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {idea.stage === "concept"
                            ? "الفكرة في مرحلة التصور المبدئي وتحتاج إلى تطوير وتحسين."
                            : idea.stage === "prototype"
                              ? "تم تطوير نموذج أولي للفكرة وجاري اختباره."
                              : idea.stage === "development"
                                ? "الفكرة قيد التطوير والعمل على تحسينها."
                                : idea.stage === "testing"
                                  ? "الفكرة في مرحلة الاختبار النهائي قبل الإطلاق."
                                  : "تم إطلاق المشروع بنجاح وهو متاح للاستخدام."}
                        </p>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

              {relatedIdeas.length > 0 && (
                <Card className="animate-fade-in">
                  <CardHeader>
                    <CardTitle>أفكار مشابهة</CardTitle>
                    <CardDescription>أفكار أخرى في نفس المجال</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {relatedIdeas.map((relatedIdea) => (
                        <Link
                          key={relatedIdea.id}
                          href={`/innovation/${relatedIdea.id}`}
                          className="flex items-start gap-3 rounded-lg p-2 transition-colors hover:bg-muted"
                        >
                          <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md bg-muted">
                            <Image
                              src={getIdeaImage(relatedIdea.id) || "/placeholder.svg"}
                              width={64}
                              height={64}
                              alt={relatedIdea.title}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-medium">{relatedIdea.title}</h4>
                            <p className="text-xs text-muted-foreground line-clamp-2">{relatedIdea.description}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
