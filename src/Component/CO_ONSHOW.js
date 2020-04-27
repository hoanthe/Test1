import React, {Component} from 'react';

class CO_ONSHOW extends Component {

    onShow = (event) => {
        this.props.onShow_Work(event)
    }
    render() {
        return (
            <>
                <div className="box">
                    <button onClick={(event) => this.onShow(event)}
                        type="button"
                        className="btn btn-primary box-btn"
                        name="1"
                    >Ca 1</button>
                    <button onClick={(event) => this.onShow(event)}
                        type="button"
                        className="btn btn-primary box-btn"
                        name="2"
                    >Ca 2</button>
                    <button onClick={(event) => this.onShow(event)}
                        type="button"
                        className="btn btn-primary box-btn"
                        name="3"
                    >Ca 3</button>
                </div>
            </>
        )
    }
}
export default CO_ONSHOW;