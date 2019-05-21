import React, { Component } from 'react';

import axios from 'axios';

import {Link} from 'react-router-dom';

import './style.css';

class Search extends Component {
    constructor() {
        super();
        this.onSearch = this.onSearch.bind(this);

        this.state = {

            results: [],
        };
    }

    onSearch(event) {
        console.log(event.currentTarget.value);

        const value = event.currentTarget.value;





        axios.get(`https://api.mercadolibre.com/sites/MLB/search?q=${value}`)
            .then(({ data }) => {

                this.setState({

                    results: data.results,


                });


            })

    }


    renderResult(item) {
        return(
            <li key={item.id}>
                <span> {item.id}</span>
                <span> {item.title}</span>
                <Link  to={`produtos/${item.id}`} >
                    Acessar 
                </Link>
            </li>
           

        )



    }


    render() {
        return (

            <div>
                <div id="container"> 
                    <div className="backAzul">
                        
                        <input type="text" className="inputSearch" onChange={this.onSearch} />
                    </div>
                    
                </div>
                <ul>
                    {this.state.results.map(this.renderResult)}
                </ul>
            </div>
            
           

        );
    }
}

export default Search;