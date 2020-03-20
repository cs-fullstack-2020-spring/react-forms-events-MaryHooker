import React,{Component} from 'react';

class RecipeDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            // iterate through the passed down recipe array
            <div>
                <h1>Display</h1>
                {
                    this.props.recipeList.map((recipe,index) =>{
                        return(
                            <div key={index}>
                                <p>Title: {recipe.title}</p>
                                <p>Make Time: {recipe.time}</p>
                                <p>Serving Size: {recipe.size}</p>
                            </div>
                        )
                    }

                    )
                }
            </div>
         );
    }
}
 
export default RecipeDisplay;