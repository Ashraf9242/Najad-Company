import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TutorialPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="bg-najd-blue py-20 text-white">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-4xl font-bold md:text-5xl">دليل استخدام المنصة</h1>
              <p className="mb-8 text-lg text-gray-200">
                تعرف على كيفية استخدام منصة نَجِدْ بأقصى استفادة ممكنة من خلال هذا الدليل المفصل.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container">
            <Tabs defaultValue="getting-started" className="w-full">
              <div className="mb-8 flex justify-center">
                <TabsList className="grid w-full max-w-3xl grid-cols-1 sm:grid-cols-3">
                  <TabsTrigger value="getting-started">البداية</TabsTrigger>
                  <TabsTrigger value="features">المميزات الرئيسية</TabsTrigger>
                  <TabsTrigger value="faq">الأسئلة الشائعة</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="getting-started">
                <div className="mx-auto max-w-3xl space-y-12">
                  <div className="grid gap-8 md:grid-cols-2 md:gap-12">
                    <div>
                      <h2 className="mb-4 text-2xl font-bold text-najd-blue">1. إنشاء حساب</h2>
                      <p className="text-muted-foreground">
                        قم بإنشاء حساب جديد على المنصة باستخدام بريدك الإلكتروني أو حساباتك على مواقع التواصل الاجتماعي.
                        اختر نوع الحساب المناسب لك (مبتكر، مستثمر، خبير).
                      </p>
                      <Button asChild className="mt-4 bg-najd-blue hover:bg-najd-blue/90">
                        <Link href="/register">إنشاء حساب الآن</Link>
                      </Button>
                    </div>
                    <div className="flex items-center justify-center">
                      <Image
                        src="/placeholder.svg?height=200&width=300"
                        width={300}
                        height={200}
                        alt="إنشاء حساب"
                        className="rounded-lg shadow-md"
                      />
                    </div>
                  </div>

                  <div className="grid gap-8 md:grid-cols-2 md:gap-12">
                    <div className="order-2 md:order-1 flex items-center justify-center">
                      <Image
                        src="/placeholder.svg?height=200&width=300"
                        width={300}
                        height={200}
                        alt="إكمال الملف الشخصي"
                        className="rounded-lg shadow-md"
                      />
                    </div>
                    <div className="order-1 md:order-2">
                      <h2 className="mb-4 text-2xl font-bold text-najd-blue">2. إكمال الملف الشخصي</h2>
                      <p className="text-muted-foreground">
                        أكمل ملفك الشخصي بإضافة معلوماتك الأساسية، مجالات اهتمامك، خبراتك، ومهاراتك. كلما كان ملفك
                        الشخصي مكتملاً، زادت فرص التواصل مع الأشخاص المناسبين.
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-8 md:grid-cols-2 md:gap-12">
                    <div>
                      <h2 className="mb-4 text-2xl font-bold text-najd-blue">3. استكشاف المنصة</h2>
                      <p className="text-muted-foreground">
                        تعرف على أقسام المنصة المختلفة: معرض الأفكار، المكتبة التعليمية، صفحة التواصل، وغيرها. استكشف
                        الأفكار المعروضة والفرص المتاحة.
                      </p>
                    </div>
                    <div className="flex items-center justify-center">
                      <Image
                        src="/placeholder.svg?height=200&width=300"
                        width={300}
                        height={200}
                        alt="استكشاف المنصة"
                        className="rounded-lg shadow-md"
                      />
                    </div>
                  </div>

                  <div className="grid gap-8 md:grid-cols-2 md:gap-12">
                    <div className="order-2 md:order-1 flex items-center justify-center">
                      <Image
                        src="/placeholder.svg?height=200&width=300"
                        width={300}
                        height={200}
                        alt="إضافة فكرة"
                        className="rounded-lg shadow-md"
                      />
                    </div>
                    <div className="order-1 md:order-2">
                      <h2 className="mb-4 text-2xl font-bold text-najd-blue">4. إضافة فكرة (للمبتكرين)</h2>
                      <p className="text-muted-foreground">
                        إذا كنت مبتكراً، يمكنك إضافة فكرتك من خلال نموذج "إضافة فكرة". قم بوصف فكرتك بشكل واضح، حدد
                        المجال، وأرفق أي مستندات داعمة. يمكنك أيضاً طلب حماية الملكية الفكرية.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="features">
                <div className="mx-auto max-w-4xl">
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <Card>
                      <CardContent className="p-6">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-najd-blue/10">
                          <i className="fas fa-shield-alt text-xl text-najd-blue"></i>
                        </div>
                        <h3 className="mb-2 text-xl font-bold">حماية الملكية الفكرية</h3>
                        <p className="text-sm text-muted-foreground">
                          توفر المنصة نظاماً متكاملاً لحماية الأفكار والابتكارات، مما يضمن حقوق المبتكرين ويمنحهم الثقة في
                          مشاركة أفكارهم.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-6">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-najd-blue/10">
                          <i className="fas fa-users text-xl text-najd-blue"></i>
                        </div>
                        <h3 className="mb-2 text-xl font-bold">التواصل مع الخبراء</h3>
                        <p className="text-sm text-muted-foreground">
                          إمكانية التواصل المباشر مع خبراء في مختلف المجالات للحصول على استشارات وتوجيهات تساعد في تطوير
                          الأفكار.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-6">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-najd-blue/10">
                          <i className="fas fa-chart-line text-xl text-najd-blue"></i>
                        </div>
                        <h3 className="mb-2 text-xl font-bold">فرص استثمارية</h3>
                        <p className="text-sm text-muted-foreground">
                          عرض الأفكار على مستثمرين مهتمين بدعم المشاريع المبتكرة، مما يزيد من فرص الحصول على التمويل
                          اللازم.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-6">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-najd-blue/10">
                          <i className="fas fa-graduation-cap text-xl text-najd-blue"></i>
                        </div>
                        <h3 className="mb-2 text-xl font-bold">المكتبة التعليمية</h3>
                        <p className="text-sm text-muted-foreground">
                          مكتبة غنية بالمحتوى التعليمي من فيديوهات، مقالات، ودورات تدريبية لتطوير المهارات والمعرفة.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-6">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-najd-blue/10">
                          <i className="fas fa-comments text-xl text-najd-blue"></i>
                        </div>
                        <h3 className="mb-2 text-xl font-bold">نظام التواصل</h3>
                        <p className="text-sm text-muted-foreground">
                          نظام متكامل للتواصل بين المستخدمين يتيح إمكانية إرسال الرسائل، المشاركة في غرف النقاش، وبناء
                          فرق العمل.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-6">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-najd-blue/10">
                          <i className="fas fa-search text-xl text-najd-blue"></i>
                        </div>
                        <h3 className="mb-2 text-xl font-bold">البحث المتقدم</h3>
                        <p className="text-sm text-muted-foreground">
                          محرك بحث متقدم يساعد في العثور على الأفكار، المستثمرين، والخبراء حسب المجال والتخصص
                          والاهتمامات.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="faq">
                <div className="mx-auto max-w-3xl space-y-6">
                  <div className="rounded-lg border p-6">
                    <h3 className="mb-2 text-lg font-bold text-najd-blue">كيف يمكنني حماية فكرتي على المنصة؟</h3>
                    <p className="text-muted-foreground">
                      عند إضافة فكرة جديدة، يمكنك اختيار خيار "طلب حماية الملكية الفكرية". سيقوم فريق المنصة بمراجعة
                      طلبك وتوفير الإرشادات اللازمة لحماية فكرتك قانونياً.
                    </p>
                  </div>
                  <div className="rounded-lg border p-6">
                    <h3 className="mb-2 text-lg font-bold text-najd-blue">ما هي رسوم استخدام المنصة؟</h3>
                    <p className="text-muted-foreground">
                      تقدم المنصة خطة مجانية أساسية تتيح الوصول إلى معظم الميزات. هناك أيضاً خطط اشتراك مدفوعة توفر ميزات
                      إضافية مثل عدد أكبر من الأفكار، وصول أولوي للمستثمرين، وخدمات استشارية متقدمة.
                    </p>
                  </div>
                  <div className="rounded-lg border p-6">
                    <h3 className="mb-2 text-lg font-bold text-najd-blue">
                      كيف يتم التواصل بين المبتكرين والمستثمرين؟
                    </h3>
                    <p className="text-muted-foreground">
                      عندما يبدي مستثمر اهتماماً بفكرتك، ستتلقى إشعاراً بذلك. يمكنك بعدها بدء محادثة مباشرة معه عبر نظام
                      المراسلات في المنصة. يمكن أيضاً ترتيب اجتماعات افتراضية أو حضورية من خلال المنصة.
                    </p>
                  </div>
                  <div className="rounded-lg border p-6">
                    <h3 className="mb-2 text-lg font-bold text-najd-blue">هل يمكنني الانضمام كخبير؟</h3>
                    <p className="text-muted-foreground">
                      نعم، يمكنك التسجيل كخبير في المنصة. ستحتاج إلى تقديم معلومات عن خبراتك ومؤهلاتك. بعد مراجعة طلبك،
                      ستتمكن من تقديم استشارات للمبتكرين في مجال تخصصك.
                    </p>
                  </div>
                  <div className="rounded-lg border p-6">
                    <h3 className="mb-2 text-lg font-bold text-najd-blue">ما هي نسبة المنصة من الاستثمارات؟</h3>
                    <p className="text-muted-foreground">
                      تأخذ المنصة نسبة 3% فقط من قيمة الاستثمار أو البيع في حال نجاح الصفقة. هذه النسبة تساعد في تغطية
                      تكاليف تشغيل المنصة وتطويرها لتقديم خدمات أفضل للمستخدمين.
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="bg-najd-blue py-20 text-white">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">جاهز للبدء؟</h2>
              <p className="mb-8 text-lg text-gray-200">
                انضم إلى منصة نَجِدْ اليوم واستفد من جميع المميزات التي تقدمها لتحويل أفكارك إلى مشاريع ناجحة.
              </p>
              <Button asChild size="lg" className="bg-najd-yellow hover:bg-najd-yellow/90 text-najd-blue font-bold">
                <Link href="/register">إنشاء حساب الآن</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
