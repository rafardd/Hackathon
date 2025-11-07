import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Plus, X, Upload, Check } from "lucide-react";
import { Badge } from "./ui/badge";

interface CreateServiceProps {
  onSuccess: () => void;
}

export function CreateService({ onSuccess }: CreateServiceProps) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [packages, setPackages] = useState([
    { name: "Básico", price: "", crypto: "BTC", deliveryDays: "", features: [""] },
  ]);

  const addPackage = () => {
    setPackages([...packages, { name: "", price: "", crypto: "BTC", deliveryDays: "", features: [""] }]);
  };

  const removePackage = (index: number) => {
    if (packages.length > 1) {
      setPackages(packages.filter((_, i) => i !== index));
    }
  };

  const addFeature = (packageIndex: number) => {
    const newPackages = [...packages];
    newPackages[packageIndex].features.push("");
    setPackages(newPackages);
  };

  const removeFeature = (packageIndex: number, featureIndex: number) => {
    const newPackages = [...packages];
    if (newPackages[packageIndex].features.length > 1) {
      newPackages[packageIndex].features = newPackages[packageIndex].features.filter((_, i) => i !== featureIndex);
      setPackages(newPackages);
    }
  };

  const updatePackage = (index: number, field: string, value: string) => {
    const newPackages = [...packages];
    (newPackages[index] as any)[field] = value;
    setPackages(newPackages);
  };

  const updateFeature = (packageIndex: number, featureIndex: number, value: string) => {
    const newPackages = [...packages];
    newPackages[packageIndex].features[featureIndex] = value;
    setPackages(newPackages);
  };

  return (
    <section className="container mx-auto px-4 py-12 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-slate-100 mb-2">
            Criar{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Novo Serviço
            </span>
          </h1>
          <p className="text-slate-400">
            Preencha os detalhes do seu serviço e comece a receber pedidos
          </p>
        </div>

        <form className="space-y-6">
          {/* Basic Info */}
          <Card className="bg-slate-900/50 backdrop-blur-xl border-purple-500/20 p-6">
            <h2 className="text-slate-100 mb-6">Informações Básicas</h2>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="title" className="text-slate-200">
                  Título do Serviço *
                </Label>
                <Input
                  id="title"
                  placeholder="Ex: Desenvolvimento de Landing Page Responsiva"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="mt-2 bg-slate-800 border-purple-500/20 text-slate-200"
                  required
                />
                <p className="text-slate-400 text-sm mt-1">
                  {title.length}/80 caracteres
                </p>
              </div>

              <div>
                <Label htmlFor="category" className="text-slate-200">
                  Categoria *
                </Label>
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger className="mt-2 bg-slate-800 border-purple-500/20 text-slate-200">
                    <SelectValue placeholder="Selecione uma categoria" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-purple-500/20">
                    <SelectItem value="programacao">Programação & Tech</SelectItem>
                    <SelectItem value="design">Design Gráfico</SelectItem>
                    <SelectItem value="video">Vídeo & Animação</SelectItem>
                    <SelectItem value="marketing">Marketing Digital</SelectItem>
                    <SelectItem value="redacao">Redação & Tradução</SelectItem>
                    <SelectItem value="ia">IA & Machine Learning</SelectItem>
                    <SelectItem value="negocios">Negócios & Consultoria</SelectItem>
                    <SelectItem value="musica">Música & Áudio</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="description" className="text-slate-200">
                  Descrição do Serviço *
                </Label>
                <Textarea
                  id="description"
                  placeholder="Descreva seu serviço em detalhes. O que você oferece? Qual sua experiência? O que está incluído?"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="mt-2 bg-slate-800 border-purple-500/20 text-slate-200 min-h-[200px]"
                  required
                />
                <p className="text-slate-400 text-sm mt-1">
                  Mínimo 200 caracteres. {description.length}/2000
                </p>
              </div>

              <div>
                <Label className="text-slate-200 mb-2 block">
                  Imagens do Serviço *
                </Label>
                <div className="grid grid-cols-3 gap-4">
                  <div className="aspect-video bg-slate-800 rounded-lg border-2 border-dashed border-purple-500/30 flex items-center justify-center cursor-pointer hover:border-purple-500/60 transition-colors">
                    <div className="text-center">
                      <Upload className="h-8 w-8 text-slate-400 mx-auto mb-2" />
                      <p className="text-slate-400 text-sm">Upload</p>
                    </div>
                  </div>
                </div>
                <p className="text-slate-400 text-sm mt-2">
                  Adicione até 5 imagens (JPG, PNG). Primeira imagem será a capa.
                </p>
              </div>
            </div>
          </Card>

          {/* Packages */}
          <Card className="bg-slate-900/50 backdrop-blur-xl border-purple-500/20 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-slate-100">Pacotes de Preços</h2>
              <Button
                type="button"
                onClick={addPackage}
                variant="outline"
                size="sm"
                className="border-purple-500/30 text-purple-300 hover:bg-purple-500/10"
              >
                <Plus className="h-4 w-4 mr-2" />
                Adicionar Pacote
              </Button>
            </div>

            <div className="space-y-6">
              {packages.map((pkg, packageIndex) => (
                <div
                  key={packageIndex}
                  className="p-4 bg-slate-800/50 rounded-lg border border-purple-500/10"
                >
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/20">
                      Pacote {packageIndex + 1}
                    </Badge>
                    {packages.length > 1 && (
                      <Button
                        type="button"
                        onClick={() => removePackage(packageIndex)}
                        variant="ghost"
                        size="sm"
                        className="text-red-400 hover:text-red-300 hover:bg-red-500/10"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    )}
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <Label className="text-slate-200">Nome do Pacote</Label>
                      <Input
                        placeholder="Ex: Básico, Padrão, Premium"
                        value={pkg.name}
                        onChange={(e) => updatePackage(packageIndex, "name", e.target.value)}
                        className="mt-1 bg-slate-800 border-purple-500/20 text-slate-200"
                      />
                    </div>

                    <div>
                      <Label className="text-slate-200">Prazo de Entrega (dias)</Label>
                      <Input
                        type="number"
                        placeholder="Ex: 3"
                        value={pkg.deliveryDays}
                        onChange={(e) => updatePackage(packageIndex, "deliveryDays", e.target.value)}
                        className="mt-1 bg-slate-800 border-purple-500/20 text-slate-200"
                      />
                    </div>

                    <div>
                      <Label className="text-slate-200">Preço</Label>
                      <Input
                        type="number"
                        step="0.000001"
                        placeholder="0.025"
                        value={pkg.price}
                        onChange={(e) => updatePackage(packageIndex, "price", e.target.value)}
                        className="mt-1 bg-slate-800 border-purple-500/20 text-slate-200"
                      />
                    </div>

                    <div>
                      <Label className="text-slate-200">Criptomoeda</Label>
                      <Select
                        value={pkg.crypto}
                        onValueChange={(value) => updatePackage(packageIndex, "crypto", value)}
                      >
                        <SelectTrigger className="mt-1 bg-slate-800 border-purple-500/20 text-slate-200">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-800 border-purple-500/20">
                          <SelectItem value="BTC">Bitcoin (BTC)</SelectItem>
                          <SelectItem value="ETH">Ethereum (ETH)</SelectItem>
                          <SelectItem value="SOL">Solana (SOL)</SelectItem>
                          <SelectItem value="USDT">Tether (USDT)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <Label className="text-slate-200">O que está incluído</Label>
                      <Button
                        type="button"
                        onClick={() => addFeature(packageIndex)}
                        variant="ghost"
                        size="sm"
                        className="text-purple-300 hover:bg-purple-500/10"
                      >
                        <Plus className="h-4 w-4 mr-1" />
                        Item
                      </Button>
                    </div>
                    <div className="space-y-2">
                      {pkg.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex gap-2">
                          <Check className="h-5 w-5 text-green-400 flex-shrink-0 mt-2" />
                          <Input
                            placeholder="Ex: Design responsivo"
                            value={feature}
                            onChange={(e) => updateFeature(packageIndex, featureIndex, e.target.value)}
                            className="flex-1 bg-slate-800 border-purple-500/20 text-slate-200"
                          />
                          {pkg.features.length > 1 && (
                            <Button
                              type="button"
                              onClick={() => removeFeature(packageIndex, featureIndex)}
                              variant="ghost"
                              size="icon"
                              className="text-red-400 hover:text-red-300 hover:bg-red-500/10"
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Submit */}
          <div className="flex gap-4">
            <Button
              type="button"
              variant="outline"
              className="flex-1 border-purple-500/30 text-slate-200 hover:bg-purple-500/10"
            >
              Salvar como Rascunho
            </Button>
            <Button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                onSuccess();
              }}
              className="flex-1 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500"
            >
              Publicar Serviço
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
