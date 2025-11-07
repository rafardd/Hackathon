import { ArrowUpRight, ArrowDownLeft, Clock, Filter, Download } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { useState } from "react";

interface TransactionHistoryProps {
  fullPage?: boolean;
}

export function TransactionHistory({ fullPage = false }: TransactionHistoryProps) {
  const [filterType, setFilterType] = useState("all");
  const [filterCrypto, setFilterCrypto] = useState("all");

  const allTransactions = [
    {
      type: "send",
      crypto: "BTC",
      amount: "0.0234",
      value: "$1,245.50",
      to: "0x742d...5e8a",
      time: "2 min atrás",
      date: "07 Nov 2025, 14:32",
      status: "completed",
      fee: "0.00012",
      txHash: "0x9f3a2b1c4d5e6f7a8b9c0d1e2f3a4b5c",
    },
    {
      type: "receive",
      crypto: "ETH",
      amount: "2.5",
      value: "$3,750.00",
      from: "0x9f3a...2b1c",
      time: "15 min atrás",
      date: "07 Nov 2025, 14:17",
      status: "completed",
      fee: "0",
      txHash: "0x1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d",
    },
    {
      type: "send",
      crypto: "SOL",
      amount: "45.0",
      value: "$890.25",
      to: "0x1a2b...9c8d",
      time: "1 hora atrás",
      date: "07 Nov 2025, 13:02",
      status: "completed",
      fee: "0.00025",
      txHash: "0x4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e",
    },
    {
      type: "receive",
      crypto: "ADA",
      amount: "1,200",
      value: "$456.00",
      from: "0x4f5e...3d2c",
      time: "2 horas atrás",
      date: "07 Nov 2025, 12:15",
      status: "pending",
      fee: "0",
      txHash: "0x7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f",
    },
    {
      type: "send",
      crypto: "ETH",
      amount: "1.2",
      value: "$1,800.00",
      to: "0x3c4d...8e9f",
      time: "5 horas atrás",
      date: "07 Nov 2025, 09:45",
      status: "completed",
      fee: "0.00018",
      txHash: "0x2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e",
    },
    {
      type: "receive",
      crypto: "BTC",
      amount: "0.0567",
      value: "$3,024.00",
      from: "0x5e6f...1a2b",
      time: "1 dia atrás",
      date: "06 Nov 2025, 16:20",
      status: "completed",
      fee: "0",
      txHash: "0x8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e",
    },
    {
      type: "send",
      crypto: "SOL",
      amount: "120.0",
      value: "$2,376.00",
      to: "0x7a8b...3c4d",
      time: "2 dias atrás",
      date: "05 Nov 2025, 11:10",
      status: "completed",
      fee: "0.00030",
      txHash: "0x5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f",
    },
    {
      type: "receive",
      crypto: "ADA",
      amount: "850",
      value: "$323.00",
      from: "0x9c0d...5e6f",
      time: "3 dias atrás",
      date: "04 Nov 2025, 15:30",
      status: "completed",
      fee: "0",
      txHash: "0x1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b",
    },
  ];

  const filteredTransactions = allTransactions.filter((tx) => {
    if (filterType !== "all" && tx.type !== filterType) return false;
    if (filterCrypto !== "all" && tx.crypto !== filterCrypto) return false;
    return true;
  });

  const displayedTransactions = fullPage ? filteredTransactions : filteredTransactions.slice(0, 4);

  const containerClass = fullPage
    ? "container mx-auto px-4 py-12 min-h-screen"
    : "container mx-auto px-4 py-20";

  return (
    <section className={containerClass}>
      {fullPage && (
        <div className="mb-8">
          <h1 className="text-slate-100 mb-2">
            Histórico de{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Transações
            </span>
          </h1>
          <p className="text-slate-400">
            Acompanhe todas as suas transações de criptomoedas
          </p>
        </div>
      )}

      {!fullPage && (
        <div className="text-center mb-16">
          <h2 className="mb-4 text-slate-100">
            Acompanhe suas{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              transações
            </span>
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Dashboard intuitivo para gerenciar todas as suas operações em um só lugar
          </p>
        </div>
      )}

      <Card className="max-w-6xl mx-auto bg-slate-900/50 backdrop-blur-xl border-purple-500/20 p-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <h3 className="text-slate-100">
              {fullPage ? "Todas as Transações" : "Transações Recentes"}
            </h3>
            <Badge variant="secondary" className="bg-purple-500/10 text-purple-300 border-purple-500/20">
              {filteredTransactions.length}
            </Badge>
          </div>

          {fullPage && (
            <div className="flex flex-wrap items-center gap-3">
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className="w-[140px] bg-slate-800 border-purple-500/20 text-slate-200">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-purple-500/20">
                  <SelectItem value="all">Todas</SelectItem>
                  <SelectItem value="send">Enviadas</SelectItem>
                  <SelectItem value="receive">Recebidas</SelectItem>
                </SelectContent>
              </Select>

              <Select value={filterCrypto} onValueChange={setFilterCrypto}>
                <SelectTrigger className="w-[140px] bg-slate-800 border-purple-500/20 text-slate-200">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-purple-500/20">
                  <SelectItem value="all">Todas Moedas</SelectItem>
                  <SelectItem value="BTC">Bitcoin</SelectItem>
                  <SelectItem value="ETH">Ethereum</SelectItem>
                  <SelectItem value="SOL">Solana</SelectItem>
                  <SelectItem value="ADA">Cardano</SelectItem>
                </SelectContent>
              </Select>

              <Button
                variant="outline"
                className="border-purple-500/30 text-slate-200 hover:bg-purple-500/10"
              >
                <Download className="h-4 w-4 mr-2" />
                Exportar
              </Button>
            </div>
          )}
        </div>

        <div className="space-y-4">
          {displayedTransactions.map((transaction, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row md:items-center justify-between p-4 rounded-xl bg-slate-800/50 border border-purple-500/10 hover:border-purple-500/30 transition-all gap-4"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`h-12 w-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                    transaction.type === "send" ? "bg-red-500/20" : "bg-green-500/20"
                  }`}
                >
                  {transaction.type === "send" ? (
                    <ArrowUpRight className="h-6 w-6 text-red-400" />
                  ) : (
                    <ArrowDownLeft className="h-6 w-6 text-green-400" />
                  )}
                </div>

                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <p className="text-slate-200">
                      {transaction.type === "send" ? "Envio" : "Recebimento"} {transaction.crypto}
                    </p>
                    <Badge
                      variant="secondary"
                      className={`${
                        transaction.status === "completed"
                          ? "bg-green-500/10 text-green-300 border-green-500/20"
                          : "bg-yellow-500/10 text-yellow-300 border-yellow-500/20"
                      }`}
                    >
                      {transaction.status === "completed" ? "Concluído" : "Pendente"}
                    </Badge>
                  </div>
                  <p className="text-slate-400 truncate">
                    {transaction.type === "send" ? "Para: " : "De: "}
                    {transaction.type === "send" ? transaction.to : transaction.from}
                  </p>
                  {fullPage && (
                    <p className="text-slate-500 font-mono text-xs mt-1 truncate">
                      TX: {transaction.txHash}
                    </p>
                  )}
                </div>
              </div>

              <div className="text-left md:text-right flex-shrink-0">
                <p
                  className={`${
                    transaction.type === "send" ? "text-red-400" : "text-green-400"
                  }`}
                >
                  {transaction.type === "send" ? "-" : "+"}
                  {transaction.amount} {transaction.crypto}
                </p>
                <p className="text-slate-400">{transaction.value}</p>
                {fullPage && transaction.type === "send" && (
                  <p className="text-slate-500">Taxa: {transaction.fee} {transaction.crypto}</p>
                )}
                <div className="flex items-center gap-1 text-slate-500 justify-start md:justify-end mt-1">
                  <Clock className="h-3 w-3" />
                  <span className="text-xs">{fullPage ? transaction.date : transaction.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {!fullPage && filteredTransactions.length > 4 && (
          <div className="mt-6 text-center">
            <Button
              variant="outline"
              className="border-purple-500/30 text-purple-300 hover:bg-purple-500/10"
            >
              Ver Todas as Transações
            </Button>
          </div>
        )}
      </Card>
    </section>
  );
}
