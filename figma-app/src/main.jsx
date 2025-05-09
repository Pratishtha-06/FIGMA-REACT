import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeProvider } from './ThemeContext.jsx'
import App from './App.jsx'
import { MembersProvider } from './components/MemberContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <MembersProvider>
        <App />
      </MembersProvider>
    </ThemeProvider>
  </StrictMode>,
)
