import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import Wordle
 from "./components/Wordle"
export default function App() {
  const [solution, setSolution] = useState(null)
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/solutions');
        const randomSolution = response.data[Math.floor(Math.random() * response.data.length)];
        setSolution(randomSolution.word);
        
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
    
  }, [setSolution])
  return (
<div>
      <h1>DIGIT HUNT</h1>
      {solution && <Wordle solution={solution} />}
    </div>
  )
}