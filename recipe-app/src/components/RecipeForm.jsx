import React, { Component } from 'react';

class RecipeForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            time: '',
            size: '',
            recipeList: [],
        }
    }
    //function to update state when input fields are used
    handleInputs = (event) => {
        if (event.target.name === 'title') {
            this.setState({ title: event.target.value })
        } else if (event.target.name === 'time') {
            this.setState({ time: event.target.value })
        } else if (event.target.name === 'size') {
            this.setState({ size: event.target.value })
        }
    }

    handleSubmission= (event) =>{
        event.preventDefault();

        //push new values into stated array
        this.state.recipeList.push(
            {
                title: this.state.title,
                time: this.state.time,
                size: this.state.size,
            }
        )

        //reset current array globally
        this.setState(
            {
                recipeList:this.state.recipeList
            }
        )

        //pull down parent call back function and send up current array
        this.props.callBackFunction(this.state.recipeList)
    }

    render() {
        return (
            <div>
                <form action="">
                    <fieldset>
                        <legend>Form</legend>
                        <label htmlFor="title">Title: </label>
                        <input type="text" name='title' id='title' value={this.state.title} onChange={this.handleInputs} />

                        <label htmlFor="time">Make Time: </label>
                        <input type="text" name='time' id='time' value={this.state.time} onChange={this.handleInputs} />

                        <label htmlFor="size">Serving Size: </label>
                        <input type="text" name='size' id='size' value={this.state.size} onChange={this.handleInputs} />
                    </fieldset>
                </form>
                <button onClick={this.handleSubmission}>Submit</button>
            </div>
        )
    }

}

export default RecipeForm;