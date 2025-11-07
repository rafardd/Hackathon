import { Shield, Zap, TrendingDown, Lock, Globe, Users } from "lucide-react";
import { Card } from "./ui/card";

export function Features() {
  const features = [
    {
      icon: Shield,
      title: "Pagamento Seguro com Escrow",
      description: "Seus fundos ficam seguros em escrow até a entrega do trabalho. Proteção total para compradores e vendedores.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Zap,
      title: "Pagamentos Instantâneos",
      description: "Receba seus pagamentos em segundos após a conclusão. Sem esperas de dias por transferências bancárias.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: TrendingDown,
      title: "Taxas Ultra Baixas",
      description: "Apenas 5% de taxa da plataforma. Muito menos que concorrentes tradicionais, graças aos pagamentos cripto.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Lock,
      title: "Disputas Transparentes",
      description: "Sistema de resolução de disputas justo e transparente com smart contracts na blockchain.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Globe,
      title: "Sem Fronteiras",
      description: "Trabalhe com clientes de qualquer lugar do mundo. Sem restrições geográficas ou taxas internacionais.",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: Users,
      title: "Comunidade Verificada",
      description: "Sistema de reputação baseado em avaliações reais e histórico de trabalhos completados.",
      color: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <section id="features" className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h2 className="mb-4 text-slate-100">
          Por que escolher o{" "}
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            StellarPay
          </span>
        </h2>
        <p className="text-slate-300 max-w-2xl mx-auto">
          A plataforma de freelance que combina o melhor dos dois mundos: flexibilidade do trabalho remoto e segurança das criptomoedas
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <Card
              key={index}
              className="bg-slate-900/50 backdrop-blur-xl border-purple-500/20 p-6 hover:border-purple-500/40 transition-all hover:shadow-lg hover:shadow-purple-500/10"
            >
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${feature.color} mb-4`}>
                <Icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-2 text-slate-100">{feature.title}</h3>
              <p className="text-slate-400">{feature.description}</p>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
