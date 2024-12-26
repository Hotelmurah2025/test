import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import './App.css'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        {/* Routes will be added here */}
      </main>
      <Footer />
    </div>
  )
}

export default App
