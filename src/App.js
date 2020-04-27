import React, { Component } from 'react';
import './App.css';
import ChangeOption from './Component/ChangeOption';
import ViewTittle from './Component/ViewTittle';
import ViewContent from './Component/ViewContent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      first_Sec: 'first',
      number: 0,
      workStatus: "",
      arr: ["06:00 - 11:00", "11:00 - 11:30", "11:30 - 14:30", "06:00 - 14:30"],
      incident: 0
    }
  }

  onChangeWork = (event) => {

    let ar1 = ["06:00 - 11:00", "11:00 - 11:30", "11:30 - 14:30", "06:00 - 14:30"]
    let ar1_2 = ["06:00 - 11:30", "11:30 - 12:00", "12:00 - 14:30", "06:00 - 14:30"]

    let ar2 = ["14:00 - 18:00", "18:00 - 18:30", "18:30 - 22:30", "14:00 - 22:30"]
    let ar2_2 = ["14:00 - 18:30", "18:30 - 19:00", "19:00 - 22:30", "14:00 - 22:30"]

    let ar3 = ["22:00 - 02:00", "02:00 - 02:30", "02:30 - 06:30", "22:00 - 06:30"]
    let ar3_2 = ["22:00 - 02:30", "02:30 - 03:00", "03:00 - 06:30", "22:00 - 06:30"]

    let target = event.target
    let name = target.name
    let value = target.value
    let workStatus = this.state.workStatus
    let first_Sec = this.state.first_Sec
    this.setState({
      [name]: value
    })


    if (first_Sec === "first") {
      first_Sec = "second"
    } else {
      first_Sec = "first"
    }
    if (first_Sec === "first") {
      if (workStatus === "1") {
        this.setState({
          arr: ar1,
          workStatus: "1",
          incident: 0
        })
      }
      if (workStatus === "2") {
        this.setState({
          arr: ar2,
          workStatus: "2",
          incident: 0
        })
      }
      if (workStatus === "3") {
        this.setState({
          arr: ar3,
          workStatus: "3",
          incident: -1
        })
      }
    }
    if (first_Sec === "second") {
      if (workStatus === "1") {
        this.setState({
          arr: ar1_2,
          workStatus: "1",
          incident: 0
        })
      }
      if (workStatus === "2") {
        this.setState({
          arr: ar2_2,
          workStatus: "2",
          incident: 0
        })

      }
      if (workStatus === "3") {
        this.setState({
          arr: ar3_2,
          workStatus: "3",
          incident: -1
        })
      }
    }
  }

  onInput = (event) => {
    let target = event.target
    let value = target.value
    this.setState({
      number: value
    })
  }

  onPushInputName = (event) => {
    let target = event.target
    let value = target.value
    this.setState({
      name: value
    })
  }

  onInputName = (event) => {
    let target = event.target
    let value = target.value
    this.setState({
      name: value
    })
  }


  onShow = (event) => {
    let ar1 = ["06:00 - 11:00", "11:00 - 11:30", "11:30 - 14:30", "06:00 - 14:30"]
    let ar1_2 = ["06:00 - 11:30", "11:30 - 12:00", "12:00 - 14:30", "06:00 - 14:30"]

    let ar2 = ["14:00 - 18:00", "18:00 - 18:30", "18:30 - 22:30", "14:00 - 22:30"]
    let ar2_2 = ["14:00 - 18:30", "18:30 - 19:00", "19:00 - 22:30", "14:00 - 22:30"]

    let ar3 = ["22:00 - 02:00", "02:00 - 02:30", "02:30 - 06:30", "22:00 - 06:30"]
    let ar3_2 = ["22:00 - 02:30", "02:30 - 03:00", "03:00 - 06:30", "22:00 - 06:30"]

    let name = event.target.name
    let first_Sec = this.state.first_Sec


    if (first_Sec === "first") {
      if (name === "1") {
        this.setState({
          arr: ar1,
          workStatus: "1",
          incident: 0
        })
      }
      if (name === "2") {
        this.setState({
          arr: ar2,
          workStatus: "2",
          incident: 0
        })
      }
      if (name === "3") {
        this.setState({
          arr: ar3,
          workStatus: "3",
          incident: -1
        })
      }
    }
    if (first_Sec === "second") {
      if (name === "1") {
        this.setState({
          arr: ar1_2,
          workStatus: "1",
          incident: 0
        })
      }
      if (name === "2") {
        this.setState({
          arr: ar2_2,
          workStatus: "2",
          incident: 0
        })

      }
      if (name === "3") {
        this.setState({
          arr: ar3_2,
          workStatus: "3",
          incident: -1
        })
      }
    }

  }

  render() {

    let date = new Date()
    let year = date.getFullYear()
    let day = date.getDate()
    let month = date.getMonth()
    if (day === 1) {
      month += 0
    } else {
      month += 1
    }
    month = (month < 10) ? `0${month}` : month;

    return (
      <>
        {/* Mục tùy chọn */}
        
        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <ChangeOption 
            onInputNameOption = {this.onInputName}
            onInputOption = {this.onInput}
            onChangeWorkOption = {this.onChangeWork}
            onShowOption = {this.onShow}
          />
        </div>

        <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
          <ViewTittle 
            yearTittle = {year}
            monthTittle = {month}
            dayTittle = {day}
            nameTittle = {this.state.name}
            incidentTittle = {this.state.incident}
          />
          <ViewContent 
            monthContent = {month}
            dayContent = {day}
            incidentContent = {this.state.incident}
            numberContent = {this.state.number}
            arrContent = {this.state.arr}
          />
        </div>
      </>

    )
  }
}

export default App;