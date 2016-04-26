import React from 'react'
import { connect } from 'react-redux'
import quillIcon from '../_icons/quill'
import {setDetailsValue} from '../action-creators/action-creators'

@connect((state, props) => {
    return {
        title: state.details.title
    }
})

class MapTitle extends React.Component {

    constructor() {
        super();
        this.state = {
            isEditing: false,
            initialValue: null
        }
    }


    handleEditClick() {
        this.setState({
            isEditing: true,
            initialValue: this.props.title
        })
    }
    renderTitle() {
        return (
            <div className="map-title" onClick={::this.handleEditClick}>
                {this.props.title}
               <span className="map-title_edit-icon">
                   {quillIcon(16, '#fff')}
               </span>
            </div>
        );
    }

    handleEndingKey(e) {
        if (e.keyCode == 13) {
            this.setState({
                isEditing: false
            })
        }
        if (e.keyCode == 27) {
            setDetailsValue({
                title: this.state.initialValue
            });
            this.setState({
                isEditing: false
            })
        }
    }
    handleInputChange(e) {
        setDetailsValue({
            title: this.refs.input.value
        })
    }
    renderEditMode() {
        return (
            <div className="map-title">
                <input value={this.props.title}
                       type="text"
                       ref="input"
                       className="map-title_input"
                       autoFocus={true}
                       onChange={::this.handleInputChange}
                       onKeyDown={::this.handleEndingKey}
                />
            </div>
        )
    }


    render() {
        return this.state.isEditing ? this.renderEditMode() : this.renderTitle();
    }
}

export default MapTitle;