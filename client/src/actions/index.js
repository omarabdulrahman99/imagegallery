const SAVE_FAV = "SAVE_FAV"
const DEL_FAV = "DEV_FAV"
const LOAD_IMAGES = 'LOAD_IMAGES';
const PREVIEW_IMG = 'PREVIEW_IMG';



export function loadImages() {

  return {
    type: LOAD_IMAGES
  }
}

export function prevImg(id){

	
	return {

		type: PREVIEW_IMG,
		id
	}
}


export function addfav(id){


	return {
		type:SAVE_FAV,
		id
	}

}

