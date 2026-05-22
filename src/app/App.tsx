import { useAuthHydration } from "@/features/membership/hooks/useAuthHydration";
import AppRouter from "@/routes/AppRouter";

function App() {
  useAuthHydration ()

  return (
    <AppRouter />
  )
}

export default App
