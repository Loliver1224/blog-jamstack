import Head from 'next/head'
import Link from 'next/link';
import { ReactNode } from 'react'
import Profile from '@/components/Profile';

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Head>
        <title>Next.js + WordPress as headless CMS</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <header className="sticky top-0 p-2 flex flex-row text-xl">
        <div className="container mx-auto">
          Blog
        </div>
        <nav>
          <ul className="flex flex-row list-none justify-center">
            <li className="w-44">
              <a href="">
                Home
              </a>
            </li>
            <li className="w-44">
              <Link href="/memories">
                Memories
              </Link>
            </li>
            <li className="w-44">
              <Link href="/about">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="flex justify-center">
        <div className="flex gap-4 flex-wrap w-10/12 lg:w-10/12 mx-6 my-4">
          <div className="bg-gray-100 flex-auto w-2/3 p-6 rounded-md">
            { children }
          </div>
          <div className="bg-gray-100 lg:w-[31%] w-full p-6 rounded-md">
            <Profile />
          </div>
        </div>
      </main>

      <footer className="bottom-0 p-2 text-center">
        <div className="text-white">
          Copyright &copy; 2023 Daichi Furukawa All Rights Reserved.
        </div>
      </footer>
    </>
  )
}