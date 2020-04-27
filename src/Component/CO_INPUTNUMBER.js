import React, { Component } from 'react';

class CO_INPUTNUMBER extends Component {

    onInput = (event) => {
        this.props.onInputNumber(event)
    }
    render() {
        return (
            <>
                <div className="input-group box">
                    <div className="input-group-addon"><span>Số lượng lỗi</span></div>
                    <input type="text"
                        onChange={(event) => this.onInput(event)}
                        className="form-control"
                        id="exampleInputAmount"
                        placeholder="Number" />
                </div>
            </>
        )
    }
}

export default CO_INPUTNUMBER;