import { useState } from "react";
import { Search, Star, Filter, SlidersHorizontal } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface MarketplaceProps {
  isLoggedIn: boolean;
  onViewService: (serviceId: number) => void;
}

export function Marketplace({ isLoggedIn, onViewService }: MarketplaceProps) {
  const [category, setCategory] = useState("all");
  const [sortBy, setSortBy] = useState("recommended");
  const [searchQuery, setSearchQuery] = useState("");

  const services = [
    {
      id: 1,
      title: "Desenvolvimento de Landing Page Responsiva",
      seller: "webdev_pro",
      avatar: "webdev",
      rating: 4.9,
      reviews: 234,
      price: "0.025",
      crypto: "BTC",
      deliveryDays: 3,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      category: "Programação",
      level: "Pro",
    },
    {
      id: 2,
      title: "Design de Logo Profissional + Identidade Visual",
      seller: "creative_designer",
      avatar: "creative",
      rating: 5.0,
      reviews: 567,
      price: "0.015",
      crypto: "BTC",
      deliveryDays: 2,
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop",
      category: "Design",
      level: "Top Rated",
    },
    {
      id: 3,
      title: "Edição de Vídeo para YouTube e Redes Sociais",
      seller: "video_expert",
      avatar: "video",
      rating: 4.8,
      reviews: 189,
      price: "0.020",
      crypto: "BTC",
      deliveryDays: 5,
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=300&fit=crop",
      category: "Vídeo",
      level: "Pro",
    },
    {
      id: 4,
      title: "Gestão Completa de Redes Sociais (1 Mês)",
      seller: "social_guru",
      avatar: "social",
      rating: 4.7,
      reviews: 312,
      price: "2.5",
      crypto: "ETH",
      deliveryDays: 30,
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop",
      category: "Marketing",
      level: "Pro",
    },
    {
      id: 5,
      title: "Desenvolvimento de Smart Contract Solidity",
      seller: "blockchain_dev",
      avatar: "blockchain",
      rating: 5.0,
      reviews: 145,
      price: "0.050",
      crypto: "BTC",
      deliveryDays: 7,
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop",
      category: "Blockchain",
      level: "Top Rated",
    },
    {
      id: 6,
      title: "Redação de Conteúdo SEO Otimizado (5 Artigos)",
      seller: "content_writer",
      avatar: "writer",
      rating: 4.9,
      reviews: 423,
      price: "0.012",
      crypto: "BTC",
      deliveryDays: 4,
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop",
      category: "Redação",
      level: "Pro",
    },
    {
      id: 7,
      title: "Design UI/UX para Aplicativo Mobile",
      seller: "ux_master",
      avatar: "uxmaster",
      rating: 4.8,
      reviews: 278,
      price: "0.035",
      crypto: "BTC",
      deliveryDays: 6,
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
      category: "Design",
      level: "Pro",
    },
    {
      id: 8,
      title: "Consultoria de Marketing Digital (2 Horas)",
      seller: "marketing_consultant",
      avatar: "consultant",
      rating: 5.0,
      reviews: 167,
      price: "0.018",
      crypto: "BTC",
      deliveryDays: 1,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      category: "Consultoria",
      level: "Top Rated",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-12 min-h-screen">
      <div className="mb-8">
        <h1 className="text-slate-100 mb-2">
          Explorar{" "}
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Serviços
          </span>
        </h1>
        <p className="text-slate-400">
          Encontre o profissional perfeito para o seu projeto
        </p>
      </div>

      {/* Filters */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <Input
              placeholder="Buscar serviços..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 bg-slate-900/50 border-purple-500/20 text-slate-200"
            />
          </div>
          
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="w-full md:w-[200px] bg-slate-900/50 border-purple-500/20 text-slate-200">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-slate-800 border-purple-500/20">
              <SelectItem value="all">Todas Categorias</SelectItem>
              <SelectItem value="programacao">Programação</SelectItem>
              <SelectItem value="design">Design</SelectItem>
              <SelectItem value="video">Vídeo</SelectItem>
              <SelectItem value="marketing">Marketing</SelectItem>
              <SelectItem value="redacao">Redação</SelectItem>
            </SelectContent>
          </Select>

          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full md:w-[200px] bg-slate-900/50 border-purple-500/20 text-slate-200">
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-slate-800 border-purple-500/20">
              <SelectItem value="recommended">Recomendados</SelectItem>
              <SelectItem value="rating">Melhor Avaliados</SelectItem>
              <SelectItem value="price-low">Menor Preço</SelectItem>
              <SelectItem value="price-high">Maior Preço</SelectItem>
              <SelectItem value="delivery">Entrega Rápida</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {services.map((service) => (
          <Card
            key={service.id}
            onClick={() => onViewService(service.id)}
            className="bg-slate-900/50 backdrop-blur-xl border-purple-500/20 hover:border-purple-500/40 transition-all cursor-pointer group overflow-hidden"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              {service.level === "Top Rated" && (
                <Badge className="absolute top-3 right-3 bg-gradient-to-r from-purple-600 to-cyan-600 border-0">
                  ⭐ Top Rated
                </Badge>
              )}
            </div>

            <div className="p-4 space-y-3">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8 border border-purple-500/30">
                  <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${service.avatar}`} />
                  <AvatarFallback className="bg-gradient-to-br from-purple-600 to-cyan-600 text-xs">
                    {service.seller[0].toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <span className="text-slate-300">{service.seller}</span>
              </div>

              <h3 className="text-slate-100 line-clamp-2 group-hover:text-purple-300 transition-colors">
                {service.title}
              </h3>

              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-slate-200">{service.rating}</span>
                <span className="text-slate-400">({service.reviews})</span>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-purple-500/20">
                <div>
                  <p className="text-slate-400 text-xs">A partir de</p>
                  <p className="text-slate-100">
                    {service.price} {service.crypto}
                  </p>
                </div>
                <Badge variant="secondary" className="bg-purple-500/10 text-purple-300 border-purple-500/20">
                  {service.deliveryDays}d
                </Badge>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
