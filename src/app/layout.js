import { Prompt } from 'next/font/google'
import { SearchForm } from './components/SeachForm';

const prompt = Prompt({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
})

import { Aside } from './components/Aside';
import './globals.css';

export const metadata = {
  title: "Code Connect",
  description: "Uma rede social para desenvolvedores",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={prompt.className}>
      <body>
        <div className='app-container'>
          <div>
            <Aside />
          </div>
          <div className='main-content'>
            <SearchForm />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
