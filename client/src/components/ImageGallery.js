import React, { Component } from 'react';
import{connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ReactPaginate from 'react-paginate';
import * as ImageGalleryActions from "../actions";
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';


class ImageGallery extends Component {


	constructor(props){
		super(props);
		this.state = {

			currPage:1,
			perPage:30,
			pageCount:0,
			selected:false


		}
	}




	 componentDidMount(){


		this.props.loadImages();

	}

	pageClick = (e) => {

		console.log(e)


		this.setState({currPage:e.selected})

	}

	imgClick = (id) => {

		

		this.props.prevImg(id);
		this.setState({selected:true})
	}


	currImgSet = () => {

		const images = this.props.images;
		const currPage = this.state.currPage;
		const perPage = this.state.perPage;

		const indexLastImg = currPage * perPage;
        const indexFirstImg = indexLastImg - perPage;
        
        const currentImgs = images.slice(indexFirstImg, indexLastImg);
        

        const renderImgs = currentImgs.map((currObj, index) => {

        	
        	let imgsrc = currObj.thumbnailUrl;
			let keyid = currObj.id;
			let bigsrc = currObj.url;

        	return (<div key={keyid} id={keyid} className="imgcard">
						<img onClick={(e) => {this.imgClick(e.currentTarget.parentNode.id)} }  className="innerimg" src={imgsrc}></img>
						<button onClick={(e) => {this.props.addfav(e.currentTarget.parentNode.id)}} className="btnHeart">Heart</button>

			</div>)




        
        });

        this.calcPages();


        return renderImgs

	}



	calcPages = () => {


			const images = this.props.images;
			const perPage = this.state.perPage;

			const totalpages = Math.ceil(images.length / perPage);

			this.setState(prevState => {

			

					if(prevState.pageCount == totalpages){
						return null
					}else{
						return {...prevState, pageCount:totalpages}
					}


					}
				);

			

    }



	



	render(){



       console.log(this.props.selectedimg)
		return(


  


			<div className="imgsgallery">



				<div className={this.props.images.length > 0 && this.state.selected != true ? "gallery" : this.state.selected != true ? "gallery" : "galleryload"}>
				{this.props.images.length > 0  && this.state.selected != true ? this.currImgSet() : this.state.selected != true ? <div className="loader"></div> : null}


					   
					      
					      
					       
				
				 {this.state.selected != true ? null : <img onClick={() => this.setState({selected:false})} src={this.props.selectedimg}></img>}
					   
					       
					      
					  


				</div>



				<div className="imgpagescontainer">
						<ReactPaginate
						  containerClassName={'containerClassName'}
						  pageClassName={'pageClassName'}
						  pageLinkClassName={'pageClassNameA'}
						  activeClassName={'pageClassNameA'}
						  activeLinkClassName={'pageLinkClassNameA'}
						  nextClassName={'pageClassName'}
						  previousClassName={'pageClassName'}
				          previousLabel={'previous'}
				          nextLabel={'next'}
				          breakLabel={'...'}
				          breakClassName={'pageClassName'}
				          pageCount={this.state.pageCount}
				          marginPagesDisplayed={2}
				          pageRangeDisplayed={5}
				          onPageChange={this.pageClick}
				          containerClassName={'pagination'}
				          subContainerClassName={'pages pagination'}
				          activeClassName={'active'}
				        />
				</div>
				<div className="favbar">
				   <div className="titlefavs">{this.props.favcount} Favorites: Maybe showcase favs here</div>
				</div>
			</div>


			)


	}




}


function mapStateToProps(state) {
  return {
    images: state.images,
    selectedImage: state.selectedImage,
    favcount: state.favcount,
    favorites: state.favorites,
    selectedimg: state.selectedimg
  }
}


function mapActionCreatorsToProps(dispatch) {
  return bindActionCreators(ImageGalleryActions, dispatch);
}



export default connect(mapStateToProps,mapActionCreatorsToProps)(ImageGallery);