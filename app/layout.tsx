import '../styles/globals.css';
import Header from './components/Header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className="antialiased max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl">
        <main className="px-2 lg:px-0">
          <div className="sticky w-full max-w-6xl mx-auto p-2 h-16 md:h-20 xl:h-24 flame shadow-md rounded rotate-180" />
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
