export default function CommentsSection() {
  return (
    <section className="py-24 bg-brand-bg relative">
      <svg
        className="absolute top-10 right-10 w-16 h-16 text-brand-primary opacity-10 animate-pulse"
        viewBox="0 0 24 24"
        fill="currentColor">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-primary text-center mb-16">
          ماذا يقول عملاؤنا؟
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-card shadow-soft flex gap-6 items-start">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=100&h=100"
              alt="Customer"
              className="w-16 h-16 rounded-full object-cover border-4 border-brand-bg flex-shrink-0"
            />
            <div>
              <div className="flex text-yellow-400 mb-2">★★★★★</div>
              <p className="text-brand-text leading-relaxed mb-4 text-sm font-medium">
                خدمة ممتازة وفريق عمل محترم جداً. وصلوا قبل الموعد وكانوا في قمة
                الاحترافية. القهوة كانت مضبوطة والضيوف انبسطوا.
              </p>
              <p className="font-bold text-brand-primary">عبدالرحمن الزهراني</p>
              <span className="text-xs text-brand-lightText">مناسبة زواج</span>
            </div>
          </div>
          <div className="bg-white p-8 rounded-card shadow-soft flex gap-6 items-start">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=100&h=100"
              alt="Customer"
              className="w-16 h-16 rounded-full object-cover border-4 border-brand-bg flex-shrink-0"
            />
            <div>
              <div className="flex text-yellow-400 mb-2">★★★★★</div>
              <p className="text-brand-text leading-relaxed mb-4 text-sm font-medium">
                تعامل راقي وخدمة تبيض الوجه. التمور كانت فاخرة والتقديم نظيف
                جداً. شكراً لكم على هذا المستوى.
              </p>
              <p className="font-bold text-brand-primary">محمد العتيبي</p>
              <span className="text-xs text-brand-lightText">عشاء عمل</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
