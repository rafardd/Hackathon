import { useState } from "react";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { HowItWorks } from "./components/HowItWorks";
import { Categories } from "./components/Categories";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { LoginModal } from "./components/LoginModal";
import { WalletConnectModal } from "./components/WalletConnectModal";
import { UserProfile } from "./components/UserProfile";
import { TransactionHistory } from "./components/TransactionHistory";
import { Marketplace } from "./components/Marketplace";
import { MyServices } from "./components/MyServices";
import { MyOrders } from "./components/MyOrders";
import { CreateService } from "./components/CreateService";
import { ServiceDetail } from "./components/ServiceDetail";

export default function App() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showWalletModal, setShowWalletModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentView, setCurrentView] = useState<"home" | "profile" | "marketplace" | "my-services" | "my-orders" | "history" | "create-service" | "service-detail">("home");
  const [selectedServiceId, setSelectedServiceId] = useState<number | null>(null);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowLoginModal(false);
    setShowWalletModal(true);
  };

  const handleWalletConnect = () => {
    setShowWalletModal(false);
  };

  const handleViewService = (serviceId: number) => {
    setSelectedServiceId(serviceId);
    setCurrentView("service-detail");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
      <Header 
        onLoginClick={() => setShowLoginModal(true)}
        isLoggedIn={isLoggedIn}
        onViewChange={setCurrentView}
        currentView={currentView}
      />
      
      {currentView === "home" && (
        <>
          <Hero onGetStarted={() => setShowLoginModal(true)} />
          <Categories onCategoryClick={() => setCurrentView("marketplace")} />
          <Features />
          <HowItWorks />
        </>
      )}

      {currentView === "marketplace" && (
        <Marketplace 
          isLoggedIn={isLoggedIn}
          onViewService={handleViewService}
        />
      )}

      {currentView === "profile" && isLoggedIn && (
        <UserProfile />
      )}

      {currentView === "my-services" && isLoggedIn && (
        <MyServices onCreateNew={() => setCurrentView("create-service")} />
      )}

      {currentView === "my-orders" && isLoggedIn && (
        <MyOrders />
      )}

      {currentView === "history" && isLoggedIn && (
        <TransactionHistory fullPage />
      )}

      {currentView === "create-service" && isLoggedIn && (
        <CreateService onSuccess={() => setCurrentView("my-services")} />
      )}

      {currentView === "service-detail" && selectedServiceId && (
        <ServiceDetail 
          serviceId={selectedServiceId}
          isLoggedIn={isLoggedIn}
          onLoginRequired={() => setShowLoginModal(true)}
        />
      )}

      <Footer />

      <LoginModal 
        open={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onLogin={handleLogin}
      />

      <WalletConnectModal 
        open={showWalletModal}
        onClose={() => setShowWalletModal(false)}
        onConnect={handleWalletConnect}
      />
    </div>
  );
}
