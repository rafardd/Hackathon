import { Code, Palette, Video, Megaphone, FileText, Brain, TrendingUp, Music } from "lucide-react";
import { Card } from "./ui/card";

interface CategoriesProps {
  onCategoryClick: () => void;
}

export function Categories({ onCategoryClick }: CategoriesProps) {
  const categories = [
    {
      icon: Code,
      name: "Programação & Tech",
      count: "2,543 serviços",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Palette,
      name: "Design Gráfico",
      count: "1,892 serviços",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Video,
      name: "Vídeo & Animação",
      count: "1,234 serviços",
      color: "from-red-500 to-orange-500",
    },
    {
      icon: Megaphone,
      name: "Marketing Digital",
      count: "1,567 serviços",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: FileText,
      name: "Redação & Tradução",
      count: "987 serviços",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Brain,
      name: "IA & Machine Learning",
      count: "654 serviços",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: TrendingUp,
      name: "Negócios & Consultoria",
      count: "876 serviços",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: Music,
      name: "Música & Áudio",
      count: "543 serviços",
      color: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <section id="categories" className="container mx-auto px-4 py-20 bg-slate-900/30">
      <div className="text-center mb-16">
        <h2 className="mb-4 text-slate-100">
          Explore serviços por{" "}
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            categoria
          </span>
        </h2>
        <p className="text-slate-300 max-w-2xl mx-auto">
          Encontre o profissional perfeito para o seu projeto
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((category, index) => {
          const Icon = category.icon;
          return (
            <Card
              key={index}
              onClick={onCategoryClick}
              className="bg-slate-900/50 backdrop-blur-xl border-purple-500/20 p-6 hover:border-purple-500/40 transition-all hover:shadow-lg hover:shadow-purple-500/10 cursor-pointer group"
            >
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${category.color} mb-4 group-hover:scale-110 transition-transform`}>
                <Icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-1 text-slate-100">{category.name}</h3>
              <p className="text-slate-400">{category.count}</p>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
