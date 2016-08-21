import React from 'react'
import { connect } from 'react-redux'

@connect((state, props) => {
    return {
        landscapePlacements: state.landscapePlacements
    }
})

class GetWallsBtn extends React.Component {



    landscapePlacementsToWallsArray() {
        const dataset = this.props.landscapePlacements;
        return Object.keys( dataset ).map(key => {
            const model = dataset[key];
            return {
                _id: key,
                x: model.x * 16,
                y: model.y * 16,
                width: model.width * 16,
                height: model.height * 16
            }
        });
    }


    handleClick() {



        var w = window.open();
        var text = JSON.stringify(this.landscapePlacementsToWallsArray(), null, 2);
        $(w.document.body).html(`<pre>${text}</pre>`);

    }

    render() {
        return (
            <button onClick={::this.handleClick}>Get Walls</button>
        );
    }
}

export default GetWallsBtn;