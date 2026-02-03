import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import About from "@/pages/About";
import DigitalTransformation from "@/pages/services/DigitalTransformation";
import MarketingEngagement from "@/pages/services/MarketingEngagement";
import FinancialSustainability from "@/pages/services/FinancialSustainability";
import MarketAssessment from "@/pages/services/MarketAssessment";
import OperationalEfficiency from "@/pages/services/OperationalEfficiency";
import ImpactMeasurement from "@/pages/services/ImpactMeasurement";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services/digital-transformation" component={DigitalTransformation} />
      <Route path="/services/marketing-engagement" component={MarketingEngagement} />
      <Route path="/services/financial-sustainability" component={FinancialSustainability} />
      <Route path="/services/market-assessment" component={MarketAssessment} />
      <Route path="/services/operational-efficiency" component={OperationalEfficiency} />
      <Route path="/services/impact-measurement" component={ImpactMeasurement} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
