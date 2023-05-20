import './globals.css'

export const metadata = {
  title: 'Google App',
  description: 'This is a clone Google website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
