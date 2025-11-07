import { Sparkles, Menu, User, History, Home, Briefcase, ShoppingBag, Plus } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface HeaderProps {
  onLoginClick: () => void;
  isLoggedIn: boolean;
  onViewChange: (view: "home" | "profile" | "marketplace" | "my-services" | "my-orders" | "history" | "create-service") => void;
  currentView: string;
}

export function Header({ onLoginClick, isLoggedIn, onViewChange, currentView }: HeaderProps) {
  const navLinks = [
    { name: "Explorar Serviços", view: "marketplace" as const },
    { name: "Como Funciona", href: "#how-it-works", view: null },
    { name: "Categorias", href: "#categories", view: null },
  ];

  const handleNavClick = (view: any, href?: string) => {
    if (view) {
      onViewChange(view);
    } else if (href) {
      onViewChange("home");
      setTimeout(() => {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-purple-500/20 bg-slate-950/80 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <button 
          onClick={() => onViewChange("home")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500">
            <Sparkles className="h-6 w-6 text-white" />
          </div>
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            StellarPay
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {isLoggedIn ? (
            <>
              <button
                onClick={() => onViewChange("home")}
                className={`text-slate-300 transition-colors hover:text-purple-400 flex items-center gap-2 ${
                  currentView === "home" ? "text-purple-400" : ""
                }`}
              >
                <Home className="h-4 w-4" />
                Início
              </button>
              <button
                onClick={() => onViewChange("marketplace")}
                className={`text-slate-300 transition-colors hover:text-purple-400 flex items-center gap-2 ${
                  currentView === "marketplace" ? "text-purple-400" : ""
                }`}
              >
                <ShoppingBag className="h-4 w-4" />
                Explorar
              </button>
              <button
                onClick={() => onViewChange("my-services")}
                className={`text-slate-300 transition-colors hover:text-purple-400 flex items-center gap-2 ${
                  currentView === "my-services" ? "text-purple-400" : ""
                }`}
              >
                <Briefcase className="h-4 w-4" />
                Meus Serviços
              </button>
              <button
                onClick={() => onViewChange("my-orders")}
                className={`text-slate-300 transition-colors hover:text-purple-400 flex items-center gap-2 ${
                  currentView === "my-orders" ? "text-purple-400" : ""
                }`}
              >
                <ShoppingBag className="h-4 w-4" />
                Meus Pedidos
              </button>
            </>
          ) : (
            navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.view, link.href)}
                className="text-slate-300 transition-colors hover:text-purple-400"
              >
                {link.name}
              </button>
            ))
          )}
        </nav>

        <div className="flex items-center gap-3">
          {isLoggedIn ? (
            <>
              <Button 
                onClick={() => onViewChange("create-service")}
                className="hidden md:inline-flex bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500"
              >
                <Plus className="h-4 w-4 mr-2" />
                Criar Serviço
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                    <Avatar className="h-10 w-10 border-2 border-purple-500/30">
                      <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=stellar" />
                      <AvatarFallback className="bg-gradient-to-br from-purple-600 to-cyan-600">
                        SP
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-slate-900 border-purple-500/20" align="end">
                  <DropdownMenuItem 
                    onClick={() => onViewChange("profile")}
                    className="cursor-pointer focus:bg-purple-500/10 focus:text-purple-300"
                  >
                    <User className="mr-2 h-4 w-4" />
                    Meu Perfil
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => onViewChange("my-services")}
                    className="cursor-pointer focus:bg-purple-500/10 focus:text-purple-300"
                  >
                    <Briefcase className="mr-2 h-4 w-4" />
                    Meus Serviços
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => onViewChange("my-orders")}
                    className="cursor-pointer focus:bg-purple-500/10 focus:text-purple-300"
                  >
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    Meus Pedidos
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => onViewChange("history")}
                    className="cursor-pointer focus:bg-purple-500/10 focus:text-purple-300"
                  >
                    <History className="mr-2 h-4 w-4" />
                    Histórico
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-purple-500/20" />
                  <DropdownMenuItem className="cursor-pointer text-red-400 focus:bg-red-500/10 focus:text-red-300">
                    Sair
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              <Button 
                variant="ghost" 
                className="hidden md:inline-flex text-slate-300 hover:text-white hover:bg-purple-500/20"
                onClick={onLoginClick}
              >
                Entrar
              </Button>
              <Button 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500"
                onClick={onLoginClick}
              >
                Começar Agora
              </Button>
            </>
          )}

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-slate-300">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-slate-950 border-purple-500/20">
              <nav className="flex flex-col gap-4 mt-8">
                {isLoggedIn ? (
                  <>
                    <button
                      onClick={() => onViewChange("home")}
                      className="text-slate-300 transition-colors hover:text-purple-400 text-left"
                    >
                      Início
                    </button>
                    <button
                      onClick={() => onViewChange("marketplace")}
                      className="text-slate-300 transition-colors hover:text-purple-400 text-left"
                    >
                      Explorar
                    </button>
                    <button
                      onClick={() => onViewChange("my-services")}
                      className="text-slate-300 transition-colors hover:text-purple-400 text-left"
                    >
                      Meus Serviços
                    </button>
                    <button
                      onClick={() => onViewChange("my-orders")}
                      className="text-slate-300 transition-colors hover:text-purple-400 text-left"
                    >
                      Meus Pedidos
                    </button>
                    <button
                      onClick={() => onViewChange("profile")}
                      className="text-slate-300 transition-colors hover:text-purple-400 text-left"
                    >
                      Meu Perfil
                    </button>
                    <Button 
                      onClick={() => onViewChange("create-service")}
                      className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 justify-start"
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Criar Serviço
                    </Button>
                  </>
                ) : (
                  navLinks.map((link) => (
                    <button
                      key={link.name}
                      onClick={() => handleNavClick(link.view, link.href)}
                      className="text-slate-300 transition-colors hover:text-purple-400 text-left"
                    >
                      {link.name}
                    </button>
                  ))
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
