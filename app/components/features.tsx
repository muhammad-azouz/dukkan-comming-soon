import { Contact, FolderSync, Receipt, User, Warehouse } from "lucide-react";

const features = [
  {
    name: "الفواتير",
    description: [
      "قم بإنشاء وإرسال الفواتير بسهولة لعملائك.",
      "تتبع حالة الفواتير المستحقة والمدفوعة.",
    ],
    icon: Receipt,
  },
  {
    name: "إدارة العملاء",
    description: [
      "أنشئ ملفات لعملائك وحافظ على تفاصيلهم بسهولة.",
      "قم بتسجيل المعاملات وتاريخ الشراء لكل عميل.",
    ],
    icon: Contact,
  },
  {
    name: "إدارة المخزون",
    description: [
      "تتبع المخزون بكل دقة ودون عناء.",
      "تحديث المستويات وتنبيهات الإعادة الأوتوماتيكية.",
      "  إدارة الفئات والمنتجات بسهولة لتنظيم عملك بشكل فعال.",
    ],
    icon: Warehouse,
  },
  {
    name: "إدارة الموظفين",
    description: [
      "قم بتعيين الموظفين وتعيين الأذونات بناءً على الاحتياجات.",
      "تتبع ساعات العمل والأداء لكل موظف.",
      "إمكانية توفير تقارير عن الأداء لتحسين كفاءة العمل.",
    ],
    icon: User,
  },
  {
    name: "مزامنة البيانات",
    description: [
      "تزامن بياناتك عبر مختلف الأجهزة بسهولة.",
      "تأكد من أن لديك الوصول إلى معلوماتك في أي وقت ومن أي مكان.",
      "تجربة سلسة ومتكاملة دون فقدان البيانات أو الوقت.",
    ],
    icon: FolderSync,
  },
];

export default function Features() {
  return (
    <div className="bg-white mt-10 py-24 sm:py-32 bg-gradient-to-b top-[-100px] from-indigo-400 to-blue-400 relative before:border-b-[5vh] before:block before:border-l-[100vw] before:border-l-transparent before:border-b-indigo-400 before:h-0 before:left-0 before:right-0 before:bottom-full before:w-0 before:absolute">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
            كل ما تحتاج لتبدا عملك
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-200">
            مرحبًا بك في تطبيق دٌكان عبر الويب اجعل عملك أكثر فاعلية مع نظامنا
            السلس والقوي. تجربة سلسة وموثوقة لإدارة مبيعاتك بسهولة.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pr-16">
                <dt className="text-base font-semibold leading-7 text-gray-100">
                  <div className="absolute right-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      strokeWidth={1.5}
                      className="h-7 w-7 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-200">
                  <ul>
                    {feature.description.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
