export const navBarItems = [
  { title: "الرئيسية", id: "main" },
  { title: "الأسعار", id: "prices" },
  { title: "كلم المبيعات", id: "contact" },
];

export const navBarItems2 = [
  { title: "تتبع شحنتك", id: "track" },
  { title: "تسجيل الدخول", id: "login" },
  { title: "ENG", id: "en" },
];

export const dataHandlingAr = [
  {
    state: "DELIVERED",
    textState: "تم تسليم الشحنة",
    color: "green",
    icon1: "greenCheck",
    icon2: "greenCheck",
    icon3: "greenCheck",
    icon4: "greenCheck",
    detail1: "تم انشاء الشحنة",
    detail2: "تم استلام الشحنة من التاجر",
    detail3: "الشحنة خرجت للتسليم",
    detail4: "تم التسلبم",
    all: true,
  },
  {
    state: "CANCELLED",
    textState: "تم الغاء الشاحنة من التاجر",
    color: "red",
    icon1: "redCheck",
    icon2: "redCheck",
    icon3: "redCar",
    icon4: "bag",
    detail1: "تم انشاء الشحنة",
    detail2: "تم استلام الشحنة من التاجر",
    detail3: "الشحنة خرجت للتسليم",
    detail4: "تم التسلبم",
    detail5: "تم الغاء الشحنة من التاجر",
    all: false,
  },
  {
    state: "DELIVERED_TO_SENDER",
    textState: "لم يتم تسليم الشحنة",
    color: "yellow",
    icon1: "yellowCheck",
    icon2: "yellowCheck",
    icon3: "yellowCar",
    icon4: "bag",
    detail1: "تم انشاء الشحنة",
    detail2: "تم استلام الشحنة من التاجر",
    detail3: "الشحنة خرجت للتسليم",
    detail4: "تم التسلبم",
    detail5: "العميل غير متواجد في العنوان",
    all: false,
  },
];
