import React, { Component } from 'react'

let dish_1 = {
  nameofdish: "toro",
  typeofdish: "Sashimi",
  price: 6
};


export class Posttomenu extends Component {
    
    async postData(url = '', data) {
        try{
            const result = await fetch(url, {
                method: 'POST',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(data),
            });
            console.log(result);
        }catch(err) {
            console.log(err)
        }
    }

    render() {
        return (
            <div>
                <button onClick={ () => this.postData('http://localhost:8080/menu',dish_1) }>Press to Post</button>
            </div>
        )
    }
}

export default Posttomenu
