import React, { Component, Fragment } from 'react';

import axios from 'axios';

import { Link } from 'react-router-dom';

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

                console.log(data.results);

                this.setState({

                    results: data.results,



                });


            })

    }


    renderResult(item) {
        return (


            <Fragment>



                <div className="demo-card mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet">

                    <div className="mdl-card__supporting-text">

                        <div className="mdl-grid" style={{ backgroundColor: '#fff', borderRadius: 5 }}>

                            <div className="mdl-cell mdl-cell--3-col mdl-cell--3-col-phone mdl-cell--3-col-tablet">
                                <Link to={`produtos/${item.id}`} >
                                    <img src={item.thumbnail} style={{ maxWidth: '100%' }} />
                                </Link>
                            </div>

                            <div className="mdl-cell mdl-cell--9-col mdl-cell--4-col-tablet">
                                <Link to={`produtos/${item.id}`} >
                                    <div className="text2" style={{ textDecoration:null }} ><h6> <span> {item.title}</span></h6></div>
                                </Link>
                                <div className="text1"><h4><b>R$:  <span> {item.price}</span> </b> </h4>
                                    <br />
                                    <span className="text2"> {item.installments.quantity}X </span>   <span className="text2"> R$:  {item.installments.amount}</span>
                                </div>
                                <div>
                                    <span className="text2"> Total vendidos: {item.sold_quantity} </span>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>











                {/*            
                <Link to={`produtos/${item.id}`} >    
                <div className="demo-card-wide mdl-card mdl-shadow--2dp">
                    <div className="mdl-card__title">
                        <h2 className="mdl-card__title-text">  <img src={item.thumbnail} style={{ maxWidth: '100%' }} /> </h2>
                    </div>
                    <div className="mdl-card__supporting-text">
                    <span> {item.installments.quantity}</span>  X <span> {item.installments.amount}</span>    <span> {item.price}</span>
                    
        </div>
                    <div className="mdl-card__actions mdl-card--border">
                       
                      
                        <span> {item.title}</span>
                   
                
                    </div>
                    <div className="mdl-card__menu">
                        <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
                            <i className="material-icons">share</i>
                        </button>
                    </div>
                </div>
                </Link> */}



            </Fragment>
        )



    }


    render() {
        return (

            <div>
                <style>{'body { background-color: #eee; }'}</style>
                <div id="container">
                    <div className="backAzul">

                        <input type="text" className="inputSearch" onChange={this.onSearch} />
                    </div>

                </div>

                <div class="mdl-grid">
                    <div class="mdl-cell mdl-cell--2-col mdl-cell--2-col-tablet">Content</div>
                    <div class="mdl-cell mdl-cell--10-col mdl-cell--10-col-tablet">

                        {this.state.results.map(this.renderResult)}

                    </div>

                </div>

            </div>



        );
    }
}

export default Search;