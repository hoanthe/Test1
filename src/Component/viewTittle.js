import React, { Component } from 'react';

class viewTittle extends Component {
    render() {
        return (
            <>
                <div className="panel panel-info">
                    <div className="panel-heading">
                        <h3 className="panel-title">Tiêu đề</h3>
                    </div>
                    <div className="panel-body">
                        <p>作業日報 {this.state.name} {year}/{month}/{(day === 1) ? day : day + this.state.incident}</p>
                    </div>
                </div>
            </>
        )
    }
}

export default viewTittle;