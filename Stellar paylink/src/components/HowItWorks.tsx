import { UserPlus, Briefcase, HandshakeIcon, Wallet } from "lucide-react";

export function HowItWorks() {
  const stepsFreelancer = [
    {
      icon: UserPlus,
      title: "Crie seu perfil",
      description: "Cadastre-se e conecte sua carteira cripto. É rápido e gratuito.",
      step: "01",
    },
    {
      icon: Briefcase,
      title: "Anuncie seus serviços",
      description: "Crie anúncios detalhados dos seus serviços com preços em cripto.",
      step: "02",
    },
    {
      icon: HandshakeIcon,
      title: "Feche negócios",
      description: "Clientes encontram seu serviço, fazem o pedido e o pagamento vai para escrow.",
      step: "03",
    },
    {
      icon: Wallet,
      title: "Receba instantaneamente",
      description: "Entregue o trabalho, cliente aprova, e você recebe na hora em cripto.",
      step: "04",
    },
  ];

  return (
    <section id="how-it-works" className="container mx-auto px-4 py-20 bg-slate-900/30">
      <div className="text-center mb-16">
        <h2 className="mb-4 text-slate-100">
          Como{" "}
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            funciona
          </span>
        </h2>
        <p className="text-slate-300 max-w-2xl mx-auto">
          Para freelancers: comece a ganhar cripto em 4 passos simples
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative max-w-6xl mx-auto">
        {/* Connection line for desktop */}
        <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>

        {stepsFreelancer.map((step, index) => {
          const Icon = step.icon;
          return (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-2xl blur-xl opacity-50"></div>
                  <div className="relative bg-slate-900 border-2 border-purple-500/30 rounded-2xl p-6 hover:border-purple-500/60 transition-all">
                    <Icon className="h-10 w-10 text-purple-400" />
                  </div>
                  <div className="absolute -top-3 -right-3 bg-gradient-to-br from-purple-600 to-cyan-600 text-white rounded-full h-8 w-8 flex items-center justify-center">
                    {step.step}
                  </div>
                </div>
                <h3 className="mb-2 text-slate-100">{step.title}</h3>
                <p className="text-slate-400">{step.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-16 max-w-3xl mx-auto p-6 bg-purple-500/10 border border-purple-500/20 rounded-2xl">
        <p className="text-slate-100 text-center mb-2">
          💼 Para Clientes
        </p>
        <p className="text-slate-300 text-center">
          Busque serviços, faça pedidos, o pagamento fica em escrow seguro, aprove o trabalho e os fundos são liberados automaticamente. Simples assim!
        </p>
      </div>
    </section>
  );
}
