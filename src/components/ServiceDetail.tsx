import { Star, Clock, Check, Shield, MessageCircle, Flag } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { useState } from "react";

interface ServiceDetailProps {
  serviceId: number;
  isLoggedIn: boolean;
  onLoginRequired: () => void;
}

export function ServiceDetail({ serviceId, isLoggedIn, onLoginRequired }: ServiceDetailProps) {
  const [selectedPackage, setSelectedPackage] = useState("basic");

  // Mock service data
  const service = {
    id: serviceId,
    title: "Desenvolvimento de Landing Page Responsiva",
    seller: {
      name: "webdev_pro",
      avatar: "webdev",
      rating: 4.9,
      reviews: 234,
      level: "Pro Seller",
      memberSince: "2022",
      completedOrders: 456,
    },
    images: [
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop",
    ],
    description: `Olá! Sou desenvolvedor web especializado em criar landing pages modernas e responsivas que convertem visitantes em clientes.

🚀 O que você receberá:
• Design responsivo para mobile, tablet e desktop
• Código limpo e otimizado (HTML, CSS, JavaScript)
• Integração com formulários de contato
• Otimização de performance e SEO
• Compatibilidade cross-browser
• Código-fonte completo

💼 Experiência:
Com mais de 5 anos de experiência, já entreguei 450+ projetos com 99% de satisfação dos clientes. Trabalho com as tecnologias mais modernas e sempre foco em performance e conversão.

✨ Por que me escolher?
• Resposta rápida (geralmente em minutos)
• Comunicação clara durante todo o projeto
• Revisões ilimitadas até você ficar satisfeito
• Suporte pós-entrega por 30 dias

Estou ansioso para trabalhar no seu projeto!`,
    packages: [
      {
        id: "basic",
        name: "Básico",
        price: "0.015",
        crypto: "BTC",
        deliveryDays: 5,
        revisions: 2,
        features: [
          "1 página responsiva",
          "Design moderno",
          "Formulário de contato",
          "2 revisões",
          "Código-fonte",
        ],
      },
      {
        id: "standard",
        name: "Padrão",
        price: "0.025",
        crypto: "BTC",
        deliveryDays: 3,
        revisions: 4,
        features: [
          "Até 3 páginas responsivas",
          "Design premium",
          "Formulário de contato",
          "Integração com API",
          "4 revisões",
          "SEO básico",
          "Código-fonte",
        ],
        popular: true,
      },
      {
        id: "premium",
        name: "Premium",
        price: "0.045",
        crypto: "BTC",
        deliveryDays: 2,
        revisions: -1,
        features: [
          "Até 5 páginas responsivas",
          "Design customizado exclusivo",
          "Formulário de contato avançado",
          "Múltiplas integrações de API",
          "Revisões ilimitadas",
          "SEO avançado",
          "Animações personalizadas",
          "Suporte prioritário",
          "Código-fonte",
        ],
      },
    ],
    reviews: [
      {
        buyer: "startup_founder",
        rating: 5,
        comment: "Trabalho excepcional! A landing page ficou perfeita e as conversões aumentaram 40%. Muito profissional e atencioso.",
        date: "3 dias atrás",
      },
      {
        buyer: "ecommerce_owner",
        rating: 5,
        comment: "Superou minhas expectativas. Código limpo, design moderno e entrega antes do prazo. Já contratei novamente!",
        date: "1 semana atrás",
      },
      {
        buyer: "agency_manager",
        rating: 4,
        comment: "Ótimo trabalho! Apenas algumas pequenas revisões foram necessárias. Recomendo!",
        date: "2 semanas atrás",
      },
    ],
  };

  const selectedPkg = service.packages.find((pkg) => pkg.id === selectedPackage) || service.packages[0];

  const handleOrder = () => {
    if (!isLoggedIn) {
      onLoginRequired();
      return;
    }
    // Proceed with order
  };

  return (
    <section className="container mx-auto px-4 py-12 min-h-screen">
      <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* Left Column - Service Details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Image Gallery */}
          <Card className="bg-slate-900/50 backdrop-blur-xl border-purple-500/20 p-0 overflow-hidden">
            <img
              src={service.images[0]}
              alt={service.title}
              className="w-full h-96 object-cover"
            />
          </Card>

          {/* Title and Seller Info */}
          <div>
            <h1 className="text-slate-100 mb-4">{service.title}</h1>
            
            <div className="flex items-center gap-4 mb-4">
              <Avatar className="h-12 w-12 border-2 border-purple-500/30">
                <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${service.seller.avatar}`} />
                <AvatarFallback className="bg-gradient-to-br from-purple-600 to-cyan-600">
                  {service.seller.name[0].toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-slate-100">{service.seller.name}</p>
                <div className="flex items-center gap-2">
                  <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/20">
                    {service.seller.level}
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-slate-300">{service.seller.rating}</span>
                    <span className="text-slate-400">({service.seller.reviews})</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <Card className="bg-slate-900/50 backdrop-blur-xl border-purple-500/20 p-6">
            <Tabs defaultValue="description">
              <TabsList className="bg-slate-800 w-full justify-start">
                <TabsTrigger value="description">Descrição</TabsTrigger>
                <TabsTrigger value="about">Sobre o Vendedor</TabsTrigger>
                <TabsTrigger value="reviews">Avaliações ({service.reviews.length})</TabsTrigger>
              </TabsList>

              <TabsContent value="description" className="mt-6 space-y-4">
                <div className="text-slate-300 whitespace-pre-wrap">
                  {service.description}
                </div>
              </TabsContent>

              <TabsContent value="about" className="mt-6 space-y-4">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-slate-800/50 rounded-lg">
                      <p className="text-slate-400 mb-1">Membro desde</p>
                      <p className="text-slate-100">{service.seller.memberSince}</p>
                    </div>
                    <div className="p-4 bg-slate-800/50 rounded-lg">
                      <p className="text-slate-400 mb-1">Pedidos completados</p>
                      <p className="text-slate-100">{service.seller.completedOrders}</p>
                    </div>
                  </div>
                  <div className="p-4 bg-purple-500/10 border border-purple-500/20 rounded-lg">
                    <p className="text-slate-300">
                      Desenvolvedor web profissional com paixão por criar experiências digitais incríveis. 
                      Especializado em landing pages de alta conversão e aplicações web modernas.
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="mt-6 space-y-4">
                {service.reviews.map((review, index) => (
                  <div
                    key={index}
                    className="p-4 bg-slate-800/50 rounded-lg border border-purple-500/10"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10 border border-purple-500/30">
                          <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${review.buyer}`} />
                          <AvatarFallback className="bg-gradient-to-br from-purple-600 to-cyan-600">
                            {review.buyer[0].toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-slate-200">@{review.buyer}</p>
                          <div className="flex items-center gap-1 mt-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-3 w-3 ${
                                  i < review.rating
                                    ? "fill-yellow-400 text-yellow-400"
                                    : "text-slate-600"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <span className="text-slate-500">{review.date}</span>
                    </div>
                    <p className="text-slate-300">{review.comment}</p>
                  </div>
                ))}
              </TabsContent>
            </Tabs>
          </Card>
        </div>

        {/* Right Column - Order Card */}
        <div className="lg:col-span-1">
          <Card className="bg-slate-900/50 backdrop-blur-xl border-purple-500/20 p-6 sticky top-20">
            <div className="space-y-6">
              <div>
                <Label className="text-slate-200 mb-2 block">Selecione um Pacote</Label>
                <Select value={selectedPackage} onValueChange={setSelectedPackage}>
                  <SelectTrigger className="bg-slate-800 border-purple-500/20 text-slate-200">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-purple-500/20">
                    {service.packages.map((pkg) => (
                      <SelectItem key={pkg.id} value={pkg.id}>
                        {pkg.name} - {pkg.price} {pkg.crypto}
                        {pkg.popular && " ⭐"}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="p-4 bg-purple-500/10 border border-purple-500/20 rounded-lg">
                <h3 className="text-slate-100 mb-3">{selectedPkg.name}</h3>
                <div className="space-y-2 mb-4">
                  {selectedPkg.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <Clock className="h-4 w-4" />
                  <span>{selectedPkg.deliveryDays} dias de entrega</span>
                </div>
              </div>

              <div className="p-4 bg-slate-800/50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-300">Preço do Serviço</span>
                  <span className="text-slate-100">
                    {selectedPkg.price} {selectedPkg.crypto}
                  </span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-300">Taxa da Plataforma (5%)</span>
                  <span className="text-slate-100">
                    {(parseFloat(selectedPkg.price) * 0.05).toFixed(6)} {selectedPkg.crypto}
                  </span>
                </div>
                <div className="pt-2 border-t border-purple-500/20 flex items-center justify-between">
                  <span className="text-slate-100">Total</span>
                  <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    {(parseFloat(selectedPkg.price) * 1.05).toFixed(6)} {selectedPkg.crypto}
                  </span>
                </div>
              </div>

              <Button
                onClick={handleOrder}
                className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500"
              >
                Fazer Pedido
              </Button>

              <Button
                variant="outline"
                className="w-full border-purple-500/30 text-slate-200 hover:bg-purple-500/10"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Conversar com Vendedor
              </Button>

              <div className="flex items-start gap-2 p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                <Shield className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-green-300 mb-1">Pagamento Protegido</p>
                  <p className="text-slate-400 text-sm">
                    Seus fundos ficam em escrow até a entrega do trabalho
                  </p>
                </div>
              </div>

              <button className="w-full flex items-center justify-center gap-2 text-slate-400 hover:text-red-400 transition-colors">
                <Flag className="h-4 w-4" />
                <span>Reportar este serviço</span>
              </button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

function Label({ children, className }: { children: React.ReactNode; className?: string }) {
  return <label className={className}>{children}</label>;
}
