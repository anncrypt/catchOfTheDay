import React, { Component } from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {

    myInput = React.createRef();

    goToStore = event => {
        // 1. stop the form from automatically submitting (default form behaviour)
        event.preventDefault();
        // 2. get the text from the input and store in the variable

        // получается велью оф нан (.value)
        const storeName = this.myInput.value;
        console.log(storeName);
        // 3. Change the page to /store/whatever-they-entered
        this.props.history.push(`/store/${storeName}`);
    }

    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please Enter A Store</h2>
                <input 
                    type="text" 
                    required placeholder="Store Name" defaultValue={getFunName()} 
                />
                <button type="submit">Visit Store</button>
            </form>
        )
    }
}

export default StorePicker;