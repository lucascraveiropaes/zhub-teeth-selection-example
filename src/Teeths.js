import React, { Component } from "react";

class Teeths extends Component {
    Item = ({ i, key }) => {
        const { selected, onPress } = this.props;
        const active = selected.find(e => e.item === i);
        
        return <li key={ key }><a onClick={ () => onPress(i) } className={ active ? `active ${active.classColor}` : "" }>{ i }</a></li>
    }

    render() {
        const { Item, props: { selected }} = this;

        const L1 = [18, 17, 16, 15, 14, 13, 12, 11];
        const L2 = [48, 47, 46, 45, 44, 43, 42, 41];
        const L3 = [21, 22, 23, 24, 25, 26, 27, 28];
        const L4 = [31, 32, 33, 34, 35, 36, 37, 38];

        return (
            <div className="container">
                <div className="teeth-container">
                    <ul>
                        { L1.map((i, k) =>
                            <Item i={ i } key={ k }/>
                        )}
                    </ul>
                    <ul>
                        { L2.map((i, k) =>
                            <Item i={ i } key={ k }/>
                        )}
                    </ul>
                </div>
                <div className="teeth-container">
                    <ul>
                        { L3.map((i, k) =>
                            <Item i={ i } key={ k }/>
                        )}
                    </ul>
                    <ul>
                        { L4.map((i, k) =>
                            <Item i={ i } key={ k }/>
                        )}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Teeths;

Teeths.defaultProps = {
    selected: []
}
