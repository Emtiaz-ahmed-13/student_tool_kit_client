import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import { Toaster } from 'sonner';
import { QueryClientProvider } from '@/components/providers/query-client-provider';
import { SiteShell } from '@/components/layout/site-shell';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Student Life Toolkit',
  description: 'Your all-in-one study companion',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <QueryClientProvider>
            <SiteShell>
              {children}
            </SiteShell>
            <Toaster position="top-right" richColors />
          </QueryClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

