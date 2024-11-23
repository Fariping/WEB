export default function Home() {
  return (
    <main className="min-h-screen p-4" dir="rtl">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold text-center mb-6">مطعمنا</h1>
        
        {/* قائمة الطعام */}
        <div className="space-y-4">
          <div className="flex justify-between border-b pb-2">
            <span>شاورما</span>
            <span>20 ريال</span>
          </div>
          
          <div className="flex justify-between border-b pb-2">
            <span>برجر</span>
            <span>25 ريال</span>
          </div>
          
          <div className="flex justify-between border-b pb-2">
            <span>كباب</span>
            <span>30 ريال</span>
          </div>
        </div>

        {/* معلومات الاتصال */}
        <div className="mt-8 text-center text-gray-600">
          <p>📞 للطلب: 010001101</p>
          <p>⏰ نفتح من 10 ص - 11 م</p>
        </div>
      </div>
    </main>
  );
}
