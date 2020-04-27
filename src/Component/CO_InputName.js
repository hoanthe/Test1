import React, { Component } from 'react';

class CO_ONINPUTNAME extends Component {

    onInputName = (event) => {
        this.props.CO_onInputName(event)
    }
    render() {
        return (
            <>
                <div className="input-group box">
                    <div className="input-group-addon"><span>Tên</span></div>
                    <input type="text"
                        onChange={(event) => this.onInputName(event)}
                        className="form-control"
                        id="exampleInputAmountName"
                        placeholder="Name"
                    />
                </div>
            </>
        )
    }
}

export default CO_ONINPUTNAME;