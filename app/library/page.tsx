import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { FileTextIcon, GraduationCapIcon, LightbulbIcon, VideoIcon } from "lucide-react"

export default function LibraryPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="bg-najd-blue py-20 text-white">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-4xl font-bold md:text-5xl">المكتبة التعليمية</h1>
              <p className="mb-8 text-lg text-gray-200">
                استكشف مجموعة متنوعة من المحتوى التعليمي المصمم لمساعدتك في تطوير مهاراتك وتنمية معرفتك في مجال ريادة
                الأعمال والابتكار.
              </p>
              <div className="relative mx-auto max-w-md">
                <Input
                  type="search"
                  placeholder="ابحث في المكتبة..."
                  className="pr-10 bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                />
                <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-300"></i>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container">
            <Tabs defaultValue="videos" className="w-full">
              <div className="mb-8 flex justify-center">
                <TabsList className="grid w-full max-w-3xl grid-cols-2 sm:grid-cols-4">
                  <TabsTrigger value="videos">
                    <VideoIcon className="mr-2 h-4 w-4" />
                    فيديوهات
                  </TabsTrigger>
                  <TabsTrigger value="documents">
                    <FileTextIcon className="mr-2 h-4 w-4" />
                    مستندات
                  </TabsTrigger>
                  <TabsTrigger value="courses">
                    <GraduationCapIcon className="mr-2 h-4 w-4" />
                    دورات
                  </TabsTrigger>
                  <TabsTrigger value="tips">
                    <LightbulbIcon className="mr-2 h-4 w-4" />
                    نصائح
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="videos">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader className="p-4">
                      <div className="aspect-video overflow-hidden rounded-md bg-muted">
                        <Image
                          src="/images/video-thumbnail-1.png"
                          alt="أساسيات ريادة الأعمال"
                          width={300}
                          height={200}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <CardTitle className="mb-2 text-lg">أساسيات ريادة الأعمال</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        تعرف على المفاهيم الأساسية في ريادة الأعمال وكيفية بدء مشروعك الخاص بنجاح.
                      </p>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button asChild variant="outline" className="w-full">
                        <Link href="#">مشاهدة الفيديو</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader className="p-4">
                      <div className="aspect-video overflow-hidden rounded-md bg-muted">
                        <Image
                          src="/images/video-thumbnail-2.png"
                          alt="كيفية حماية الملكية الفكرية"
                          width={300}
                          height={200}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <CardTitle className="mb-2 text-lg">كيفية حماية الملكية الفكرية</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        دليل شامل حول حماية أفكارك وابتكاراتك قانونياً وضمان حقوقك الفكرية.
                      </p>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button asChild variant="outline" className="w-full">
                        <Link href="#">مشاهدة الفيديو</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader className="p-4">
                      <div className="aspect-video overflow-hidden rounded-md bg-muted">
                        <Image
                          src="/images/video-thumbnail-3.png"
                          alt="استراتيجيات جذب المستثمرين"
                          width={300}
                          height={200}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <CardTitle className="mb-2 text-lg">استراتيجيات جذب المستثمرين</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        تعلم كيفية إعداد عرض تقديمي مقنع وجذب اهتمام المستثمرين لمشروعك.
                      </p>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button asChild variant="outline" className="w-full">
                        <Link href="#">مشاهدة الفيديو</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="documents">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader className="p-4">
                      <div className="aspect-[3/4] overflow-hidden rounded-md bg-muted">
                        <Image
                          src="/images/document-thumbnail-1.png"
                          alt="دليل إعداد خطة العمل"
                          width={300}
                          height={400}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <CardTitle className="mb-2 text-lg">دليل إعداد خطة العمل</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        دليل شامل لإعداد خطة عمل احترافية تساعدك في تخطيط مشروعك وجذب المستثمرين.
                      </p>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button asChild variant="outline" className="w-full">
                        <Link href="#">تحميل المستند</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader className="p-4">
                      <div className="aspect-[3/4] overflow-hidden rounded-md bg-muted">
                        <Image
                          src="/images/document-thumbnail-2.png"
                          alt="نماذج العقود القانونية"
                          width={300}
                          height={400}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <CardTitle className="mb-2 text-lg">نماذج العقود القانونية</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        مجموعة من نماذج العقود القانونية التي قد تحتاجها في مشروعك، مثل عقود الشراكة والاستثمار.
                      </p>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button asChild variant="outline" className="w-full">
                        <Link href="#">تحميل المستند</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader className="p-4">
                      <div className="aspect-[3/4] overflow-hidden rounded-md bg-muted">
                        <Image
                          src="/images/document-thumbnail-3.png"
                          alt="دراسات حالة لمشاريع ناجحة"
                          width={300}
                          height={400}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <CardTitle className="mb-2 text-lg">دراسات حالة لمشاريع ناجحة</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        مجموعة من دراسات الحالة لمشاريع ناجحة، تحليل لعوامل نجاحها والدروس المستفادة منها.
                      </p>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button asChild variant="outline" className="w-full">
                        <Link href="#">تحميل المستند</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="courses">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader className="p-4">
                      <div className="aspect-video overflow-hidden rounded-md bg-muted">
                        <Image
                          src="/images/course-thumbnail-1.png"
                          alt="دورة ريادة الأعمال الشاملة"
                          width={300}
                          height={200}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <CardTitle className="mb-2 text-lg">دورة ريادة الأعمال الشاملة</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        دورة شاملة تغطي جميع جوانب ريادة الأعمال من الفكرة إلى التنفيذ والنمو.
                      </p>
                      <div className="mt-2 flex items-center text-sm">
                        <span className="text-najd-blue font-medium">اللمدة:</span>
                        <span className="mr-2 text-muted-foreground">8 أسابيع</span>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button asChild className="w-full bg-najd-blue hover:bg-najd-blue/90">
                        <Link href="#">التسجيل في الدورة</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader className="p-4">
                      <div className="aspect-video overflow-hidden rounded-md bg-muted">
                        <Image
                          src="/images/course-thumbnail-2.png"
                          alt="التسويق للمشاريع الناشئة"
                          width={300}
                          height={200}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <CardTitle className="mb-2 text-lg">التسويق للمشاريع الناشئة</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        تعلم استراتيجيات التسويق الفعالة للمشاريع الناشئة بميزانية محدودة.
                      </p>
                      <div className="mt-2 flex items-center text-sm">
                        <span className="text-najd-blue font-medium">المدة:</span>
                        <span className="mr-2 text-muted-foreground">4 أسابيع</span>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button asChild className="w-full bg-najd-blue hover:bg-najd-blue/90">
                        <Link href="#">التسجيل في الدورة</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader className="p-4">
                      <div className="aspect-video overflow-hidden rounded-md bg-muted">
                        <Image
                          src="/images/course-thumbnail-3.png"
                          alt="إدارة المالية للمشاريع"
                          width={300}
                          height={200}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <CardTitle className="mb-2 text-lg">إدارة المالية للمشاريع</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        دورة متخصصة في إدارة المالية للمشاريع الناشئة، من التخطيط المالي إلى إدارة التدفق النقدي.
                      </p>
                      <div className="mt-2 flex items-center text-sm">
                        <span className="text-najd-blue font-medium">المدة:</span>
                        <span className="mr-2 text-muted-foreground">6 أسابيع</span>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button asChild className="w-full bg-najd-blue hover:bg-najd-blue/90">
                        <Link href="#">التسجيل في الدورة</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="tips">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardContent className="p-6">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-najd-blue/10">
                        <LightbulbIcon className="h-6 w-6 text-najd-blue" />
                      </div>
                      <CardTitle className="mb-2 text-lg">كيفية تقييم فكرتك</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        نصائح عملية لتقييم فكرتك وتحديد مدى قابليتها للتنفيذ والنجاح في السوق.
                      </p>
                      <Button asChild variant="link" className="mt-4 px-0 text-najd-blue">
                        <Link href="#">اقرأ المزيد</Link>
                      </Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-najd-blue/10">
                        <LightbulbIcon className="h-6 w-6 text-najd-blue" />
                      </div>
                      <CardTitle className="mb-2 text-lg">بناء فريق العمل المثالي</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        إرشادات لاختيار أعضاء فريق العمل المناسبين وبناء فريق متكامل يساهم في نجاح مشروعك.
                      </p>
                      <Button asChild variant="link" className="mt-4 px-0 text-najd-blue">
                        <Link href="#">اقرأ المزيد</Link>
                      </Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-najd-blue/10">
                        <LightbulbIcon className="h-6 w-6 text-najd-blue" />
                      </div>
                      <CardTitle className="mb-2 text-lg">التعامل مع التحديات</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        ن صائح للتعامل مع التحديات والعقبات التي قد تواجهها في رحلة ريادة الأعمال.
                      </p>
                      <Button asChild variant="link" className="mt-4 px-0 text-najd-blue">
                        <Link href="#">اقرأ المزيد</Link>
                      </Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-najd-blue/10">
                        <LightbulbIcon className="h-6 w-6 text-najd-blue" />
                      </div>
                      <CardTitle className="mb-2 text-lg">استراتيجيات التمويل</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        نصائح حول مختلف استراتيجيات التمويل المتاحة للمشاريع الناشئة وكيفية اختيار المناسب منها.
                      </p>
                      <Button asChild variant="link" className="mt-4 px-0 text-najd-blue">
                        <Link href="#">اقرأ المزيد</Link>
                      </Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-najd-blue/10">
                        <LightbulbIcon className="h-6 w-6 text-najd-blue" />
                      </div>
                      <CardTitle className="mb-2 text-lg">التسويق بميزانية محدودة</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        أفكار وطرق مبتكرة للتسويق لمشروعك بميزانية محدودة وتحقيق انتشار واسع.
                      </p>
                      <Button asChild variant="link" className="mt-4 px-0 text-najd-blue">
                        <Link href="#">اقرأ المزيد</Link>
                      </Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-najd-blue/10">
                        <LightbulbIcon className="h-6 w-6 text-najd-blue" />
                      </div>
                      <CardTitle className="mb-2 text-lg">الابتكار المستمر</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        كيفية الحفاظ على روح الابتكار في مشروعك والتطوير المستمر لمنتجاتك وخدماتك.
                      </p>
                      <Button asChild variant="link" className="mt-4 px-0 text-najd-blue">
                        <Link href="#">اقرأ المزيد</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="bg-najd-blue py-20 text-white">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">هل تريد المساهمة في المكتبة؟</h2>
              <p className="mb-8 text-lg text-gray-200">
                إذا كنت خبيراً في مجال ريادة الأعمال أو الابتكار، يمكنك المساهمة بمحتوى تعليمي في المكتبة ومشاركة خبراتك
                مع المجتمع.
              </p>
              <Button asChild size="lg" className="bg-najd-yellow hover:bg-najd-yellow/90 text-najd-blue font-bold">
                <Link href="/contact">تواصل معنا للمساهمة</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
