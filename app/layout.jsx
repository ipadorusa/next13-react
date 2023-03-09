import Header from '@/components/molecules/header'
import '@/style/global.scss'
import Footer from '@/components/molecules/footer'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div className="warp__app">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
