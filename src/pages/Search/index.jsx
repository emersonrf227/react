import React, { Component, Fragment } from 'react';

import axios from 'axios';

import { Link } from 'react-router-dom';

import formatMoeda from '../../lib/formatmoeda';

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
        const value = this.textSearch.value;
        document.getElementById('divShow').display = "block";




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
                                    <div className="text2" style={{ textDecoration: null }} ><h6> <span> {item.title}</span></h6></div>
                                </Link>
                                <div className="text1"><h4><b><span> {formatMoeda(item.price)}</span> </b> </h4>
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

                
            </Fragment>
        )



    }


    render() {
        return (

            <div>
                <style>{'body { background-color: #eee; }'}</style>
                <div id="container">
                    <div className="backAzul">

                        <center>
                            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">

                                <input class="mdl-textfield__input" style={{ backgroundColor: '#fff', borderRadius: 5 }} ref={input => this.textSearch = input} type="text" id="search" />
                                <label class="mdl-textfield__label" for="sample3">Pesquisar</label>


                            </div>
                            <label class="mdl-button mdl-js-button mdl-button--icon" for="sample6">
                                <i class="material-icons" onClick={this.onSearch}>search</i>
                            </label>
                        </center>
                    </div>

                </div>

                <div class="mdl-grid">
                    <div class="mdl-cell mdl-cell--2-col mdl-cell--2-col-tablet">

                        <div id="divShow"  style={this.state.showMyComponent ? {} : { display: 'none' }} >  

                       
                   
                            <span> Resultado da pesquisa:</span>

                        </div>    
                        
                    </div>
                   
                   
                    <div class="mdl-cell mdl-cell--10-col mdl-cell--10-col-tablet">

                        {this.state.results.map(this.renderResult)}

                    </div>

                </div>

            </div>



        );
    }
}

export default Search;