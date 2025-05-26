import { BrowserRouter } from 'react-router-dom'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/Budget-Tracker">
    <App />
  </BrowserRouter>
)
