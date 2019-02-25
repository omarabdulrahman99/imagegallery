import axios from 'axios';


export const getImages = async () => {

	const imageres = await axios.get('https://jsonplaceholder.typicode.com/photos');
	//console.log(imageres.data);

	

		
		return imageres.data

	
	
}