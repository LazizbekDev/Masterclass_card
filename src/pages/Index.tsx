import { Calendar, Clock, Send } from "lucide-react";
import instructorImage from "../assets/instructor.png";
import CountdownTimer from "../components/CountdownTimer";
import { Button } from "../components/ui/button";
import BenefitsList from "../components/BenefitsList";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-8 pb-16">
        <div className="text-center space-y-6">
          {/* Price Section */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-2xl text-muted-foreground line-through">999 000 so'm</span>
            <span className="bg-accent text-accent-foreground px-4 py-2 rounded-lg font-bold text-xl">
              BEPUL
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl font-black text-maroon tracking-tight">
            RO'YXATDAN O'TISH
          </h1>

          {/* Subtitle with urgency */}
          <p className="text-xl text-foreground font-medium">
            Shoshiling! Joylar soni <span className="text-accent font-bold">o'z qoldi.</span>
          </p>

          {/* Countdown Timer */}
          <div className="flex justify-center">
            <CountdownTimer />
          </div>

          {/* Event Details */}
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto border border-white/30">
            <div className="flex items-center justify-between text-maroon">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span className="font-semibold">21-22-23-avgust</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span className="font-bold text-xl">20:30</span>
              </div>
            </div>
          </div>

          {/* Main CTA */}
          <div className="pt-4">
            <Button 
              variant="maroon"
              className="w-full max-w-md mx-auto"
              onClick={() => window.open('https://t.me/masterkomo', '_blank')}
            >
              RO'YXATDAN O'TISH
            </Button>
          </div>
        </div>
      </div>

      {/* Instructor Section */}
      <div className="bg-white/10 backdrop-blur-sm py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">
                BEPUL <span className="text-maroon">MASTERKLASS</span>
              </h2>
              <BenefitsList />
            </div>
            <div className="text-center">
              <img 
                src={instructorImage} 
                alt="Master Komo - Professional instructor" 
                className="w-full max-w-sm mx-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h3 className="text-2xl font-bold text-foreground">Master Komo Academy haqida</h3>
            <p className="text-lg text-foreground leading-relaxed">
              Master Komo Academy - tikuvchilik va moda biznesi bo'yicha professional ta'lim markazi. 
              Bizning kurslar orqali minglab talabalar o'z brendlarini yaratdi va muvaffaqiyatli biznes 
              qurdilar. Professional yondashuvlar, zamonaviy texnikalar va real tajriba - bularning barchasi 
              sizni kutmoqda!
            </p>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="bg-white/10 backdrop-blur-sm py-16">
        <div className="container mx-auto px-4 text-center space-y-8">
          <h3 className="text-3xl font-bold text-foreground">
            Quyidagi <span className="text-maroon">KANALGA QO'SHILISH</span> tugmasini bosib,<br />
            master klass bo'ladigan kanalga qo'shiling!
          </h3>
          
          <Button 
            variant="maroon"
            className="w-full max-w-md mx-auto"
            onClick={() => window.open('https://t.me/masterkomo', '_blank')}
          >
            <Send className="w-5 h-5 mr-2" />
            KANALGA QO'SHILISH
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 border-t border-white/20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-foreground">
            Follow us: <a href="https://instagram.com/masterkomo.uz" target="_blank" className="text-maroon font-semibold hover:underline">@masterkomo.uz</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;