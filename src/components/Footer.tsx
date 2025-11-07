import { Sparkles, Twitter, Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const footerLinks = {
    Produto: ["Recursos", "Preços", "Segurança", "Roadmap"],
    Empresa: ["Sobre Nós", "Blog", "Carreiras", "Imprensa"],
    Suporte: ["Central de Ajuda", "Documentação", "Status", "Contato"],
    Legal: ["Privacidade", "Termos", "Cookies", "Licenças"],
  };

  return (
    <footer id="about" className="border-t border-purple-500/20 bg-slate-950/50 backdrop-blur-xl">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                StellarPay
              </span>
            </div>
            <p className="text-slate-400 mb-6 max-w-sm">
              Facilitando transações de criptomoedas com segurança, velocidade e transparência.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-purple-400 hover:bg-slate-700 transition-all"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-purple-400 hover:bg-slate-700 transition-all"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-purple-400 hover:bg-slate-700 transition-all"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-purple-400 hover:bg-slate-700 transition-all"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="mb-4 text-slate-200">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-slate-400 hover:text-purple-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-purple-500/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400">
            © 2025 StellarPay. Todos os direitos reservados.
          </p>
          <p className="text-slate-500">
            Feito com <span className="text-purple-400">♥</span> para a comunidade cripto
          </p>
        </div>
      </div>
    </footer>
  );
}
