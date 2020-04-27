import React, { Component } from 'react';

class CO_ONCHANGEWORK extends Component {

    onChangeWork = (event) => {
        this.props.onChangeWorkRadio(event)
    }
    render() {
        return (
            <>
                <div className="radio">
                    <label>
                        <input type="radio"
                            name= {this.props.name}
                            id="input"
                            value= {this.props.value}
                            onClick={(event) => this.onChangeWork(event)}
                        // Minh họa ví dụ cho dễ hiểu checked đang ở đâu
                        // checked={this.state.first_Sec === 'first'}
                        />
                        {this.props.children}
                    </label>
                </div>
            </>
        )
    }
}
export default CO_ONCHANGEWORK;