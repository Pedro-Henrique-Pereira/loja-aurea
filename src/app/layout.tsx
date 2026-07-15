import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata={title:'Áurea — moda & perfumaria',description:'Loja conceito de moda e perfumaria'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body>{children}</body></html>}
