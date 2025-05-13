// Simulated API service

// Types
export interface User {
  id: string
  name: string
  email: string
  userType: string
  avatar?: string
  bio?: string
  createdAt: string
}

export interface Idea {
  id: number
  title: string
  description: string
  category: string
  author: string
  authorId: string
  badge: string
  badgeColor: string
  image: string
  views: number
  likes: number
  createdAt: string
  stage: string
  isPatented: boolean
}

export interface LibraryItem {
  id: number
  title: string
  description: string
  type: "video" | "document" | "course" | "tip"
  thumbnail: string
  author: string
  createdAt: string
  duration?: string
  fileSize?: string
  url: string
}

// Fake data
const users: User[] = [
  {
    id: "u1",
    name: "محمد أشرف",
    email: "mohammed@example.com",
    userType: "innovator",
    avatar: "/placeholder.svg?height=100&width=100",
    bio: "مبتكر ومطور مشاريع ناشئة في مجالات التقنية والذكاء الاصطناعي.",
    createdAt: "2023-01-15",
  },
  {
    id: "u2",
    name: "سارة يعقوب",
    email: "sarah@example.com",
    userType: "innovator",
    avatar: "/placeholder.svg?height=100&width=100",
    bio: "مهتمة بالابتكار في مجال الصحة والتكنولوجيا الطبية.",
    createdAt: "2023-02-20",
  },
  {
    id: "u3",
    name: "أحمد خالد",
    email: "ahmed@example.com",
    userType: "investor",
    avatar: "/placeholder.svg?height=100&width=100",
    bio: "مستثمر في مجال التكنولوجيا والمشاريع الناشئة.",
    createdAt: "2022-11-05",
  },
  {
    id: "u4",
    name: "فاطمة علي",
    email: "fatima@example.com",
    userType: "expert",
    avatar: "/placeholder.svg?height=100&width=100",
    bio: "خبيرة في مجال التسويق الرقمي وتطوير الأعمال.",
    createdAt: "2023-03-10",
  },
]

const ideas: Idea[] = [
  {
    id: 1,
    title: "نظام ذكي لإدارة المياه",
    description:
      "نظام مبتكر يستخدم الذكاء الاصطناعي لترشيد استهلاك المياه في المباني السكنية والتجارية. يعتمد النظام على مجموعة من أجهزة الاستشعار التي تراقب استهلاك المياه وتكتشف التسربات وتقدم توصيات لتحسين كفاءة الاستخدام. يمكن للنظام توفير ما يصل إلى 30% من استهلاك المياه، مما يساهم في الحفاظ على الموارد المائية وتقليل فواتير المياه.",
    category: "تقنية",
    author: "محمد أشرف",
    authorId: "u1",
    badge: "مميز",
    badgeColor: "featured",
    image: "/placeholder.svg?height=200&width=300",
    views: 1250,
    likes: 320,
    createdAt: "2023-05-15",
    stage: "prototype",
    isPatented: true,
  },
  {
    id: 2,
    title: "تطبيق متابعة الحالة الصحية",
    description:
      "تطبيق ذكي يساعد المرضى على متابعة حالتهم الصحية وتذكيرهم بمواعيد الأدوية والفحوصات الدورية. يتيح التطبيق للمستخدمين تسجيل مؤشراتهم الحيوية مثل ضغط الدم ومستوى السكر ومعدل ضربات القلب، ويقدم تقارير دورية يمكن مشاركتها مع الأطباء. كما يتضمن التطبيق نظام تنبيهات ذكي يذكر المستخدم بمواعيد تناول الأدوية والفحوصات الطبية.",
    category: "صحة",
    author: "سارة يعقوب",
    authorId: "u2",
    badge: "جديد",
    badgeColor: "new",
    image: "/placeholder.svg?height=200&width=300",
    views: 850,
    likes: 210,
    createdAt: "2023-06-20",
    stage: "development",
    isPatented: false,
  },
  {
    id: 3,
    title: "منصة التعلم التفاعلي",
    description:
      "منصة تعليمية تفاعلية تستخدم الواقع المعزز لتحسين تجربة التعلم للطلاب في المراحل المختلفة. توفر المنصة محتوى تعليمي تفاعلي في مختلف المواد الدراسية، مع تمارين وأنشطة تعتمد على تقنيات الواقع المعزز لجعل التعلم أكثر متعة وفعالية. تتضمن المنصة أيضًا نظام تقييم ومتابعة يساعد المعلمين وأولياء الأمور على متابعة تقدم الطلاب.",
    category: "تعليم",
    author: "عائشة سيف",
    authorId: "u4",
    badge: "قيد التطوير",
    badgeColor: "development",
    image: "/placeholder.svg?height=200&width=300",
    views: 1100,
    likes: 280,
    createdAt: "2023-04-10",
    stage: "testing",
    isPatented: true,
  },
  {
    id: 4,
    title: "روبوت مساعد للمسنين",
    description:
      "روبوت ذكي يساعد كبار السن في المهام اليومية ويراقب حالتهم الصحية ويتواصل مع الأطباء عند الحاجة. يمكن للروبوت تقديم المساعدة في تناول الأدوية، وتذكير المسنين بالمواعيد المهمة، وإجراء مكالمات الطوارئ عند الحاجة. كما يمكنه مراقبة المؤشرات الحيوية وإرسال تقارير دورية إلى الأطباء أو أفراد العائلة.",
    category: "تقنية",
    author: "محمد أشرف",
    authorId: "u1",
    badge: "مميز",
    badgeColor: "featured",
    image: "/placeholder.svg?height=200&width=300",
    views: 950,
    likes: 240,
    createdAt: "2023-03-05",
    stage: "concept",
    isPatented: false,
  },
  {
    id: 5,
    title: "نظام إعادة تدوير مبتكر",
    description:
      "نظام مبتكر لإعادة تدوير النفايات المنزلية وتحويلها إلى منتجات قابلة للاستخدام. يعتمد النظام على تقنيات متطورة لفرز النفايات وتحويلها إلى مواد أولية يمكن استخدامها في صناعة منتجات جديدة. يساهم النظام في تقليل كمية النفايات التي تذهب إلى مكبات النفايات، ويوفر فرص عمل جديدة في مجال إعادة التدوير.",
    category: "بيئة",
    author: "عائشة سيف",
    authorId: "u4",
    badge: "جديد",
    badgeColor: "new",
    image: "/placeholder.svg?height=200&width=300",
    views: 750,
    likes: 180,
    createdAt: "2023-07-12",
    stage: "prototype",
    isPatented: true,
  },
  {
    id: 6,
    title: "منصة للتجارة الإلكترونية المحلية",
    description:
      "منصة تجمع المنتجات المحلية وتسهل عملية بيعها وتوصيلها للمستهلكين. تهدف المنصة إلى دعم المنتجين المحليين وتوفير منصة سهلة الاستخدام لعرض منتجاتهم والوصول إلى عملاء جدد. تتضمن المنصة نظام دفع آمن ونظام توصيل فعال، بالإضافة إلى نظام تقييم يساعد المستهلكين على اختيار المنتجات ذات الجودة العالية.",
    category: "أعمال",
    author: "فاطمة علي",
    authorId: "u4",
    badge: "قيد التطوير",
    badgeColor: "development",
    image: "/placeholder.svg?height=200&width=300",
    views: 650,
    likes: 150,
    createdAt: "2023-08-01",
    stage: "development",
    isPatented: false,
  },
]

const libraryItems: LibraryItem[] = [
  {
    id: 1,
    title: "أساسيات ريادة الأعمال",
    description: "تعرف على المفاهيم الأساسية في ريادة الأعمال وكيفية بدء مشروعك الخاص بنجاح.",
    type: "video",
    thumbnail: "/placeholder.svg?height=200&width=300",
    author: "د. أحمد محمد",
    createdAt: "2023-01-15",
    duration: "45 دقيقة",
    url: "#",
  },
  {
    id: 2,
    title: "كيفية حماية الملكية الفكرية",
    description: "دليل شامل حول حماية أفكارك وابتكاراتك قانونياً وضمان حقوقك الفكرية.",
    type: "video",
    thumbnail: "/placeholder.svg?height=200&width=300",
    author: "أ. سارة علي",
    createdAt: "2023-02-20",
    duration: "30 دقيقة",
    url: "#",
  },
  {
    id: 3,
    title: "استراتيجيات جذب المستثمرين",
    description: "تعلم كيفية إعداد عرض تقديمي مقنع وجذب اهتمام المستثمرين لمشروعك.",
    type: "video",
    thumbnail: "/placeholder.svg?height=200&width=300",
    author: "م. خالد عبدالله",
    createdAt: "2023-03-10",
    duration: "50 دقيقة",
    url: "#",
  },
  {
    id: 4,
    title: "دليل إعداد خطة العمل",
    description: "دليل شامل لإعداد خطة عمل احترافية تساعدك في تخطيط مشروعك وجذب المستثمرين.",
    type: "document",
    thumbnail: "/placeholder.svg?height=200&width=300",
    author: "د. فاطمة أحمد",
    createdAt: "2023-04-05",
    fileSize: "2.5 MB",
    url: "#",
  },
  {
    id: 5,
    title: "نماذج العقود القانونية",
    description: "مجموعة من نماذج العقود القانونية التي قد تحتاجها في مشروعك، مثل عقود الشراكة والاستثمار.",
    type: "document",
    thumbnail: "/placeholder.svg?height=200&width=300",
    author: "أ. محمد علي",
    createdAt: "2023-05-12",
    fileSize: "3.2 MB",
    url: "#",
  },
  {
    id: 6,
    title: "دراسات حالة لمشاريع ناجحة",
    description: "مجموعة من دراسات الحالة لمشاريع ناجحة، تحليل لعوامل نجاحها والدروس المستفادة منها.",
    type: "document",
    thumbnail: "/placeholder.svg?height=200&width=300",
    author: "د. سعيد محمد",
    createdAt: "2023-06-18",
    fileSize: "4.1 MB",
    url: "#",
  },
  {
    id: 7,
    title: "دورة ريادة الأعمال الشاملة",
    description: "دورة شاملة تغطي جميع جوانب ريادة الأعمال من الفكرة إلى التنفيذ والنمو.",
    type: "course",
    thumbnail: "/placeholder.svg?height=200&width=300",
    author: "د. أحمد محمد",
    createdAt: "2023-01-30",
    duration: "8 أسابيع",
    url: "#",
  },
  {
    id: 8,
    title: "التسويق للمشاريع الناشئة",
    description: "تعلم استراتيجيات التسويق الفعالة للمشاريع الناشئة بميزانية محدودة.",
    type: "course",
    thumbnail: "/placeholder.svg?height=200&width=300",
    author: "أ. سارة علي",
    createdAt: "2023-02-28",
    duration: "4 أسابيع",
    url: "#",
  },
  {
    id: 9,
    title: "إدارة المالية للمشاريع",
    description: "دورة متخصصة في إدارة المالية للمشاريع الناشئة، من التخطيط المالي إلى إدارة التدفق النقدي.",
    type: "course",
    thumbnail: "/placeholder.svg?height=200&width=300",
    author: "د. خالد عبدالله",
    createdAt: "2023-03-15",
    duration: "6 أسابيع",
    url: "#",
  },
]

// Simulated API functions
export const api = {
  // Auth
  login: async (email: string, password: string): Promise<{ user: User; token: string }> => {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 800))

    // Find user by email (in a real app, we'd check password too)
    const user = users.find((u) => u.email === email)

    if (!user) {
      throw new Error("Invalid email or password")
    }

    return {
      user,
      token: "fake-jwt-token-" + Math.random().toString(36).substring(2),
    }
  },

  register: async (userData: { name: string; email: string; userType: string; password: string }): Promise<{
    user: User
    token: string
  }> => {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Check if email already exists
    if (users.find((u) => u.email === userData.email)) {
      throw new Error("Email already in use")
    }

    // Create new user
    const newUser: User = {
      id: "u" + (users.length + 1),
      name: userData.name,
      email: userData.email,
      userType: userData.userType,
      avatar: "/placeholder.svg?height=100&width=100",
      createdAt: new Date().toISOString().split("T")[0],
    }

    // In a real app, we'd save the user to the database
    users.push(newUser)

    return {
      user: newUser,
      token: "fake-jwt-token-" + Math.random().toString(36).substring(2),
    }
  },

  // Ideas
  getIdeas: async (filters?: { category?: string; badge?: string; stage?: string; search?: string }): Promise<
    Idea[]
  > => {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 600))

    let filteredIdeas = [...ideas]

    if (filters) {
      if (filters.category && filters.category !== "all") {
        filteredIdeas = filteredIdeas.filter((idea) => idea.category === filters.category)
      }

      if (filters.badge && filters.badge !== "all") {
        filteredIdeas = filteredIdeas.filter((idea) => idea.badge === filters.badge)
      }

      if (filters.stage && filters.stage !== "all") {
        filteredIdeas = filteredIdeas.filter((idea) => idea.stage === filters.stage)
      }

      if (filters.search) {
        const searchLower = filters.search.toLowerCase()
        filteredIdeas = filteredIdeas.filter(
          (idea) =>
            idea.title.toLowerCase().includes(searchLower) || idea.description.toLowerCase().includes(searchLower),
        )
      }
    }

    return filteredIdeas
  },

  getIdeaById: async (id: number): Promise<Idea | null> => {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    const idea = ideas.find((i) => i.id === id)
    return idea || null
  },

  addIdea: async (ideaData: {
    title: string
    description: string
    category: string
    patentRequest: boolean
  }): Promise<Idea> => {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1200))

    // Create new idea
    const newIdea: Idea = {
      id: ideas.length + 1,
      title: ideaData.title,
      description: ideaData.description,
      category: ideaData.category,
      author: "محمد أشرف", // In a real app, this would be the current user
      authorId: "u1",
      badge: "جديد",
      badgeColor: "new",
      image: "/placeholder.svg?height=200&width=300",
      views: 0,
      likes: 0,
      createdAt: new Date().toISOString().split("T")[0],
      stage: "concept",
      isPatented: ideaData.patentRequest,
    }

    // In a real app, we'd save the idea to the database
    ideas.push(newIdea)

    return newIdea
  },

  // Library
  getLibraryItems: async (type?: "video" | "document" | "course" | "tip"): Promise<LibraryItem[]> => {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 700))

    if (type) {
      return libraryItems.filter((item) => item.type === type)
    }

    return libraryItems
  },

  // Contact
  sendContactMessage: async (messageData: { name: string; email: string; subject: string; message: string }): Promise<{
    success: boolean
    message: string
  }> => {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // In a real app, we'd save the message to the database or send an email

    return {
      success: true,
      message: "تم إرسال رسالتك بنجاح. سنقوم بالرد عليك في أقرب وقت ممكن.",
    }
  },
}
