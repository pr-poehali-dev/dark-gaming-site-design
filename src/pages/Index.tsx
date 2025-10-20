import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-heading font-bold text-primary">
            CYBER<span className="text-foreground">ZONE</span>
          </div>
          <ul className="hidden md:flex gap-8 text-sm font-medium">
            <li>
              <a href="#services" className="hover:text-primary transition-colors">
                Услуги
              </a>
            </li>
            <li>
              <a href="#prices" className="hover:text-primary transition-colors">
                Цены
              </a>
            </li>
            <li>
              <a href="#contacts" className="hover:text-primary transition-colors">
                Контакты
              </a>
            </li>
          </ul>
          <Button variant="ghost" className="md:hidden">
            <Icon name="Menu" size={24} />
          </Button>
        </nav>
      </header>

      <main className="pt-20">
        <section className="container mx-auto px-6 py-24 min-h-[90vh] flex flex-col justify-center animate-fade-in">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-heading font-black mb-6 leading-tight">
              ИГРОВОЙ
              <br />
              <span className="text-primary glow-effect inline-block">КЛУБ</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl">
              Профессиональное оборудование для стриминга и участия в киберспортивных турнирах
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 glow-effect hover-scale bg-primary hover:bg-primary/90"
              >
                <Icon name="Calendar" className="mr-2" size={20} />
                Забронировать
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 hover-scale border-primary text-primary hover:bg-primary/10"
              >
                <Icon name="Percent" className="mr-2" size={20} />
                Акции
              </Button>
            </div>
          </div>
        </section>

        <section id="services" className="container mx-auto px-6 py-24">
          <h2 className="text-5xl font-heading font-black mb-16 text-center">
            Игровые <span className="text-primary">Зоны</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="bg-card border-border hover:border-primary transition-all duration-300 hover-scale group overflow-hidden">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon name="Radio" size={32} className="text-primary" />
                </div>
                <h3 className="text-3xl font-heading font-bold mb-4">Стриминг</h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Профессиональное оборудование для трансляции игр. Камеры, микрофоны и мощные ПК для качественного стрима.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>4K камеры и студийный свет</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Профессиональные микрофоны</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Мощные ПК для стриминга</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary transition-all duration-300 hover-scale group overflow-hidden">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon name="Trophy" size={32} className="text-primary" />
                </div>
                <h3 className="text-3xl font-heading font-bold mb-4">Турниры</h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Организация киберспортивных соревнований и чемпионатов. Профессиональная арена с системой судейства.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Киберспортивная арена</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Система для судейства</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Призовой фонд</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="container mx-auto px-6 py-24">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-12 border border-primary/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-4xl font-heading font-black mb-4">
                  Готовы начать?
                </h2>
                <p className="text-xl text-muted-foreground">
                  Забронируйте место в лучшем игровом клубе города
                </p>
              </div>
              <Button 
                size="lg" 
                className="text-lg px-10 py-6 glow-effect hover-scale bg-primary hover:bg-primary/90 whitespace-nowrap"
              >
                <Icon name="Gamepad2" className="mr-2" size={20} />
                Забронировать
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <p className="text-lg">© 2024 CyberZone. Игровой клуб нового поколения</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;