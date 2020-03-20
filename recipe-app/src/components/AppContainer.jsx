import React,{Component} from 'react';
import Header from './Header';
import RecipeDisplay from './RecipeDisplay';
import RecipeForm from './RecipeForm';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            recipeList:[],
         }
    }
    //function to be passed down to form component to update the parent array
    callBackFunction = (pass) =>{
        this.setState(
            {
                recipeList: pass
            }
        )
    }

    render() { 
        return ( 
            <div>
                <h1>Recipe App</h1>
                <Header name='Mary'/>
                {/* pass down array in state */}
                <div>
                    <RecipeDisplay recipeList={this.state.recipeList}/>
                </div>
                {/* pass down call back function so current array from form can be passed back up */}
                <div>
                    <RecipeForm callBackFunction={this.callBackFunction}/>
                </div>
            </div>
         );
    }
}
 
export default AppContainer;