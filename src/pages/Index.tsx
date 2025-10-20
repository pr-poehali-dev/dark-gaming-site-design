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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <Card className="bg-card border-border hover:border-primary transition-all duration-300 hover-scale group overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/2aba8585-d8d4-493d-84d4-24f5681926f7/files/697a8bb6-e4cc-452d-8954-c7b5cba66604.jpg" 
                  alt="Стриминг студия"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon name="Radio" size={24} className="text-primary" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-3">Стриминг</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Профессиональное оборудование для трансляции игр. Камеры, микрофоны и мощные ПК для качественного стрима.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary transition-all duration-300 hover-scale group overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/2aba8585-d8d4-493d-84d4-24f5681926f7/files/d82ebebd-7ebf-4235-bda3-b769eabaf9ee.jpg" 
                  alt="Турнирная арена"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon name="Trophy" size={24} className="text-primary" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-3">Турниры</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Организация киберспортивных соревнований и чемпионатов. Профессиональная арена с системой судейства.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary transition-all duration-300 hover-scale group overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/2aba8585-d8d4-493d-84d4-24f5681926f7/files/daf99dcf-1e29-4bf0-8ea5-732ab462a510.jpg" 
                  alt="VIP зона"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon name="Crown" size={24} className="text-primary" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-3">VIP-зоны</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Премиальное оборудование и полная приватность. Роскошная обстановка для комфортной игры в уединении.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary transition-all duration-300 hover-scale group overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/2aba8585-d8d4-493d-84d4-24f5681926f7/files/286e6154-467e-4602-8804-13202578827d.jpg" 
                  alt="Геймерское кафе"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon name="Coffee" size={24} className="text-primary" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-3">Кафе</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Геймерское меню с энергетиками, снеками и полноценными блюдами. Подзарядитесь между игровыми сессиями.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary transition-all duration-300 hover-scale group overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/2aba8585-d8d4-493d-84d4-24f5681926f7/files/bb9fda8d-8aa8-486c-b8e0-3b99930df346.jpg" 
                  alt="Аренда для мероприятий"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon name="PartyPopper" size={24} className="text-primary" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-3">Аренда</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Организация мероприятий и вечеринок. Идеально для дней рождения и корпоративных ивентов.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary transition-all duration-300 hover-scale group overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/2aba8585-d8d4-493d-84d4-24f5681926f7/files/b39259f6-54a5-4af0-a528-da9dec260bb8.jpg" 
                  alt="Тренировки с про-игроками"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon name="GraduationCap" size={24} className="text-primary" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-3">Тренировки</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Занятия с профессиональными игроками и коучами. Прокачайте свои навыки до про-уровня.
                </p>
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