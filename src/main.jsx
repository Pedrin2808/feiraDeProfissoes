import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Navegacao from './routes'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navegacao />
  </StrictMode>,
)
