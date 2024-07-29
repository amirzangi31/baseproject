import Layout from '@layouts/Layout'
import StoreProvider from '@providers/StoreProvider'
import './globals.css'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa">
      <body >
        <StoreProvider>
          <Layout>
            {children}
          </Layout>
        </StoreProvider>
      </body>
    </html>
  )
}
