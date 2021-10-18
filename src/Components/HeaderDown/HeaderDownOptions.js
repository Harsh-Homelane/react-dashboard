import React, { Component } from 'react'

export default class HeaderDownOptions extends Component {
    render() {
        return (
            <div className="mr-2 pl-3 pr-3 pb-4">
                {this.props.option}
            </div>
        )
    }
}
