import { useRef, useState } from 'react'
import { BiSearchAlt } from 'react-icons/bi'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const inputEl = useRef(null);

  const handleClick = () => {
    setIsOpen(open => {
      if (!open) inputEl.current.focus()
      return !open;
    })

  }

  return (
    <main className='flex items-center justify-center h-screen'>
      <div className='relative'>
        <input
          className={`text-2xl h-20 border-2 outline-none border-black rounded-full transition-all duration-500 ${isOpen && "pl-10 pr-24"} ${isOpen ? "w-96" : "w-20"}`}
          type='text'
          ref={inputEl}
        />
        <button className={`bg-white border-2 rounded-full border-black w-20 h-20 flex items-center justify-center absolute top-0 right-0 transition}`} onClick={handleClick}>
          <BiSearchAlt className='h-10 w-10' />
        </button>
      </div>
    </main>
  )
}

export default App
