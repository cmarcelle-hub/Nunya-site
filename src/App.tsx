import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import NotreIdentite from "./pages/NotreIdentite";
import Actualites from "./pages/Actualites";
import NosActionsLayout from "./pages/nos-actions/NosActionsLayout";
import NosActionsIndex from "./pages/nos-actions/NosActionsIndex";
import NosActionsTogo from "./pages/nos-actions/NosActionsTogo";
import NosActionsRdc from "./pages/nos-actions/NosActionsRdc";
import AgirEnsemble from "./pages/AgirEnsemble";
import FaireUnDon from "./pages/FaireUnDon";
import NotFound from "./pages/NotFound";
import NosActions from "./pages/NosActions";
import ActionsTogo from "./pages/nos-actions/ActionsTogo";
import TogoEducation from "./pages/nos-actions/TogoEducation";
import ProjetSoutienScolaireTogo from "./pages/nos-actions/ProjetSoutienScolaireTogo";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/notre-identite" element={<NotreIdentite />} />
          <Route path="/actualites" element={<Actualites />} />
          <Route path="/nos-actions" element={<NosActionsLayout />}>
            <Route index element={<NosActionsIndex />} />
              <Route path="togo" element={<NosActionsTogo />} />
                <Route path="togo/education" element={<TogoEducation />} />
                  <Route path="togo/education/soutien-scolaire" element={<ProjetSoutienScolaireTogo />} />
              <Route path="rdc" element={<NosActionsRdc />} />
          </Route>
          <Route path="/agir-ensemble" element={<AgirEnsemble />} />
          <Route path="/faire-un-don" element={<FaireUnDon />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
