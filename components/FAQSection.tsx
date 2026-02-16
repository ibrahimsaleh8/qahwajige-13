"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "ما هي المناطق التي تشملها خدماتكم؟",
    answer:
      "نقدم خدماتنا داخل مدينة الرياض والمناطق القريبة منها، كما يمكن التنسيق لتقديم الخدمة في مناطق أخرى حسب الطلب المسبق.",
  },
  {
    question: "هل تتضمن الخدمة جميع مستلزمات تقديم القهوة؟",
    answer:
      "نعم، نوفر كافة أدوات الضيافة مثل الدلال، الفناجيل، الصواني، والتمر، مع تقديم القهوة العربية بأسلوب أنيق يليق بمناسبتكم.",
  },
  {
    question: "كم عدد الصبابين المناسب لمناسبتي؟",
    answer:
      "يعتمد ذلك على عدد الضيوف وحجم المناسبة، وغالبًا نوصي بصباب واحد لكل 30 إلى 50 ضيف لضمان سرعة الخدمة وجودتها.",
  },
  {
    question: "هل تقدمون الخدمة لجميع أنواع المناسبات؟",
    answer:
      "نعم، نقدم خدماتنا للأعراس، المناسبات العائلية، الاجتماعات الرسمية، والفعاليات الخاصة بمستوى احترافي عالٍ.",
  },
  {
    question: "هل يمكن تخصيص الزي أو أسلوب التقديم؟",
    answer:
      "بالتأكيد، نتيح خيارات متعددة في الزي وطريقة التقديم بما يتناسب مع ذوق العميل وطبيعة المناسبة.",
  },
  {
    question: "كم تستغرق مدة تقديم الخدمة؟",
    answer:
      "مدة الخدمة تختلف حسب حجم المناسبة وعدد الضيوف، ويتم الاتفاق عليها مسبقًا لضمان تغطية المناسبة بالكامل.",
  },
  {
    question: "ما هي طريقة حجز الخدمة؟",
    answer:
      "يمكنك الحجز عبر الاتصال المباشر أو من خلال الواتساب باستخدام الأزرار المخصصة في الموقع، ويفضل الحجز مبكرًا لضمان توفر الموعد.",
  },
  {
    question: "هل يمكن تعديل أو إلغاء الحجز بعد التأكيد؟",
    answer:
      "نعم، يمكن تعديل أو إلغاء الحجز وفق سياسة الحجز الخاصة بنا، وننصح بالتواصل معنا في أقرب وقت عند حدوث أي تغيير.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-main-color mb-4">
            <HelpCircle className="w-6 h-6" />
            <span className="font-bold text-lg">الأسئلة الشائعة</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            إجابات على استفساراتكم
          </h2>
          <p className="text-low-color max-w-2xl mx-auto">
            لقد جمعنا لكم أكثر الأسئلة شيوعًا حول خدماتنا لمساعدتكم في اتخاذ
            القرار المناسب لمناسبتكم.
          </p>
        </div>

        <div className="mx-auto space-y-4 max-w-6xl">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-card-background rounded-xl shadow-sm border border-white/10 overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-5 text-right bg-card-background hover:bg-card-background/90 transition-colors duration-200">
                <h3 className="font-bold text-lg text-black">
                  {item.question}
                </h3>
                <span
                  className={`transform transition-transform duration-300 text-main-color ${
                    openIndex === index ? "rotate-180" : ""
                  }`}>
                  <ChevronDown className="w-6 h-6" />
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}>
                    <p className="px-5 pb-5 text-black leading-relaxed border-t border-white/10 pt-4">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
