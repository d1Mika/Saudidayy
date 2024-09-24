import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Rocket, Building, TreePine, GraduationCap, Train, Sun, Box, Eye, Crown, History } from "lucide-react"
import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans" dir="rtl">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@400;700&family=Amiri:wght@400;700&display=swap');
        body {
          font-family: 'Amiri', serif;
        }
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Tajawal', sans-serif;
        }
      `}</style>
      
      <header className="bg-gradient-to-l from-green-600 to-green-700 text-white py-6">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold">اليوم الوطني السعودي 94</h1>
          <nav>
            <ul className="flex space-x-6 space-x-reverse text-lg">
              <li><a href="#history" className="hover:underline">التاريخ</a></li>
              <li><a href="#vision2030" className="hover:underline">رؤية 2030</a></li>
              <li><a href="#achievements" className="hover:underline">الإنجازات</a></li>
              <li><a href="#projects" className="hover:underline">المشاريع</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-[url('/placeholder.svg?height=400&width=800')] bg-cover bg-center py-32 text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">نحلم ونحقق</h2>
            <p className="text-2xl md:text-3xl mb-10 leading-relaxed">نحتفل بتقدم المملكة العربية السعودية ورؤيتها</p>
            <Button className="bg-white text-green-700 hover:bg-green-100 text-lg py-3 px-8">اعرف المزيد</Button>
          </div>
        </section>

        <section id="history" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-green-800">تاريخ المملكة العربية السعودية وملوكها</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl text-green-700">
                    <History className="ml-3 text-green-600" />
                    تأسيس المملكة
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <Image
                      src="/placeholder.svg?height=200&width=400&text=تأسيس+المملكة"
                      alt="صورة توضيحية لتأسيس المملكة العربية السعودية"
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                  <p className="text-lg leading-relaxed mb-4">تأسست المملكة العربية السعودية الحديثة على يد الملك عبد العزيز آل سعود عام 1932م.</p>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-lg font-semibold">مراحل التأسيس</AccordionTrigger>
                      <AccordionContent className="text-base leading-relaxed">
                        <ul className="list-disc list-inside space-y-2">
                          <li>استعادة الرياض عام 1902م.</li>
                          <li>توحيد نجد عام 1922م.</li>
                          <li>ضم الحجاز عام 1925م.</li>
                          <li>إعلان تأسيس المملكة العربية السعودية في 23 سبتمبر 1932م.</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl text-green-700">
                    <Crown className="ml-3 text-green-600" />
                    ملوك المملكة
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <Image
                      src="/placeholder.svg?height=200&width=400&text=ملوك+المملكة"
                      alt="صورة تمثل ملوك المملكة العربية السعودية"
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                  <p className="text-lg leading-relaxed mb-4">تعاقب على حكم المملكة العربية السعودية سبعة ملوك منذ تأسيسها.</p>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-lg font-semibold">قائمة الملوك</AccordionTrigger>
                      <AccordionContent className="text-base leading-relaxed">
                        <ul className="list-disc list-inside space-y-2">
                          <li>الملك عبد العزيز آل سعود (1932-1953)</li>
                          <li>الملك سعود بن عبد العزيز آل سعود (1953-1964)</li>
                          <li>الملك فيصل بن عبد العزيز آل سعود (1964-1975)</li>
                          <li>الملك خالد بن عبد العزيز آل سعود (1975-1982)</li>
                          <li>الملك فهد بن عبد العزيز آل سعود (1982-2005)</li>
                          <li>الملك عبد الله بن عبد العزيز آل سعود (2005-2015)</li>
                          <li>الملك سلمان بن عبد العزيز آل سعود (2015-الآن)</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="vision2030" className="py-20 bg-green-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-green-800">رؤية السعودية 2030</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl text-green-700">
                    <Eye className="ml-3 text-green-600" />
                    مجتمع حيوي
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <Image
                      src="/placeholder.svg?height=200&width=400&text=مجتمع+حيوي"
                      alt="صورة توضيحية لمجتمع حيوي تظهر أشخاصًا يشاركون في أنشطة متنوعة"
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                  <p className="text-lg leading-relaxed mb-4">بناء مجتمع نابض بالحياة يعيش أفراده وفق المبادئ الإسلامية ومنهج الوسطية.</p>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-lg font-semibold">أهداف المجتمع الحيوي</AccordionTrigger>
                      <AccordionContent className="text-base leading-relaxed">
                        <ul className="list-disc list-inside space-y-2">
                          <li>زيادة متوسط العمر المتوقع من 74 إلى 80 عامًا.</li>
                          <li>الوصول بـ 3 مدن سعودية لتكون من أفضل 100 مدينة في العالم.</li>
                          <li>زيادة إنفاق الأسر على الثقافة والترفيه من 2.9% إلى 6%.</li>
                          <li>رفع نسبة ممارسي الرياضة مرة على الأقل أسبوعيًا من 13% إلى 40%.</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl text-green-700">
                    <Eye className="ml-3 text-green-600" />
                    اقتصاد مزدهر
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <Image
                      src="/placeholder.svg?height=200&width=400&text=اقتصاد+مزدهر"
                      alt="صورة توضيحية لاقتصاد مزدهر تظهر مشاريع تنموية وأسواق نشطة"
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                  <p className="text-lg leading-relaxed mb-4">توفير الفرص للجميع عبر بناء منظومة تعليمية مرتبطة باحتياجات سوق العمل.</p>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-lg font-semibold">أهداف الاقتصاد المزدهر</AccordionTrigger>
                      <AccordionContent className="text-base leading-relaxed">
                        <ul className="list-disc list-inside space-y-2">
                          <li>خفض معدل البطالة من 11.6% إلى 7%.</li>
                          <li>زيادة مساهمة المنشآت الصغيرة والمتوسطة في الناتج المحلي من 20% إلى 35%.</li>
                          <li>رفع نسبة المحتوى المحلي في قطاع النفط والغاز من 40% إلى 75%.</li>
                          <li>زيادة الاستثمارات الأجنبية المباشرة من 3.8% إلى المعدل العالمي 5.7%.</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl text-green-700">
                    <Eye className="ml-3 text-green-600" />
                    وطن طموح
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <Image
                      src="/placeholder.svg?height=200&width=400&text=وطن+طموح"
                      alt="صورة توضيحية لوطن طموح تظهر مواطنين يشاركون في صنع القرار وتطوير المجتمع"
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                  <p className="text-lg leading-relaxed mb-4">بناء حكومة فاعلة وتمكين المواطنين من المساهمة في تحقيق رؤية الوطن.</p>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-lg font-semibold">أهدا الوطن الطموح</AccordionTrigger>
                      <AccordionContent className="text-base leading-relaxed">
                        <ul className="list-disc list-inside space-y-2">
                          <li>رفع نسبة مدخرات الأسر من إجمالي دخلها من 6% إلى 10%.</li>
                          <li>رفع مساهمة القطاع غير الربحي في الناتج المحلي من أقل من 1% إلى 5%.</li>
                          <li>الوصول إلى 1 مليون متطوع في القطاع غير الربحي سنويًا مقابل 11 ألف الآن.</li>
                          <li>رفع تصنيف المملكة في مؤشر الحكومات الإلكترونية من المرتبة 36 إلى المراتب الـ 5 الأولى.</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="achievements" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-green-800">إنجازات المملكة العربية السعودية</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl text-green-700">
                    <MapPin className="ml-3 text-green-600" />
                    نيوم
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <Image
                      src="/placeholder.svg?height=200&width=400&text=نيوم"
                      alt="صورة توضيحية لمشروع نيوم تظهر تصميم المدينة المستقبلية"
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                  <p className="text-lg leading-relaxed mb-4">مشروع مدينة ضخمة بقيمة 500 مليار دولار، يدفع حدود الابتكار والاستدامة.</p>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-lg font-semibold">تفاصيل المشروع</AccordionTrigger>
                      <AccordionContent className="text-base leading-relaxed">
                        <ul className="list-disc list-inside space-y-2">
                          <li>مساحة تبلغ 26,500 كيلومتر مربع.</li>
                          <li>تشمل مدينة "ذا لاين" الخطية بطول 170 كم.</li>
                          <li>تعتمد بالكامل على الطاقة المتجددة.</li>
                          <li>تهدف لاستقطاب مليون ساكن بحلول عام 2030.</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl text-green-700">
                    <Rocket className="ml-3 text-green-600" />
                    برنامج الفضاء
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <Image
                      src="/placeholder.svg?height=200&width=400&text=برنامج+الفضاء"
                      alt="صورة توضيحية لبرنامج الفضاء السعودي تظهر رواد فضاء ومركبة فضائية"
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                  <p className="text-lg leading-relaxed mb-4">إطلاق أول رواد فضاء سعوديين إلى محطة الفضاء الدولية.</p>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-lg font-semibold">إنجازات البرنامج</AccordionTrigger>
                      <AccordionContent className="text-base leading-relaxed">
                        <ul className="list-disc list-inside space-y-2">
                          <li>إرسال رائدي الفضاء علي القرني وريانة برناوي إلى محطة الفضاء الدولية.</li>
                          <li>إطلاق 17 قمراً صناعياً سعودياً إلى الفضاء.</li>
                          <li>تأسيس مركز الأمير سلطان بن عبدالعزيز للعلوم والتقنية الفضائية.</li>
                          <li>تطوير تقنيات الأقمار الصناعية محلياً.</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl text-green-700">
                    <Building className="ml-3 text-green-600" />
                    التنويع الاقتصادي
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <Image
                      src="/placeholder.svg?height=200&width=400&text=التنويع+الاقتصادي"
                      alt="صورة توضيحية للتنويع الاقتصادي تظهر مختلف القطاعات الاقتصادية"
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                  <p className="text-lg leading-relaxed mb-4">تقدم كبير في تقليل الاعتماد على النفط وتعزيز الصناعات الجديدة.</p>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-lg font-semibold">مجالات التنويع</AccordionTrigger>
                      <AccordionContent className="text-base leading-relaxed">
                        <ul className="list-disc list-inside space-y-2">
                          <li>زيادة مساهمة القطاع الخاص في الناتج المحلي الإجمالي إلى 65%.</li>
                          <li>تطوير قطاع السياحة ليساهم بـ 10% من الناتج المحلي الإجمالي.</li>
                          <li>زيادة الصادرات غير النفطية من 16% إلى 50% من إجمالي الصادرات.</li>
                          <li>تنمية قطاع التعدين ليساهم بـ 97 مليار ريال في الناتج المحلي الإجمالي.</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="projects" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-green-800">مشاريع المملكة العربية السعودية</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl text-green-700">
                    <TreePine className="ml-3 text-green-600" />
                    المبادرة السعودية الخضراء
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <Image
                      src="/placeholder.svg?height=300&width=600&text=المبادرة+السعودية+الخضراء"
                      alt="صورة توضيحية للمبادرة السعودية الخضراء تظهر مساحات خضراء واسعة"
                      width={600}
                      height={300}
                      className="w-full h-56 object-cover rounded-lg"
                    />
                  </div>
                  <p className="text-lg mb-6 leading-relaxed">زراعة 10 مليارات شجرة وتقليل انبعاثات الكربون لمكافحة تغير المناخ.</p>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-lg font-semibold">أهداف المبادرة</AccordionTrigger>
                      <AccordionContent className="text-base leading-relaxed">
                        <ul className="list-disc list-inside space-y-2">
                          <li>زراعة 10 مليارات شجرة في جميع أنحاء المملكة.</li>
                          <li>خفض الانبعاثات الكربونية بنسبة 4% من المساهمات العالمية.</li>
                          <li>زيادة نسبة المناطق المحمية إلى أكثر من 30% من مساحة المملكة.</li>
                          <li>تحويل 50% من إنتاج الكهرباء إلى مصادر الطاقة المتجددة بحلول عام 2030.</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl text-green-700">
                    <Building className="ml-3 text-green-600" />
                    القدية
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <Image
                      src="/placeholder.svg?height=300&width=600&text=مشروع+القدية"
                      alt="تصور فني لمشروع القدية يظهر المرافق الترفيهية والرياضية"
                      width={600}
                      height={300}
                      className="w-full h-56 object-cover rounded-lg"
                    />
                  </div>
                  <p className="text-lg mb-6 leading-relaxed">مشروع مدينة ترفيهية ضخمة تهدف إلى تعزيز السياحة وجودة الحياة.</p>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-lg font-semibold">تفاصيل المشروع</AccordionTrigger>
                      <AccordionContent className="text-base leading-relaxed">
                        <ul className="list-disc list-inside space-y-2">
                          <li>مساحة إجمالية تبلغ 334 كيلومتر مربع.</li>
                          <li>يضم أكبر مدينة ألعاب في المنطقة (Six Flags Qiddiya).</li>
                          <li>يشمل مرافق رياضية عالمية ومراكز ثقافية وفنية.</li>
                          <li>من المتوقع أن يستقبل 17 مليون زائر سنوياً بحلول عام 2030.</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl text-green-700">
                    <Sun className="ml-3 text-green-600" />
                    مشروع الطاقة الشمسية
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <Image
                      src="/placeholder.svg?height=300&width=600&text=مشروع+الطاقة+الشمسية"
                      alt="صورة لمحطة طاقة شمسية ضخمة في الصحراء"
                      width={600}
                      height={300}
                      className="w-full h-56 object-cover rounded-lg"
                    />
                  </div>
                  <p className="text-lg mb-6 leading-relaxed">بناء أكبر محطة للطاقة الشمسية في العالم لتعزيز مصادر الطاقة المتجددة.</p>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-lg font-semibold">أهداف المشروع</AccordionTrigger>
                      <AccordionContent className="text-base leading-relaxed">
                        <ul className="list-disc list-inside space-y-2">
                          <li>إنتاج 200 جيجاواط من الطاقة الشمسية بحلول عام 2030.</li>
                          <li>خفض انبعاثات الكربون بمقدار 130 مليون طن سنوياً.</li>
                          <li>توفير 100 ألف وظيفة في قطاع الطاقة المتجددة.</li>
                          <li>تقليل الاعتماد على الوقود الأحفوري في إنتاج الكهرباء.</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl text-green-700">
                    <Box className="ml-3 text-green-600" />
                    المكعب
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <Image
                      src="/placeholder.svg?height=300&width=600&text=مشروع+المكعب"
                      alt="تصميم معماري لمشروع المكعب يظهر المبنى الضخم على شكل مكعب"
                      width={600}
                      height={300}
                      className="w-full h-56 object-cover rounded-lg"
                    />
                  </div>
                  <p className="text-lg mb-6 leading-relaxed">مركز ثقافي وترفيهي مبتكر في قلب الرياض، يجمع بين التكنولوجيا والفن والثقافة.</p>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-lg font-semibold">مميزات المشروع</AccordionTrigger>
                      <AccordionContent className="text-base leading-relaxed">
                        <ul className="list-disc list-inside space-y-2">
                          <li>تصميم معماري فريد على شكل مكعب بارتفاع 400 متر.</li>
                          <li>يضم مسرحاً بسعة 15,000 مقعد لاستضافة الفعاليات الكبرى.</li>
                          <li>يحتوي على متحف تفاعلي للفنون الرقمية والتقليدية.</li>
                          <li>يوفر مساحات للمطاعم والمقاهي والمتاجر الفاخرة.</li>
                          <li>يتضمن منصة مراقبة على السطح توفر إطلالات بانورامية على الرياض.</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-green-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <h3 className="text-2xl font-bold mb-4">عن المناسبة</h3>
              <p className="text-lg leading-relaxed">نحتفل باليوم الوطني السعودي الـ 94 ورحلة التقدم والابتكار الرائعة للمملكة.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">عمل الطلاب</h3>
              <ul className="space-y-2 text-lg">
                <li>عبدالملك العربي</li>
                <li>وسام المجنوني</li>
                <li>عبدالله وليد</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">تواصل معنا</h3>
              <p className="text-lg leading-relaxed">تابعنا على وسائل التواصل الاجتماعي لمزيد من التحديثات حول تقدم المملكة العربية السعودية.</p>
              <div className="flex space-x-4 space-x-reverse mt-4">
                {/* أضف أيقونات وسائل التواصل الاجتماعي هنا */}
              </div>
            </div>
          </div>
          <div className="mt-10 text-center">
            <p className="text-lg">جميع الحقوق محفوظة © 2023 اليوم الوطني السعودي 94</p>
          </div>
        </div>
      </footer>
    </div>
  )
}