const initialState = {favorites:[], favcount:0, images:[], selectedimg:null}


export default function modimgs(state=initialState, action){

	switch(action.type){

		
		    case 'IMAGES_RECEIVED':
		      //console.log(JSON.stringify(action.images));
		      return {...state, images: action.images};
		    case 'LOAD_IMAGES_FAILURE':
		      return state;
		    case 'SELECT_IMAGE':
		      return {...state, selectedImage: action.image};
		    case 'PREVIEW_IMG':
		    	let bigurl = null;

		    	for( var i = 0; i < state.images.length; i++){ 

				   if ( state.images[i].id == action.id) {
				    	
				    	bigurl = state.images[i].url;
				   }
				}
				
				return {...state, selectedimg:bigurl}

		    case 'SAVE_FAV':	    	    
		    	let add = true;

		    	for( var i = 0; i < state.favorites.length; i++){ 
				   if ( state.favorites[i] == action.id) {
				     state.favorites.splice(i, 1); 
				     console.log('spliced')
				     add = false;
				   }
				}


				if(add === true){
				   state.favorites.push(action.id);
				}
			

				const newfav = state.favorites;

		    	return {...state, favorites:newfav, favcount:state.favorites.length }
		    default:
		      return state









	}
}