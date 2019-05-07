import React, {Component} from 'react'; 

class Produtos extends Component {
    constructor(props) {
        super(props); 
            console.log(props.match.params.id);
    }

render(){ 
    return(

        <div>Produtos</div> 


        );
    }
}

export default Produtos;