import { useState } from "react";
import { Card } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Star, Wallet, Shield, TrendingUp, Edit, Check, X } from "lucide-react";
import { Progress } from "./ui/progress";

export function UserProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState("stellar_user");
  const [bio, setBio] = useState("Entusiasta de cripto desde 2020. Sempre buscando as melhores oportunidades no mercado.");

  const userStats = {
    totalTransactions: 1247,
    totalVolume: "$2,458,392",
    successRate: 99.8,
    memberSince: "Jan 2020",
  };

  const reviews = [
    {
      from: "crypto_trader_92",
      rating: 5,
      comment: "Transação super rápida e confiável. Recomendo!",
      date: "2 dias atrás",
    },
    {
      from: "blockchain_fan",
      rating: 5,
      comment: "Excelente comunicação. Tudo ocorreu perfeitamente.",
      date: "1 semana atrás",
    },
    {
      from: "btc_hodler",
      rating: 4,
      comment: "Bom negociante, apenas houve um pequeno atraso mas nada grave.",
      date: "2 semanas atrás",
    },
  ];

  const connectedWallets = [
    { name: "MetaMask", address: "0x742d...5e8a", verified: true, primary: true },
    { name: "Trust Wallet", address: "0x9f3a...2b1c", verified: true, primary: false },
    { name: "Phantom", address: "DYw8...kL2p", verified: false, primary: false },
  ];

  const handleSave = () => {
    setIsEditing(false);
    // Aqui salvaria as alterações
  };

  return (
    <section className="container mx-auto px-4 py-12 min-h-screen">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Profile Header */}
        <Card className="bg-slate-900/50 backdrop-blur-xl border-purple-500/20 p-8">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="relative">
              <Avatar className="h-32 w-32 border-4 border-purple-500/30">
                <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=stellar" />
                <AvatarFallback className="bg-gradient-to-br from-purple-600 to-cyan-600 text-3xl">
                  SP
                </AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-2 border-4 border-slate-900">
                <Shield className="h-5 w-5 text-white" />
              </div>
            </div>

            <div className="flex-1 space-y-4">
              {isEditing ? (
                <div className="space-y-3">
                  <div>
                    <Label htmlFor="username" className="text-slate-200">Nome de usuário</Label>
                    <Input
                      id="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="bg-slate-800 border-purple-500/20 text-slate-200 mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="bio" className="text-slate-200">Bio</Label>
                    <Textarea
                      id="bio"
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                      className="bg-slate-800 border-purple-500/20 text-slate-200 mt-1"
                      rows={3}
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button
                      onClick={handleSave}
                      className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500"
                    >
                      <Check className="h-4 w-4 mr-2" />
                      Salvar
                    </Button>
                    <Button
                      onClick={() => setIsEditing(false)}
                      variant="outline"
                      className="border-purple-500/30 text-slate-200"
                    >
                      <X className="h-4 w-4 mr-2" />
                      Cancelar
                    </Button>
                  </div>
                </div>
              ) : (
                <>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="text-slate-100">@{username}</h2>
                      <Badge className="bg-green-500/20 text-green-300 border-green-500/20">
                        Verificado
                      </Badge>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                        <span className="text-slate-300 ml-1">(5.0)</span>
                      </div>
                    </div>
                    <p className="text-slate-400">{bio}</p>
                  </div>
                  <Button
                    onClick={() => setIsEditing(true)}
                    variant="outline"
                    className="border-purple-500/30 text-slate-200 hover:bg-purple-500/10"
                  >
                    <Edit className="h-4 w-4 mr-2" />
                    Editar Perfil
                  </Button>
                </>
              )}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-purple-500/20">
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {userStats.totalTransactions}
              </div>
              <p className="text-slate-400">Transações</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {userStats.totalVolume}
              </div>
              <p className="text-slate-400">Volume Total</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {userStats.successRate}%
              </div>
              <p className="text-slate-400">Taxa de Sucesso</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {userStats.memberSince}
              </div>
              <p className="text-slate-400">Membro desde</p>
            </div>
          </div>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Connected Wallets */}
          <Card className="bg-slate-900/50 backdrop-blur-xl border-purple-500/20 p-6">
            <h3 className="text-slate-100 mb-4 flex items-center gap-2">
              <Wallet className="h-5 w-5 text-purple-400" />
              Carteiras Conectadas
            </h3>
            <div className="space-y-3">
              {connectedWallets.map((wallet, index) => (
                <div
                  key={index}
                  className="p-4 bg-slate-800/50 rounded-lg border border-purple-500/10"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="text-slate-200">{wallet.name}</p>
                        {wallet.primary && (
                          <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/20 text-xs">
                            Principal
                          </Badge>
                        )}
                      </div>
                      <p className="text-slate-400 font-mono">{wallet.address}</p>
                    </div>
                    {wallet.verified ? (
                      <Shield className="h-5 w-5 text-green-400" />
                    ) : (
                      <Shield className="h-5 w-5 text-slate-600" />
                    )}
                  </div>
                  {!wallet.verified && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full border-purple-500/30 text-purple-300 hover:bg-purple-500/10 mt-2"
                    >
                      Verificar Carteira
                    </Button>
                  )}
                </div>
              ))}
              <Button
                variant="outline"
                className="w-full border-purple-500/30 text-slate-200 hover:bg-purple-500/10"
              >
                + Adicionar Nova Carteira
              </Button>
            </div>
          </Card>

          {/* Trust Score */}
          <Card className="bg-slate-900/50 backdrop-blur-xl border-purple-500/20 p-6">
            <h3 className="text-slate-100 mb-4 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-purple-400" />
              Pontuação de Confiança
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-slate-300">Verificação de Identidade</span>
                  <span className="text-green-400">100%</span>
                </div>
                <Progress value={100} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-slate-300">Histórico de Transações</span>
                  <span className="text-green-400">98%</span>
                </div>
                <Progress value={98} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-slate-300">Avaliações Positivas</span>
                  <span className="text-green-400">99%</span>
                </div>
                <Progress value={99} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-slate-300">Tempo de Resposta</span>
                  <span className="text-yellow-400">85%</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>
              <div className="pt-4 border-t border-purple-500/20">
                <div className="flex items-center justify-between">
                  <span className="text-slate-100">Pontuação Geral</span>
                  <div className="flex items-center gap-2">
                    <div className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                      95.5
                    </div>
                    <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Reviews */}
        <Card className="bg-slate-900/50 backdrop-blur-xl border-purple-500/20 p-6">
          <h3 className="text-slate-100 mb-6 flex items-center gap-2">
            <Star className="h-5 w-5 text-purple-400" />
            Avaliações Recebidas ({reviews.length})
          </h3>
          <div className="space-y-4">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="p-4 bg-slate-800/50 rounded-lg border border-purple-500/10"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10 border-2 border-purple-500/30">
                      <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${review.from}`} />
                      <AvatarFallback className="bg-gradient-to-br from-purple-600 to-cyan-600">
                        {review.from[0].toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-slate-200">@{review.from}</p>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-3 w-3 ${
                              i < review.rating
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-slate-600"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <span className="text-slate-500">{review.date}</span>
                </div>
                <p className="text-slate-300">{review.comment}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
