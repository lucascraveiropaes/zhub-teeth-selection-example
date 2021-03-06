import React, { Component } from "react";
import Teeths               from "./Teeths";
import Select               from "./Select";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showTeeths: true,
            selected: [],
            item: null,
        }
    }

    onPress = item => this.setState({ item, showTeeths: false });

    onSelect = classColor => {
        let { selected, item } = this.state;

        selected = selected.filter(el => el.item !== item);
        selected.push({ item, classColor });

        this.setState({ selected, item: null, showTeeths: true });
    }

    close = item => {
        let { selected } = this.state;

        selected = selected.filter(el => el.item !== item);

        this.setState({ selected, item: null, showTeeths: true });
    }

    render() {
        const { selected, showTeeths, item } = this.state;

        return (
            <div className="container-center">
                {(showTeeths) ? (
                    <Teeths onPress={ this.onPress } selected={ selected }/>
                ) : (
                    <Select onSelect={ this.onSelect } close={ this.close } item={ item }/>
                )}
            </div>
        );
    }
}

export default App;
