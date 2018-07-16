import React, { Componet } from 'react';

class scheduleCourse extends Componet {
    render(){
        return(
            <div className="schedule-course">
                 <label>{this.props.title}</label>
            </div>

        )
    }
}

export default ScheduleCourse;