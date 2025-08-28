import { Check } from 'lucide-react';

const benefits = [
  "Hisob-kitobni asos andozani 0 dan o'rgataman (amaliy);",
  "Oddiy andozadan noodatiy fason chiqarish sirlari bilan o'rtoqlashaman;",
  "Noodatiy fasondagi kasetni eng so'nggi texnikalar yordamida bichish jarayonini ko'rib chiqamiz (amaliy);",
  "Chet el brend kiyimlarini uslubida libos tikishni ko'rsatib beraman;",
  "Haqiqiy tikuvchilikdagi professional yondashuvni o'rganasiz."
];

const BenefitsList = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold text-foreground mb-6">Masterklass davomida</h3>
      <ul className="space-y-3">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="bg-success rounded-full p-1 mt-1 flex-shrink-0">
              <Check className="w-4 h-4 text-success-foreground" />
            </div>
            <span className="text-foreground leading-relaxed">{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BenefitsList;