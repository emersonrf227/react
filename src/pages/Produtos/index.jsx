import React, { Component, Fragment } from 'react';

import axios from 'axios';

import './style.css';



class Produtos extends Component {
    constructor(props) {
        super(props);
        console.log(props.match.params.id);

        this.state = {

            id: props.match.params.id,
            data: {},
        };
    }


    componentDidMount() {
        axios.all([
            axios.get(`https://api.mercadolibre.com/items/${this.state.id}`),
            axios.get(` https://api.mercadolibre.com/items/${this.state.id}/description`)
        ])

            .then(([item, description]) => {
                this.setState({
                    data: {
                        ...item.data,
                        description: description.data.plain_text
                    },

                });
            })
            .catch((err) => {
                console.log(err);
            });

    }






    render() {
        console.log(this.state.data);
        const { data } = this.state


        if (!Object.keys(data).length) {
            return (
                <div style={{ fontSize: 40 }}> Carregando.. </div>
            );
        } else {
            return (
                <Fragment>


                    <div className="demo-card" style={{ backgroundColor: '#eee' }}>
                        
                        <div className="mdl-card__supporting-text">
                            
                                    <div className="mdl-grid" style={{ backgroundColor: '#fff', borderRadius: 10 }}>

                                        <div className="mdl-cell mdl-cell--6-col mdl-cell--6-col-phone mdl-cell--4-col-tablet">
                                            <img src={data.pictures[1].url} style={{ maxWidth: '100%' }} />
                                        </div>

                                        <div className="mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet">
                                            <div className="text2">{this.state.data.id}</div>
                                            <div className="text2">{this.state.data.sold_quantity} vendidos</div>
                                            <div><h3> {this.state.data.title}</h3></div>
                                            <div className="text2"><b>Vendedor:</b> {this.state.data.domain_id}</div>
                                            <h2><div><b>R$: {this.state.data.price}</b></div></h2>
                                            <button className="mdl-button mdl-js-button  mdl-cell--12-col-phone mdl-button--raised mdl-button--colored">
                                                Comprar
                                            </button>
                                        </div>

                                        <div className="mdl-cell mdl-cell--12-col mdl-cell--12-col-phone mdl-cell--12-col-tablet">
                                            <div><h4>Descrição:</h4></div>
                                            <div className="textDesc">  {this.state.data.description} </div>
                                        </div>

                                    </div>

                        </div>
                    </div>


                </Fragment >


            );


        }
    }
}
export default Produtos;