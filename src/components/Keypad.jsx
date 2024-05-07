import axios from 'axios'
import React, { useEffect, useState } from 'react'
import useWordle from '../hooks/useWordle'

const Keypad = ({ usedKeys }) => {
    const [letters, setLetters] = useState(null)
    const { handleKeyup } = useWordle()

    useEffect(() => {
        const fetchkey = async () =>{
            const response = await axios.get('http://localhost:3000/letters');
            setLetters(response.data);
        }
        fetchkey();
    }, [setLetters])
  
    return (
      <div className="keypad">
        {letters && letters.map(l => {
          const color = usedKeys[l.key]
          return (
            <div key={l.key} className={color}>{l.key}</div>
          )
        })}
      </div>
    )
}

export default Keypad