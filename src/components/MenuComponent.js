import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null,
        };
        console.log('Menu component constructor invoked')
    }

    componentDidMount() {
        console.log('Component did mount invoked')
    }

    onDishSelect(dish) {
        this.setState({selectedDish: dish});
    }
    static renderDish(dish) {
        if(dish != null){
            return(
              <card>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
              </card>
            );
        }
        else {
            return(
                <div></div>
            )
        }
    }
    render() {
        console.log('Render invoked');
        const menu =this.props.dishes.map((dish) => {
            return (
              <div key={dish.id} className="col-12 col-md-5 m-1">
                  <Card onClick={() => this.onDishSelect(dish)}>
                      <CardImg width="100%" src={dish.image} alt={dish.name} />
                      <CardImgOverlay>
                          <CardTitle heading>{dish.name}</CardTitle>
                      </CardImgOverlay>
                  </Card>
              </div>
            );
        });
        return (
            <div className="container">
                <div className="row">
                        {menu}
                </div>
                <div className="row">
                    {Menu.renderDish(this.state.selectedDish)}
                </div>
            </div>
        );
    }
}

export default Menu;
