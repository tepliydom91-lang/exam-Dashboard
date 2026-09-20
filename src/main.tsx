import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeContextProvider } from './context/ThemeContextProvider.tsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/index.tsx'
import CssBaseline from '@mui/material/CssBaseline'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeContextProvider>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeContextProvider>
  </StrictMode>,
)
