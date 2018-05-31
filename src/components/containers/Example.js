import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
 
// import 'react-datepicker/dist/react-datepicker.css';
 
// CSS Modules, react-datepicker-cssmodules.css
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
 
class Example extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(date) {
    this.setState({
      startDate: date
    });
    console.log('handleChange: ' + this.state.startDate)
  }
 
  render() {
    return <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={60}
        dateFormat="LLL"
        timeCaption="time"
        
    />;
  }
}

export default Example