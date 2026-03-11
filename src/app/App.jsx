import "./styles"
import Router from "@/app/routing";
import ErrorBoundary from "@/app/ErrorBoundary";
import {AuthProvider} from "@/features/auth/index.js";

function App() {

  return (
    <ErrorBoundary>
        <AuthProvider>
          <Router/>
        </AuthProvider>
    </ErrorBoundary>
  )
}

export default App
