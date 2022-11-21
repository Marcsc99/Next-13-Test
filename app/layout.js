import '../styles/globals.css'
import Navigation from './components/Navigation'

export default function RootLayout ({ children }) {
  return (
    <html>
      <head>
        <title>My first Nextjs 13 App</title>
      </head>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
