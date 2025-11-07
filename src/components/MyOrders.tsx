import { MessageCircle, Clock, CheckCircle, AlertCircle, FileText } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export function MyOrders() {
  const buyingOrders = [
    {
      id: "#ORD-1234",
      service: "Design de Logo Profissional",
      seller: "creative_designer",
      avatar: "creative",
      status: "in_progress",
      price: "0.015 BTC",
      deliveryDate: "2 dias",
      orderedDate: "05 Nov 2025",
      progress: 60,
    },
    {
      id: "#ORD-1235",
      service: "Edição de Vídeo para YouTube",
      seller: "video_expert",
      avatar: "video",
      status: "delivered",
      price: "0.020 BTC",
      deliveryDate: "Entregue",
      orderedDate: "03 Nov 2025",
      progress: 100,
    },
    {
      id: "#ORD-1236",
      service: "Desenvolvimento de Smart Contract",
      seller: "blockchain_dev",
      avatar: "blockchain",
      status: "pending",
      price: "0.050 BTC",
      deliveryDate: "5 dias",
      orderedDate: "07 Nov 2025",
      progress: 10,
    },
  ];

  const sellingOrders = [
    {
      id: "#ORD-5678",
      service: "Desenvolvimento de Landing Page",
      buyer: "startup_founder",
      avatar: "startup",
      status: "in_progress",
      price: "0.025 BTC",
      deliveryDate: "1 dia",
      orderedDate: "06 Nov 2025",
      progress: 75,
    },
    {
      id: "#ORD-5679",
      service: "Criação de API RESTful",
      buyer: "tech_company",
      avatar: "company",
      status: "revision",
      price: "0.035 BTC",
      deliveryDate: "Revisão solicitada",
      orderedDate: "04 Nov 2025",
      progress: 90,
    },
  ];

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      pending: { label: "Pendente", className: "bg-yellow-500/20 text-yellow-300 border-yellow-500/20" },
      in_progress: { label: "Em Progresso", className: "bg-blue-500/20 text-blue-300 border-blue-500/20" },
      delivered: { label: "Entregue", className: "bg-green-500/20 text-green-300 border-green-500/20" },
      revision: { label: "Em Revisão", className: "bg-orange-500/20 text-orange-300 border-orange-500/20" },
      completed: { label: "Completo", className: "bg-purple-500/20 text-purple-300 border-purple-500/20" },
      cancelled: { label: "Cancelado", className: "bg-red-500/20 text-red-300 border-red-500/20" },
    };
    return statusConfig[status as keyof typeof statusConfig] || statusConfig.pending;
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending":
        return <Clock className="h-4 w-4" />;
      case "in_progress":
        return <AlertCircle className="h-4 w-4" />;
      case "delivered":
      case "completed":
        return <CheckCircle className="h-4 w-4" />;
      case "revision":
        return <FileText className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  return (
    <section className="container mx-auto px-4 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-slate-100 mb-2">
            Meus{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Pedidos
            </span>
          </h1>
          <p className="text-slate-400">
            Gerencie suas compras e vendas
          </p>
        </div>

        <Tabs defaultValue="buying" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-slate-800 mb-8">
            <TabsTrigger value="buying">
              Comprando ({buyingOrders.length})
            </TabsTrigger>
            <TabsTrigger value="selling">
              Vendendo ({sellingOrders.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="buying" className="space-y-6">
            {buyingOrders.map((order) => {
              const statusBadge = getStatusBadge(order.status);
              return (
                <Card
                  key={order.id}
                  className="bg-slate-900/50 backdrop-blur-xl border-purple-500/20 p-6"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-12 w-12 border-2 border-purple-500/30">
                        <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${order.avatar}`} />
                        <AvatarFallback className="bg-gradient-to-br from-purple-600 to-cyan-600">
                          {order.seller[0].toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="text-slate-100">{order.service}</h3>
                        <p className="text-slate-400">por @{order.seller}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge className={statusBadge.className}>
                        {getStatusIcon(order.status)}
                        <span className="ml-1">{statusBadge.label}</span>
                      </Badge>
                      <span className="text-slate-100">{order.price}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Progresso</span>
                      <span className="text-slate-300">{order.progress}%</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-purple-600 to-cyan-600 h-2 rounded-full transition-all"
                        style={{ width: `${order.progress}%` }}
                      ></div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-3">
                      <div>
                        <p className="text-slate-400 text-sm">Pedido ID</p>
                        <p className="text-slate-200">{order.id}</p>
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm">Data do Pedido</p>
                        <p className="text-slate-200">{order.orderedDate}</p>
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm">Entrega</p>
                        <p className="text-slate-200">{order.deliveryDate}</p>
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm">Status</p>
                        <p className="text-slate-200">{statusBadge.label}</p>
                      </div>
                    </div>

                    <div className="flex gap-3 pt-3 border-t border-purple-500/20">
                      <Button
                        variant="outline"
                        className="flex-1 border-purple-500/30 text-slate-200 hover:bg-purple-500/10"
                      >
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Mensagem
                      </Button>
                      {order.status === "delivered" && (
                        <Button className="flex-1 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500">
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Aprovar Entrega
                        </Button>
                      )}
                      {order.status === "in_progress" && (
                        <Button
                          variant="outline"
                          className="border-purple-500/30 text-slate-200 hover:bg-purple-500/10"
                        >
                          Ver Detalhes
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              );
            })}
          </TabsContent>

          <TabsContent value="selling" className="space-y-6">
            {sellingOrders.map((order) => {
              const statusBadge = getStatusBadge(order.status);
              return (
                <Card
                  key={order.id}
                  className="bg-slate-900/50 backdrop-blur-xl border-purple-500/20 p-6"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-12 w-12 border-2 border-purple-500/30">
                        <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${order.avatar}`} />
                        <AvatarFallback className="bg-gradient-to-br from-purple-600 to-cyan-600">
                          {order.buyer[0].toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="text-slate-100">{order.service}</h3>
                        <p className="text-slate-400">para @{order.buyer}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge className={statusBadge.className}>
                        {getStatusIcon(order.status)}
                        <span className="ml-1">{statusBadge.label}</span>
                      </Badge>
                      <span className="text-slate-100">{order.price}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Progresso</span>
                      <span className="text-slate-300">{order.progress}%</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-purple-600 to-cyan-600 h-2 rounded-full transition-all"
                        style={{ width: `${order.progress}%` }}
                      ></div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-3">
                      <div>
                        <p className="text-slate-400 text-sm">Pedido ID</p>
                        <p className="text-slate-200">{order.id}</p>
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm">Data do Pedido</p>
                        <p className="text-slate-200">{order.orderedDate}</p>
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm">Prazo de Entrega</p>
                        <p className="text-slate-200">{order.deliveryDate}</p>
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm">Status</p>
                        <p className="text-slate-200">{statusBadge.label}</p>
                      </div>
                    </div>

                    <div className="flex gap-3 pt-3 border-t border-purple-500/20">
                      <Button
                        variant="outline"
                        className="flex-1 border-purple-500/30 text-slate-200 hover:bg-purple-500/10"
                      >
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Mensagem
                      </Button>
                      {order.status === "in_progress" && (
                        <Button className="flex-1 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500">
                          <FileText className="h-4 w-4 mr-2" />
                          Enviar Entrega
                        </Button>
                      )}
                      {order.status === "revision" && (
                        <Button className="flex-1 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500">
                          Enviar Revisão
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              );
            })}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
