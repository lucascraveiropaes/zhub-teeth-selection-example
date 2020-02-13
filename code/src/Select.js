import React, { Component } from "react";

class Select extends Component {
    render() {
        const { onSelect, item, close } = this.props;

        return (
            <div className="container-center select">
                <div className="row">
                    <span>Dente { item }</span>
                    <button onClick={ () => close(item) }>x</button>
                </div>
                <button className="blue" onClick={ () => onSelect("blue") }>Manter</button>
                <button className="orange" onClick={ () => onSelect("orange") }>Fechar</button>
                <button className="green" onClick={ () => onSelect("green") }>Recuperar</button>
            </div>
        );
    }
}

export default Select;
