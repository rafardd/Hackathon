import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Wallet, Check } from "lucide-react";
import { useState } from "react";

interface WalletConnectModalProps {
  open: boolean;
  onClose: () => void;
  onConnect: () => void;
}

export function WalletConnectModal({ open, onClose, onConnect }: WalletConnectModalProps) {
  const [selectedWallet, setSelectedWallet] = useState<string | null>(null);

  const wallets = [
    {
      id: "metamask",
      name: "MetaMask",
      description: "Conecte sua carteira MetaMask",
      icon: "🦊",
      popular: true,
    },
    {
      id: "walletconnect",
      name: "WalletConnect",
      description: "Escaneie QR code com sua carteira",
      icon: "📱",
      popular: true,
    },
    {
      id: "coinbase",
      name: "Coinbase Wallet",
      description: "Use sua carteira Coinbase",
      icon: "💼",
      popular: false,
    },
    {
      id: "trustwallet",
      name: "Trust Wallet",
      description: "Conecte via Trust Wallet",
      icon: "🛡️",
      popular: false,
    },
    {
      id: "phantom",
      name: "Phantom",
      description: "Para transações Solana",
      icon: "👻",
      popular: false,
    },
    {
      id: "ledger",
      name: "Ledger",
      description: "Hardware wallet Ledger",
      icon: "🔐",
      popular: false,
    },
  ];

  const handleWalletSelect = (walletId: string) => {
    setSelectedWallet(walletId);
    setTimeout(() => {
      onConnect();
    }, 1000);
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl bg-slate-900 border-purple-500/20">
        <DialogHeader>
          <DialogTitle className="text-slate-100 flex items-center gap-2">
            <Wallet className="h-6 w-6 text-purple-400" />
            Conectar Carteira
          </DialogTitle>
          <DialogDescription className="text-slate-400">
            Escolha sua carteira preferida para começar a usar o StellarPay
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {wallets.map((wallet) => (
            <button
              key={wallet.id}
              onClick={() => handleWalletSelect(wallet.id)}
              disabled={selectedWallet === wallet.id}
              className={`relative p-4 rounded-xl border transition-all hover:border-purple-500/60 text-left ${
                selectedWallet === wallet.id
                  ? "bg-purple-500/20 border-purple-500"
                  : "bg-slate-800/50 border-purple-500/20"
              }`}
            >
              {wallet.popular && (
                <span className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-xs">
                  Popular
                </span>
              )}
              
              <div className="flex items-start gap-3">
                <span className="text-3xl">{wallet.icon}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-slate-100">{wallet.name}</h3>
                    {selectedWallet === wallet.id && (
                      <Check className="h-5 w-5 text-green-400" />
                    )}
                  </div>
                  <p className="text-slate-400 mt-1">
                    {selectedWallet === wallet.id ? "Conectando..." : wallet.description}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-6 p-4 bg-purple-500/10 border border-purple-500/20 rounded-xl">
          <p className="text-slate-300 flex items-start gap-2">
            <span className="text-purple-400">💡</span>
            <span>
              Você pode conectar múltiplas carteiras e alternar entre elas a qualquer momento
              nas configurações do seu perfil.
            </span>
          </p>
        </div>

        <Button
          variant="outline"
          onClick={onClose}
          className="w-full border-purple-500/30 text-slate-200 hover:bg-purple-500/10"
        >
          Conectar Depois
        </Button>
      </DialogContent>
    </Dialog>
  );
}
