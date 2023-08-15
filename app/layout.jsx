'use client';

import NavComponent from "@/components/NavComponent"
import './globals.css';

 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
        <main>
          <NavComponent />
          {children}
        </main>
      </body>
    </html>
  )
}
