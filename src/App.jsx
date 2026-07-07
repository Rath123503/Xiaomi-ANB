import { BrowserRouter } from 'react-router-dom'
import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-white text-[#191919] font-sans selection:bg-[#FF6900] selection:text-white">
        
        <Navbar />

        <main className="flex-1">
          <h1 className="text-center py-20 text-2xl font-bold">Welcome to Xiaomi Store</h1>
        </main>

        <Footer />

      </div>
    </BrowserRouter>
  )
}

export default App