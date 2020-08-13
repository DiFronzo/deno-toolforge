import React from 'react';
import logo from './img/Wikimedia_Deno_Logo.svg';
import './css/tailwind.output.css';

const Span: React.FC<{ bg: string; leading?: boolean }> = ({
  children,
  bg,
  leading,
}) => {
  return (
    <span
      className={
        `rounded px-2 h-6 inline-flex items-center text-white text-sm` +
        (bg ? ` ${bg}` : '') +
        (leading ? ` mr-2` : ` mx-2`)
      }
    >
      {children}
    </span>
  )
}

function App() {
  return (
    <div>
      <title>Deno Toolforge</title>
      <header className="border-b border-gray-200 py-3">
        <div className="container px-2 max-w-2xl mx-auto flex items-center justify-between">
          <a className="flex items-center" href="/"><img src={logo} alt="" className="h-10 w-auto sm:h-12 my-2"/>
            <div className="font-bold text-gray-900 leading-tight text-2xl sm:text-3xl tracking-tight">&nbsp;Deno</div>
            <div className="font-normal text-xl sm:text-3xl tracking-tight">&nbsp;Toolforge</div>
          </a>
          <div>
            <a
              href="https://github.com/DiFronzo/deno-toolforge"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                id="i-github"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                width="32"
                height="32"
              >
                <path
                  strokeWidth="0"
                  fill="currentColor"
                  d="M32 0 C14 0 0 14 0 32 0 53 19 62 22 62 24 62 24 61 24 60 L24 55 C17 57 14 53 13 50 13 50 13 49 11 47 10 46 6 44 10 44 13 44 15 48 15 48 18 52 22 51 24 50 24 48 26 46 26 46 18 45 12 42 12 31 12 27 13 24 15 22 15 22 13 18 15 13 15 13 20 13 24 17 27 15 37 15 40 17 44 13 49 13 49 13 51 20 49 22 49 22 51 24 52 27 52 31 52 42 45 45 38 46 39 47 40 49 40 52 L40 60 C40 61 40 62 42 62 45 62 64 53 64 32 64 14 50 0 32 0 Z"
                />
              </svg>
            </a>
          </div>
        </div>
      </header>
      <div className="container px-2 max-w-2xl mx-auto">
        <div className="my-5 text-xl">
          To use GitHub as a package registry for Deno, you only need to replace{' '}
          <code className="text-sm bg-gray-200 rounded p-1">github.com</code>{' '}
          {' '}
          with
          {' '}
          <code className="text-sm bg-gray-200 rounded p-1">deno.toolforge.org</code>{' '}
          like this:
        </div>
        <div className="my-5 text-gray-400">
          <Span leading bg="bg-green-500">
            deno.toolforge.org
          </Span>
          /<Span bg="bg-black">user</Span>/
          <Span bg="bg-black">repo</Span>/
          <Span bg="bg-black">branches or tags</Span>/
          <Span bg="bg-black">path/to/file</Span>
        </div>
        <div className="my-5 text-xl">Example:</div>
        <div className="my-5">
          <pre className="bg-black rounded-lg text-gray-200 overflow-auto">
            <code>{`
  import { opn } from 'https://deno.toolforge.org/hashrock/deno-opn/master/opn.ts'

  opn('https://deno.toolforge.org')
  `}</code>
          </pre>
        </div>
      </div>
      <footer className="border-t border-gray-200 my-10 py-5 text-gray-500">
        <div className="container px-2 max-w-2xl mx-auto">
        <span style={{fontFamily:"courier, courier, monospace", fontSize:"20px"}}>MIT</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
