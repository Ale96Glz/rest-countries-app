import { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

function getInitialDark() {
  const saved = localStorage.getItem('theme')
  if (saved === 'dark') return true
  if (saved === 'light') return false
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

export default function Layout() {
  const [dark, setDark] = useState(getInitialDark)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <div className="flex min-h-screen w-full flex-col bg-background font-bold text-foreground">
      <header className="flex w-full shrink-0 justify-between bg-elements px-8 py-8 shadow-md md:px-12">
        <Link to="/" className="text-lg md:text-xl">
          Where in the world?
        </Link>
        <button
          type="button"
          onClick={() => setDark((current) => !current)}
          className="flex cursor-pointer items-center gap-2"
          aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {dark ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-5" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1.5M12 19.5V21M4.22 4.22l1.06 1.06M18.72 18.72l1.06 1.06M3 12h1.5M19.5 12H21M4.22 19.78l1.06-1.06M18.72 5.28l1.06-1.06M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-5" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 14.3A8.5 8.5 0 1 1 9.7 3 7 7 0 0 0 21 14.3Z" />
            </svg>
          )}
          {dark ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>
      <main className="flex-1 px-8 py-12 md:px-12">
        <Outlet />
      </main>
      <footer className="flex w-full shrink-0 justify-center px-8 py-12 text-center font-light">
        <p>
          Challenge by{' '}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
            className="font-semibold underline-offset-2 hover:underline"
          >
            Frontend Mentor
          </a>
          . Coded by Alejandro González Osorio
        </p>
      </footer>
    </div>
  )
}
