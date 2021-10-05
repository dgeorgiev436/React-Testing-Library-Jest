import {useState} from "react"
import Output from "./Output"

const Greeting = () => {
	const [changeTest, setChangeTest] = useState(false);
	
	const changeTestHandler = () => {
		setChangeTest(true);
	}
	
	return(
		<div>
			<h2>Hello world</h2>
			{!changeTest && <Output>It is good to see you</Output>}
			{changeTest && <Output>changed</Output>}

			<button onClick={changeTestHandler}>Change Test</button>
		</div>
	)
}

export default Greeting