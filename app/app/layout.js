import './globals.css'

export const metadata = {
  title: 'مطعمنا',
  description: 'موقع مطعمنا للطلبات',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  )
}
