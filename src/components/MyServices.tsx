import { Plus, Edit, Trash2, Eye, MoreVertical, TrendingUp, DollarSign } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface MyServicesProps {
  onCreateNew: () => void;
}

export function MyServices({ onCreateNew }: MyServicesProps) {
  const services = [
    {
      id: 1,
      title: "Desenvolvimento de Landing Page Responsiva",
      status: "active",
      price: "0.025 BTC",
      orders: 45,
      revenue: "1.125 BTC",
      views: 1234,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      title: "Criação de API RESTful com Node.js",
      status: "active",
      price: "0.035 BTC",
      orders: 23,
      revenue: "0.805 BTC",
      views: 892,
      rating: 5.0,
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop",
    },
    {
      id: 3,
      title: "Consultoria em Arquitetura de Software",
      status: "paused",
      price: "0.050 BTC",
      orders: 12,
      revenue: "0.600 BTC",
      views: 456,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop",
    },
  ];

  const stats = {
    totalServices: 3,
    activeOrders: 8,
    totalEarnings: "2.530 BTC",
    avgRating: 4.9,
  };

  return (
    <section className="container mx-auto px-4 py-12 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-slate-100 mb-2">
              Meus{" "}
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Serviços
              </span>
            </h1>
            <p className="text-slate-400">
              Gerencie seus serviços e acompanhe o desempenho
            </p>
          </div>
          <Button
            onClick={onCreateNew}
            className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500"
          >
            <Plus className="h-5 w-5 mr-2" />
            Criar Novo Serviço
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-slate-900/50 backdrop-blur-xl border-purple-500/20 p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-10 w-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-purple-400" />
              </div>
            </div>
            <div className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              {stats.totalServices}
            </div>
            <p className="text-slate-400">Serviços Ativos</p>
          </Card>

          <Card className="bg-slate-900/50 backdrop-blur-xl border-purple-500/20 p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-10 w-10 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                <DollarSign className="h-5 w-5 text-cyan-400" />
              </div>
            </div>
            <div className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              {stats.activeOrders}
            </div>
            <p className="text-slate-400">Pedidos Ativos</p>
          </Card>

          <Card className="bg-slate-900/50 backdrop-blur-xl border-purple-500/20 p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-10 w-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                <DollarSign className="h-5 w-5 text-green-400" />
              </div>
            </div>
            <div className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              {stats.totalEarnings}
            </div>
            <p className="text-slate-400">Total Ganho</p>
          </Card>

          <Card className="bg-slate-900/50 backdrop-blur-xl border-purple-500/20 p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-10 w-10 rounded-lg bg-yellow-500/20 flex items-center justify-center">
                <span className="text-yellow-400">⭐</span>
              </div>
            </div>
            <div className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              {stats.avgRating}
            </div>
            <p className="text-slate-400">Avaliação Média</p>
          </Card>
        </div>

        {/* Services List */}
        <div className="space-y-6">
          {services.map((service) => (
            <Card
              key={service.id}
              className="bg-slate-900/50 backdrop-blur-xl border-purple-500/20 p-6"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full md:w-48 h-32 object-cover rounded-lg"
                />

                <div className="flex-1 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-slate-100">{service.title}</h3>
                        <Badge
                          className={
                            service.status === "active"
                              ? "bg-green-500/20 text-green-300 border-green-500/20"
                              : "bg-yellow-500/20 text-yellow-300 border-yellow-500/20"
                          }
                        >
                          {service.status === "active" ? "Ativo" : "Pausado"}
                        </Badge>
                      </div>
                      <p className="text-slate-300">{service.price}</p>
                    </div>

                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="text-slate-400">
                          <MoreVertical className="h-5 w-5" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="bg-slate-900 border-purple-500/20" align="end">
                        <DropdownMenuItem className="cursor-pointer focus:bg-purple-500/10 focus:text-purple-300">
                          <Eye className="mr-2 h-4 w-4" />
                          Visualizar
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer focus:bg-purple-500/10 focus:text-purple-300">
                          <Edit className="mr-2 h-4 w-4" />
                          Editar
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer focus:bg-purple-500/10 focus:text-purple-300">
                          {service.status === "active" ? "Pausar" : "Ativar"}
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer text-red-400 focus:bg-red-500/10 focus:text-red-300">
                          <Trash2 className="mr-2 h-4 w-4" />
                          Excluir
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="p-3 bg-slate-800/50 rounded-lg">
                      <p className="text-slate-400 text-sm mb-1">Pedidos</p>
                      <p className="text-slate-100">{service.orders}</p>
                    </div>
                    <div className="p-3 bg-slate-800/50 rounded-lg">
                      <p className="text-slate-400 text-sm mb-1">Receita</p>
                      <p className="text-slate-100">{service.revenue}</p>
                    </div>
                    <div className="p-3 bg-slate-800/50 rounded-lg">
                      <p className="text-slate-400 text-sm mb-1">Visualizações</p>
                      <p className="text-slate-100">{service.views}</p>
                    </div>
                    <div className="p-3 bg-slate-800/50 rounded-lg">
                      <p className="text-slate-400 text-sm mb-1">Avaliação</p>
                      <p className="text-slate-100">⭐ {service.rating}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {services.length === 0 && (
          <Card className="bg-slate-900/50 backdrop-blur-xl border-purple-500/20 p-12 text-center">
            <div className="max-w-md mx-auto space-y-4">
              <div className="h-20 w-20 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto">
                <Plus className="h-10 w-10 text-purple-400" />
              </div>
              <h3 className="text-slate-100">Nenhum serviço criado ainda</h3>
              <p className="text-slate-400">
                Comece criando seu primeiro serviço e comece a ganhar cripto!
              </p>
              <Button
                onClick={onCreateNew}
                className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500"
              >
                <Plus className="h-5 w-5 mr-2" />
                Criar Meu Primeiro Serviço
              </Button>
            </div>
          </Card>
        )}
      </div>
    </section>
  );
}
