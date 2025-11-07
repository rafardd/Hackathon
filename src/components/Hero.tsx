import { ArrowRight, Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface HeroProps {
  onGetStarted: () => void;
}

export function Hero({ onGetStarted }: HeroProps) {
  return (
    <section className="container mx-auto px-4 py-20 md:py-32">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-6">
          <h1 className="text-slate-100">
            Trabalhos freelance com{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              pagamentos em cripto
            </span>
          </h1>

          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            A primeira plataforma que conecta freelancers e clientes usando criptomoedas.
            Pagamentos instantâneos, sem fronteiras, com segurança de escrow.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto">
          <div className="flex gap-2 p-2 bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-purple-500/20">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <Input
                placeholder='Buscar serviços... Ex: "design de logo", "desenvolvimento web"'
                className="pl-12 bg-slate-800 border-purple-500/20 text-slate-200 h-12"
              />
            </div>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500"
            >
              Buscar
            </Button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 gap-2"
            onClick={onGetStarted}
          >
            Começar a Vender
            <ArrowRight className="h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-purple-500/30 text-slate-200 hover:bg-purple-500/10"
            onClick={onGetStarted}
          >
            Contratar Freelancers
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 max-w-3xl mx-auto">
          <div className="p-4 bg-slate-900/50 backdrop-blur-xl rounded-xl border border-purple-500/20">
            <div className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              12K+
            </div>
            <p className="text-slate-400">Freelancers</p>
          </div>
          <div className="p-4 bg-slate-900/50 backdrop-blur-xl rounded-xl border border-purple-500/20">
            <div className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              45K+
            </div>
            <p className="text-slate-400">Projetos</p>
          </div>
          <div className="p-4 bg-slate-900/50 backdrop-blur-xl rounded-xl border border-purple-500/20">
            <div className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              $8M+
            </div>
            <p className="text-slate-400">Pagos</p>
          </div>
          <div className="p-4 bg-slate-900/50 backdrop-blur-xl rounded-xl border border-purple-500/20">
            <div className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              4.9★
            </div>
            <p className="text-slate-400">Avaliação</p>
          </div>
        </div>
      </div>
    </section>
  );
}
