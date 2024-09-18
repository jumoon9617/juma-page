import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Footer from './components/FooterComponents/Footer'
import Header from './components/HeaderComponents/Header'
import { AppRoutes } from './routes/AppRouter'

function App() {
  return (
    <div>
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  )
}

export default App
