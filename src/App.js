
import { createContext, useContext, useEffect, useRef, useState } from 'react';
import jsPDF from 'jspdf';
import ReportTemplate from './ReportTemplate';
import UserData from './UserData';
import Aadhar from './Aadhar';
import axios from 'axios'

export const globalData = createContext(); 



function App() {
	const reportTemplateRef = useRef(null);
	const [inputData, setInputData] = useState({});
	const [imageData, setImageData] = useState({});
	const [userGen, setUserGen] = useState("");
	// const [languages, setLanguages] = useState([]);
	// const [from, setFrom] = useState('en');
	// const [to, setTo] = useState('en');
	// const [input, setInput] = useState('');
	// const [output, setOutput] = useState('');


	const getUserData = (data,imagePic,genVal)=>{
		setInputData(data)
		setImageData(imagePic)
        console.log("getting data from userdata",data)
		setUserGen(genVal)
		console.log(genVal)
    }
	// const getUserImage = (data)=>{
		
    //     console.log("getting data from userdata",imageData)
    // }

	// console.log("getting data from userdata",imageData)
	console.log(imageData)
	console.log(inputData)
	const translatorFunc = async () => {

		// axios.get("https://libretranslate.com/languages")
		// 	.then((res) => {
		// 		setLanguages(res.data)
		// 		console.log(res.data)
		// 	})

		// const res = await fetch('https://libretranslate.com/languages', {
		// 	method: "GET",
		// 	body: JSON.stringify({
		// 		q: "",
		// 		source: "auto",
		// 		target: "cs",
		// 		format: "text",
		// 		api_key: ""
		// 	}),
		// 	headers: { "Content-Type": "application/json" }
		// });

		// console.log(await res.json());
	}

	// useEffect(() => {
	// 	translatorFunc();
	// }, [])
	// console.log(languages,12)

	const translatioFunc = async () => {

		// const res = await fetch("https://libretranslate.com/translate", {
		// 	method: "POST",
		// 	body: JSON.stringify({
		// 		q: input,
		// 		source: from,
		// 		target: to,
		// 		format: "text",
		// 		api_key: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
		// 	}),
		// 	headers: { "Content-Type": "application/json" }
		// });

		// console.log(await res.json());

	}

		// const params = new URLSearchParams();
		// params.append('q', input);
		// params.append('source', from);
		// params.append('target', to);
		// params.append('api_key', 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx');

		// axios.post('https://libretranslate.de/translate',params,{
		// 	headers: {
		// 		'accept': 'application/json',
		// 		'Content-Type': 'application/x-www-form-urlencoded',
		// 	},
		// }).then(res => {
		// 	setOutput(res.data)
		// 	console.log(res.data.translatedText)
		// })

	





	const handleGeneratePdf = () => {
		const doc = new jsPDF({
			format: 'a4',
			unit: 'px',
		});

		// Adding the fonts.
		doc.setFont('Inter-Regular', 'normal');

		doc.html(reportTemplateRef.current, {
			async callback(doc) {
				await doc.save('document');
			},
		});
	};

	return (

		<globalData.Provider value={{imageData,userGen}}>
		<>
			<div>
				<button className="button" onClick={handleGeneratePdf}>
					Generate PDF
				</button>
               
               {/* { imageData && <img src={URL.createObjectURL(imageData)} alt=""/>} */}
			   {/* <img src={imageData} alt="" /> */}

				{/* <div>
					From({from}):
					<select name="" id="" onChange={(e) => setFrom(e.target.value)}>
						{languages && languages.map((item) => {
							return (
								<option key={item.code} value={item.code}>{item.name}</option>
							)
						})}
					</select>

					To({to}):
					<select name="" id="" onChange={(e) => setTo(e.target.value)}>
						{languages && languages.map((item) => {
							return (
								<option value={item.code} key={item.code} >{item.name}</option>
							)
						})}
					</select>



				</div>
				<div>
					<label htmlFor="">enter your word for translate</label>
					<input type="text" onInput={(e) => setInput(e.target.value)} />
				</div>
				<div>
					<label htmlFor="">Traslation is here</label>
					<textarea name="" id="" cols="30" rows="10" value={output}></textarea>
				</div>

				<button onClick={e => translatioFunc()}>Translate</button> */}

                <UserData onSubmit={getUserData}/>

               


				<div ref={reportTemplateRef}>
				<Aadhar {...inputData} />
				</div>
			</div>
			
		</>
		</globalData.Provider>
	);
}

export default App;
