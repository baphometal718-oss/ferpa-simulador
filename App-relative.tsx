import { FERPAProvider } from './context/FERPAContext';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { Simulador } from './pages/Simulador';
import { Analisis } from './pages/Analisis';
import { Configuracion } from './pages/Configuracion';
import { useFERPA } from './context/FERPAContext';
import { Toaster } from './components/ui/sonner';

function AppContent() {
  const { vistaActual } = useFERPA();

  return (
    <Layout>
      {vistaActual === 'dashboard' && <Dashboard />}
      {vistaActual === 'simulador' && <Simulador />}
      {vistaActual === 'analisis' && <Analisis />}
      {vistaActual === 'configuracion' && <Configuracion />}
    </Layout>
  );
}

function App() {
  return (
    <FERPAProvider>
      <AppContent />
      <Toaster 
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#1e293b',
            border: '1px solid #334155',
            color: '#fff',
          },
        }}
      />
    </FERPAProvider>
  );
}

export default App;
