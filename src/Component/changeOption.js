import React, { Component } from 'react';
import CO_ONINPUTNAME from './CO_InputName';
import CO_INPUTNUMBER from './CO_INPUTNUMBER';
import CO_ONCHANGEWORK from './CO_ONCHANGEWORK';
import CO_ONSHOW from './CO_ONSHOW';

class ChangeOption extends Component {

    onChangeSelect(event){
        this.props.halfPartOnChange(event)
    }

    render() {
        return (
            <>
                    <div className="panel panel-info">
                        <div className="panel-heading">
                            <h3 className="panel-title">Mail Server</h3>
                        </div>
                        <div className="panel-body">

                            <CO_ONINPUTNAME 
                                CO_onInputName = {this.props.onInputNameOption}
                            />

                            <CO_INPUTNUMBER 
                                onInputNumber = {this.props.onInputOption}
                            />

                            <CO_ONCHANGEWORK 
                                children = "Mail Trước"
                                value = "first"
                                name = "first_Sec"
                                onChangeWorkRadio = {this.props.onChangeWorkOption}
                            />

                            <CO_ONCHANGEWORK 
                                children = "Mail Sau"
                                value = "second"
                                name = "first_Sec"
                                onChangeWorkRadio = {this.props.onChangeWorkOption}
                            />

                            <CO_ONSHOW 
                                onShow_Work = {this.props.onShowOption}
                            />

                            
                            <select 
                                name="" 
                                id="input" 
                                class="form-control" 
                                required="required"
                                value = {this.props.halfpart}
                                onChange = {(event) => this.onChangeSelect(event)}
                            >
                                <option value="before4">Nghỉ 4h Trước</option>
                                <option value="before2">Nghỉ 2h Trước</option>
                                <option value="after4">Nghỉ 4h Sau</option>
                                <option value="after2">Nghỉ 2h Sau</option>
                            </select>
                            
                            
                        </div>
                    </div>
            </>
        )
    }
}

export default ChangeOption;