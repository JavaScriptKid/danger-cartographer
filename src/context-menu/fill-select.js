import React from 'react'
import { connect } from 'react-redux'
import { mergeLandscape } from '../action-creators/action-creators'
import Colors from '../_data/colors'

@connect((state, props) => {
    return {
        selectedElement: state.cursor.selectedElement,
        selectedLandscapePlacement: state.landscapePlacements[state.cursor.selectedElement]

    }
})

class FillSelectList extends React.Component {

    handleOptionChange(newValue) {
        mergeLandscape(this.props.selectedElement, {
            skin: {
                fill1:newValue
            }
        })
    }

    render() {

        const currentFillColor = this.props.selectedLandscapePlacement ? this.props.selectedLandscapePlacement.skin.fill1 : null;

        const colors = Object.keys(Colors).map(color => {
            const model = Colors[color];
            const isSelected = (model.hex == currentFillColor);
            return (
                <FillColorOption key={color} hex={model.hex} isSelected={isSelected} handleChange={::this.handleOptionChange} />
            )
        });

        return (
            <div className="fills-container">
                {colors}
            </div>
        );
    }
}

class FillColorOption extends React.Component {

    handleClick(e){
        e.preventDefault();
        this.props.handleChange(this.props.hex);
    }

    renderSelectedCheck(fill="#fff") {
        return (
            <svg viewBox="0 0 32 32" width={18}>
                <path fill={fill} d="M27 4l-15 15-7-7-5 5 12 12 20-20z"></path>
            </svg>
        )
    }

    render() {
        const colorBlobStyle = {
            width: 26,
            height: 26,
            display: "block",
            margin: "0 auto",
            borderRadius: "50%",
            background: this.props.hex,
            position: "relative"

        };

        const checkStyle = {
            position: "absolute",
            display: "block",
            left: "50%",
            top: "50%",
            marginLeft: -9,
            marginTop: -9,
        };

        return (
            <a className="fill-container_fill" href="#" onClick={::this.handleClick}>
                <span style={colorBlobStyle}>
                    {this.props.isSelected ? <span style={checkStyle}>{this.renderSelectedCheck()}</span> : null}
                </span>
            </a>
        )
    }
}

export default FillSelectList;