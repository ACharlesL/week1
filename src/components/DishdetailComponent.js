import React from 'react';
import { CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

    function RenderDish({dish}) {
       // const desc =this.props.dishes.map((dish) => {
        const dishCurrent = dish;
        console.log(this.props.dish)
        let dishComment = this.props.dish.comments.map((comment) => {
            return(

                <div className="row">
                    <p>{comment.comment}</p>
                </div>
            )
        })
        return(
            <div className="container row">
               <div className="row col-12 col-md-5 m-1">
                   <CardImg width="100%" src={dishCurrent.image} alt={dishCurrent.name}/>
                   <CardImgOverlay>
                   <CardTitle heading>{dishCurrent.name}</CardTitle>
                   </CardImgOverlay>
                       <p>{dishCurrent.description}</p>
               </div>
               <div className="row col-12 col-md-5 m-1">
                   <h3>Comments</h3>
                   <p>{dishComment}</p>
               </div>
            </div>
           );
       // })

    }

    function RenderComments({comments}) {

    }



export default DishDetail;
