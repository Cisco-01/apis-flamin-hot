import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className="antialiased max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl">
        <div className="sticky w-full max-w-6xl mx-auto p-2 h-16 md:h-20 xl:h-24 flame shadow-md rounded rotate-180" />
        {children}
      </body>
    </html>
  );
}
