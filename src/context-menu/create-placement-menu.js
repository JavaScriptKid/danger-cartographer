import React from 'react'
import { connect } from 'react-redux'
import createPlacement from '../landscape/create-placement'
import {setCursorValue} from '../action-creators/action-creators'

@connect((state, props) => {
    return {
        selectedElement: state.cursor.selectedElement,
        landscapePlacements: state.landscapePlacements,

        mapWidth: state.details.width,
        mapHeight: state.details.height,
        cellSize: state.viewSettings.cellSize,

        lastChosenX: state.cursor.lastChosenX,
        lastChosenY: state.cursor.lastChosenY,
        showCreateMenu: state.cursor.showCreateMenu
    }
})

class ContextMenu extends React.Component {

    getIdClass(type) {
        if (type == "object") {
            return "_color-pink"
        }
        if (type == "structure") {
            return "_color-green"
        }
        if (!type) {
            return "_color-blue"
        }

        return ""
    }

    handleClickLandscape() {
        createPlacement({
            x: this.props.lastChosenX,
            y: this.props.lastChosenY,
            width: 1,
            height: 1,
            skin: {
                id: "rectangle",
                fill1: "#b4da55",
            }
        });
        setCursorValue({showCreateMenu:false})
    }
    handleClickStructure() {
        createPlacement({
            x: this.props.lastChosenX,
            y: this.props.lastChosenY,
            width: 1,
            height: 2,
            type: "structure",
            skin: {
                id: "sidetable",
                fill1: "#8B5B55",
            }
        });
        setCursorValue({showCreateMenu:false})
    }
    handleClickObject() {
        createPlacement({
            x: this.props.lastChosenX,
            y: this.props.lastChosenY,
            width: 1,
            height: 1,
            type: "object",
            skin: {
                id: "coffeeCup",
                fill1: "#B27D4D",
            }
        });
        setCursorValue({showCreateMenu:false})
    }

    render() {

        if (!this.props.showCreateMenu) {
            return null;
        }


        const style = {
            position: "absolute",
            zIndex:100,
            left: this.props.lastChosenX * this.props.cellSize + this.props.cellSize/2,
            top: this.props.lastChosenY * this.props.cellSize,
            transform: `translateX(-50%) translateY(${this.props.cellSize/4 + 14}px)`,
        };


        return (
            <div style={style} className="context-menu">
                <div className="context-menu_title">Add Placement</div>
                <button onClick={::this.handleClickLandscape}>Landscape</button>
                <button onClick={::this.handleClickStructure}>Structure</button>
                <button onClick={::this.handleClickObject}>Object</button>
            </div>
        );
    }
}

export default ContextMenu;