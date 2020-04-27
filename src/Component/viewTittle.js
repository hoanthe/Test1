import React, { Component } from 'react';

class ViewTittle extends Component {
    render() {

        let year = this.props.yearTittle;
        let month = this.props.monthTittle;
        let day = this.props.dayTittle;
        let name = this.props.nameTittle;
        let incident = this.props.incidentTittle;

        return (
            <>
                <div className="panel panel-info">
                    <div className="panel-heading">
                        <h3 className="panel-title">Tiêu đề</h3>
                    </div>
                    <div className="panel-body">
                        <p>作業日報 {name} {year}/{month}/{(day === 1) ? day : day + incident}</p>
                    </div>
                </div>
            </>
        )
    }
}

export default ViewTittle;