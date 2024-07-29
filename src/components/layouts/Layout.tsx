"use client"
import React, { ReactNode, useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const Layout = ({children} : {children : ReactNode}) => {
      const [query] = useState(() => new QueryClient())
      return (
            <QueryClientProvider client={query}>
                  {children}
                  <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
      )
}

export default Layout