import React, { Component, Fragment } from 'react';

import axios from 'axios';



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






                    <div id="container-fluid">
                        <div className="mdl-card  mdl-cell--12-col mdl-shadow--2dp">
                        <div className="mdl-grid">
                        


                            <div className="mdl-cell mdl-cell--6-col">

                                <div><img src={data.pictures[1].url} /></div>


                            </div>


                            <div className="mdl-cell mdl-cell--6-col">
                                <div>{this.state.data.id}</div>
                                <div>{this.state.data.sold_quantity} vendidos</div>
                                <div><h3> {this.state.data.title}</h3></div>
                                <div><b>Vendedor:</b> {this.state.data.domain_id}</div>
                                <h2><div><b>R$:</b> {this.state.data.price}</div></h2>

                                <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
                                    Comprar
                                </button>





                            </div>

                            <div className="mdl-cell mdl-cell--12-col">

                                <div><h4>Descrição:</h4></div>
                                <div>  {this.state.data.description} </div>


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