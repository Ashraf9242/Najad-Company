import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-najd-blue py-20 text-white">
          <div className="container">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <h1 className="mb-6 text-4xl font-bold md:text-5xl">عن منصة نَجِدْ</h1>
                <p className="mb-8 text-lg text-gray-200">
                  منصة نَجِدْ هي منصة إلكترونية متكاملة تهدف إلى جمع المبتكرين وأصحاب الأفكار المبدعة والشركات والخبراء
                  والمستثمرين والموهوبين في مكان واحد وتوفير بيئة تطوير خصبة.
                </p>
                <Button asChild className="bg-najd-yellow hover:bg-najd-yellow/90 text-najd-blue">
                  <Link href="/register">انضم إلينا</Link>
                </Button>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/images/about-hero.png"
                  width={500}
                  height={400}
                  alt="منصة نجد"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2">
              <div className="rounded-lg border bg-card p-8 shadow-sm">
                <h2 className="mb-4 text-2xl font-bold text-najd-blue">رؤيتنا</h2>
                <p className="text-muted-foreground">
                  أن نكون المنصة الرائدة في دعم الابتكار وريادة الأعمال في المنطقة العربية، من خلال توفير بيئة متكاملة
                  تحمي الأفكار وتدعم تطويرها وتحويلها إلى مشاريع ناجحة.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-8 shadow-sm">
                <h2 className="mb-4 text-2xl font-bold text-najd-blue">رسالتنا</h2>
                <p className="text-muted-foreground">
                  تمكين المبتكرين من تحويل أفكارهم إلى واقع من خلال توفير الحماية الفكرية، والتوجيه المتخصص، وفرص
                  التمويل، وبناء شبكة من العلاقات مع الخبراء والمستثمرين.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Problem & Solution */}
        <section className="bg-gray-50 py-20">
          <div className="container">
            <h2 className="mb-12 text-center text-3xl font-bold text-najd-gray md:text-4xl">المشكلة والحل</h2>
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="rounded-lg bg-white p-8 shadow-sm">
                <h3 className="mb-4 text-xl font-bold text-najd-blue">المشكلة</h3>
                <p className="text-muted-foreground">
                  المبتكرون غالباً ما يواجهون صعوبة في احتضان أفكارهم والحصول على التوجيه المناسب أو الوصول إلى
                  المستثمرين الذين يمكنهم تحويل أفكارهم إلى مشاريع فعلية. بالإضافة إلى ذلك، قد يشعرون بعدم الأمان حول
                  مشاركة أفكارهم خوفاً من فقدان حقوقهم الفكرية أو عدم القدرة على تطويرها بشكل صحيح.
                </p>
                <p className="mt-4 text-muted-foreground">
                  كما أن المستثمرين والشركات قد يواجهون صعوبة في الوصول إلى الأفكار المبتكرة الجديدة التي تتطلب
                  الاستثمار والتنفيذ، وأيضا الأفراد الموهوبون لا يجدون المكان والفريق المناسب لصقل وتطوير مواهبهم
                  وخبراتهم.
                </p>
              </div>
              <div className="rounded-lg bg-white p-8 shadow-sm">
                <h3 className="mb-4 text-xl font-bold text-najd-blue">الحل</h3>
                <p className="text-muted-foreground">
                  إنشاء منصة الكترونية تهدف إلى جمع المبتكرين وأصحاب الأفكار المبدعة والشركات والخبراء والمستثمرين
                  والموهوبين في مكان واحد وتوفير بيئة تطوير خصبة حيث يمكنهم عرض أفكارهم ومشاريعهم الابتكارية للحصول على
                  الدعم والتوجيه من خبراء في مجالات متعددة بعد حصولهم على ملكية فكرية.
                </p>
                <p className="mt-4 text-muted-foreground">
                  بالإضافة إلى إتاحة الفرصة للمستثمرين للاطلاع على هذه الأفكار والاستثمار فيها. ويتم توفير قنوات تواصل
                  بين الشركات والمؤسسات المعنية لتبني الفكرة وطرحها لأخذ آراء وتقييمات من المجتمع.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Target Audience */}
        <section className="py-20">
          <div className="container">
            <h2 className="mb-12 text-center text-3xl font-bold text-najd-gray md:text-4xl">الفئات المستهدفة</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-lg border bg-card p-6 text-center shadow-sm">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-najd-blue/10">
                  <i className="fas fa-lightbulb text-2xl text-najd-blue"></i>
                </div>
                <h3 className="mb-2 text-lg font-bold">المبتكرون ورواد الأعمال</h3>
                <p className="text-sm text-muted-foreground">
                  الذين لديهم أفكار إبداعية ويرغبون في تطويرها والبحث عن تمويل أو توجيه.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6 text-center shadow-sm">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-najd-blue/10">
                  <i className="fas fa-chart-line text-2xl text-najd-blue"></i>
                </div>
                <h3 className="mb-2 text-lg font-bold">المستثمرون</h3>
                <p className="text-sm text-muted-foreground">
                  الذين يبحثون عن فرص استثمارية جديدة في أفكار مبتكرة قابلة للتنفيذ والنمو.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6 text-center shadow-sm">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-najd-blue/10">
                  <i className="fas fa-user-tie text-2xl text-najd-blue"></i>
                </div>
                <h3 className="mb-2 text-lg font-bold">الخبراء والمستشارون</h3>
                <p className="text-sm text-muted-foreground">
                  الذين يمتلكون خبرات في مجالات متعددة مثل التقنية، التسويق، الإدارة، ويرغبون في تقديم دعم أو استشارات.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6 text-center shadow-sm">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-najd-blue/10">
                  <i className="fas fa-building text-2xl text-najd-blue"></i>
                </div>
                <h3 className="mb-2 text-lg font-bold">الشركات والمؤسسات</h3>
                <p className="text-sm text-muted-foreground">
                  التي تبحث عن أفكار جديدة لدمجها في مشاريعها أو الاستثمار فيها.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="bg-najd-blue py-20 text-white">
          <div className="container">
            <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">فريق العمل</h2>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div className="rounded-lg bg-white/10 p-6 text-center">
                <div className="mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full">
                  <Image
                    src="/images/team-1.png"
                    width={100}
                    height={100}
                    alt="أسماء بنت محمد الكلباني"
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mb-1 text-lg font-bold">أسماء بنت محمد الكلباني</h3>
                <p className="mb-3 text-sm text-gray-300">المدير التنفيذي</p>
                <div className="flex justify-center gap-3">
                  <a href="#" className="text-gray-300 hover:text-najd-yellow">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="text-gray-300 hover:text-najd-yellow">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#" className="text-gray-300 hover:text-najd-yellow">
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
              <div className="rounded-lg bg-white/10 p-6 text-center">
                <div className="mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full">
                  <Image
                    src="/images/team-2.png"
                    width={100}
                    height={100}
                    alt="سارة يعقوب الشملي"
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mb-1 text-lg font-bold">سارة يعقوب الشملي</h3>
                <p className="mb-3 text-sm text-gray-300">نائب المدير التنفيذي</p>
                <div className="flex justify-center gap-3">
                  <a href="#" className="text-gray-300 hover:text-najd-yellow">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="text-gray-300 hover:text-najd-yellow">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#" className="text-gray-300 hover:text-najd-yellow">
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
              <div className="rounded-lg bg-white/10 p-6 text-center">
                <div className="mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full">
                  <Image
                    src="/images/team-3.png"
                    width={100}
                    height={100}
                    alt="محمد أشرف علي"
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mb-1 text-lg font-bold">محمد أشرف علي</h3>
                <p className="mb-3 text-sm text-gray-300">مدير التطوير والتكنولجيا</p>
                <div className="flex justify-center gap-3">
                  <a href="#" className="text-gray-300 hover:text-najd-yellow">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="text-gray-300 hover:text-najd-yellow">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#" className="text-gray-300 hover:text-najd-yellow">
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>
              </div>

              <div className="rounded-lg bg-white/10 p-6 text-center">
                <div className="mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full">
                  <Image
                    src="/images/team-4.png"
                    width={100}
                    height={100}
                    alt="عائشة سيف الشهومي"
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mb-1 text-lg font-bold">عائشة سيف الشهومي</h3>
                <p className="mb-3 text-sm text-gray-300">مصمم ومسوق</p>
                <div className="flex justify-center gap-3">
                  <a href="#" className="text-gray-300 hover:text-najd-yellow">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="text-gray-300 hover:text-najd-yellow">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#" className="text-gray-300 hover:text-najd-yellow">
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20">
          <div className="container">
            <div className="rounded-2xl bg-gradient-to-r from-najd-blue to-najd-blue/90 p-8 text-white md:p-12 lg:p-16">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="mb-6 text-3xl font-bold md:text-4xl">هل لديك أسئلة؟</h2>
                <p className="mb-8 text-lg text-gray-200">
                  فريقنا جاهز للإجابة على استفساراتك ومساعدتك في الانضمام إلى منصة نَجِدْ.
                </p>
                <Button asChild size="lg" className="bg-najd-yellow hover:bg-najd-yellow/90 text-najd-blue font-bold">
                  <Link href="/contact">تواصل معنا</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
