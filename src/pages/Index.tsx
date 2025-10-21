import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const products = [
    {
      id: 1,
      name: "Премиум пакет крафт",
      category: "Пакеты",
      material: "Крафт-бумага 120г",
      sizes: "S, M, L, XL",
      price: "от 45₽",
      image: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=500&q=80"
    },
    {
      id: 2,
      name: "Элитная коробка с лентой",
      category: "Коробки",
      material: "Дизайнерский картон",
      sizes: "Индивидуально",
      price: "от 180₽",
      image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=500&q=80"
    },
    {
      id: 3,
      name: "Эко-пакет с логотипом",
      category: "Пакеты",
      material: "Переработанная бумага",
      sizes: "M, L",
      price: "от 55₽",
      image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500&q=80"
    },
    {
      id: 4,
      name: "Подарочная коробка люкс",
      category: "Коробки",
      material: "Бархатное покрытие",
      sizes: "S, M, L",
      price: "от 250₽",
      image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=500&q=80"
    },
  ];

  const portfolio = [
    {
      id: 1,
      client: "Boutique Fashion",
      description: "Брендированные пакеты для модного бутика",
      image: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=600&q=80"
    },
    {
      id: 2,
      client: "Luxury Jewelry",
      description: "Премиум коробки для ювелирных изделий",
      image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=600&q=80"
    },
    {
      id: 3,
      client: "Organic Cosmetics",
      description: "Эко-упаковка для косметического бренда",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&q=80"
    },
    {
      id: 4,
      client: "Gourmet Bakery",
      description: "Стильные коробки для кондитерской",
      image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=600&q=80"
    },
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-heading font-bold text-secondary">LUXPACK</h1>
            <div className="hidden md:flex gap-8">
              {["home", "catalog", "portfolio", "custom", "wholesale", "about", "contacts"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? "text-primary" : "text-foreground"
                  }`}
                >
                  {section === "home" && "Главная"}
                  {section === "catalog" && "Каталог"}
                  {section === "portfolio" && "Портфолио"}
                  {section === "custom" && "Индивидуальный заказ"}
                  {section === "wholesale" && "Оптовикам"}
                  {section === "about" && "О компании"}
                  {section === "contacts" && "Контакты"}
                </button>
              ))}
            </div>
            <Button className="hidden md:flex">Заказать образцы</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6 animate-fade-in">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Премиум упаковка</Badge>
              <h2 className="text-5xl md:text-6xl font-heading font-bold mb-6 leading-tight">
                Упаковка, которая продает ваш бренд
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Создаем премиальные бумажные пакеты и коробки с индивидуальным дизайном. 
                Экологичные материалы, безупречное качество, быстрое производство.
              </p>
              <div className="flex gap-4">
                <Button size="lg" onClick={() => scrollToSection("catalog")}>
                  Смотреть каталог
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection("custom")}>
                  Индивидуальный заказ
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1607083206325-caf1edba7a0f?w=800&q=80"
                alt="Premium packaging"
                className="rounded-lg shadow-2xl animate-scale-in"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: "Leaf", title: "Эко-материалы", desc: "100% переработка" },
              { icon: "Sparkles", title: "Премиум качество", desc: "Ручная проверка" },
              { icon: "Zap", title: "Быстро", desc: "От 5 рабочих дней" },
              { icon: "Award", title: "Гарантия", desc: "Возврат 30 дней" },
            ].map((feature, i) => (
              <Card key={i} className="border-none shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="pt-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                    <Icon name={feature.icon} className="text-primary" size={24} />
                  </div>
                  <h3 className="font-heading font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section id="catalog" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4">Каталог продукции</h2>
            <p className="text-muted-foreground">Выберите готовое решение или закажите индивидуальный дизайн</p>
          </div>

          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
              <TabsTrigger value="all">Все</TabsTrigger>
              <TabsTrigger value="bags">Пакеты</TabsTrigger>
              <TabsTrigger value="boxes">Коробки</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="group overflow-hidden hover:shadow-xl transition-all">
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 right-4">{product.category}</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold mb-2">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-1">{product.material}</p>
                  <p className="text-sm text-muted-foreground mb-3">Размеры: {product.sizes}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-heading font-bold text-primary">{product.price}</span>
                    <Button size="sm" variant="outline">Подробнее</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg">Заказать образцы продукции</Button>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4">Реализованные проекты</h2>
            <p className="text-muted-foreground">Более 500 довольных клиентов по всей России</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {portfolio.map((project) => (
              <Card key={project.id} className="overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.client}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-xl mb-2">{project.client}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Order */}
      <section id="custom" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4">Индивидуальный заказ</h2>
            <p className="text-muted-foreground">Создадим упаковку по вашим требованиям</p>
          </div>

          <Card>
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Имя</label>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Компания</label>
                    <Input placeholder="Название компании" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон</label>
                    <Input type="tel" placeholder="+7 (___) ___-__-__" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Тип упаковки</label>
                  <div className="grid grid-cols-2 gap-4">
                    <Button type="button" variant="outline" className="h-20">
                      <Icon name="ShoppingBag" className="mr-2" />
                      Пакеты
                    </Button>
                    <Button type="button" variant="outline" className="h-20">
                      <Icon name="Box" className="mr-2" />
                      Коробки
                    </Button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Описание проекта</label>
                  <Textarea placeholder="Расскажите о вашем проекте, тираже, сроках..." rows={5} />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Wholesale */}
      <section id="wholesale" className="py-20 px-6 bg-secondary text-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4">Оптовым покупателям</h2>
            <p className="text-white/80">Специальные условия для постоянных партнеров</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: "Percent", title: "Скидки до 40%", desc: "При заказе от 10 000 шт" },
              { icon: "Calendar", title: "Отсрочка платежа", desc: "До 30 дней для партнеров" },
              { icon: "Truck", title: "Бесплатная доставка", desc: "При заказе от 50 000₽" },
            ].map((benefit, i) => (
              <div key={i} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary mb-4">
                  <Icon name={benefit.icon} size={28} />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-2">{benefit.title}</h3>
                <p className="text-white/70">{benefit.desc}</p>
              </div>
            ))}
          </div>

          <Card className="bg-white/10 border-white/20 backdrop-blur">
            <CardContent className="p-8">
              <h3 className="font-heading font-semibold text-xl mb-4 text-center">
                Свяжитесь с отделом оптовых продаж
              </h3>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={20} />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={20} />
                  <span>opt@luxpack.ru</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4">О компании</h2>
          </div>
          <div className="prose prose-lg max-w-none text-center">
            <p className="text-muted-foreground text-lg mb-6">
              LUXPACK — производитель премиальной упаковки с 2015 года. Мы специализируемся на 
              создании индивидуальных решений для брендов, которые ценят качество и экологичность.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-4xl font-heading font-bold text-primary mb-2">10+</div>
                <p className="text-muted-foreground">лет на рынке</p>
              </div>
              <div>
                <div className="text-4xl font-heading font-bold text-primary mb-2">500+</div>
                <p className="text-muted-foreground">довольных клиентов</p>
              </div>
              <div>
                <div className="text-4xl font-heading font-bold text-primary mb-2">100%</div>
                <p className="text-muted-foreground">эко-материалы</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4">Контакты</h2>
            <p className="text-muted-foreground">Свяжитесь с нами любым удобным способом</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <Icon name="MapPin" className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="font-heading font-semibold mb-1">Адрес</h3>
                    <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 123</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Phone" className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="font-heading font-semibold mb-1">Телефон</h3>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Mail" className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="font-heading font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">info@luxpack.ru</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Clock" className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="font-heading font-semibold mb-1">Режим работы</h3>
                    <p className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="font-heading font-semibold text-xl mb-6">Быстрая связь</h3>
                <form className="space-y-4">
                  <Input placeholder="Ваше имя" />
                  <Input type="tel" placeholder="Телефон" />
                  <Textarea placeholder="Сообщение" rows={4} />
                  <Button type="submit" className="w-full">Отправить</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-12 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-heading font-bold mb-4">LUXPACK</h2>
          <p className="text-white/70 mb-6">Премиум упаковка для вашего бренда</p>
          <div className="flex justify-center gap-6">
            <Icon name="Instagram" className="cursor-pointer hover:text-primary transition-colors" size={24} />
            <Icon name="Facebook" className="cursor-pointer hover:text-primary transition-colors" size={24} />
            <Icon name="Mail" className="cursor-pointer hover:text-primary transition-colors" size={24} />
          </div>
          <p className="text-white/50 text-sm mt-8">© 2024 LUXPACK. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
