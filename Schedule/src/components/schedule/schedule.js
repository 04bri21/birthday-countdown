import React, {Componet} from 'react';
import Gradient from '../gradient';
import ScheduleCourse from './scheduleCourse';

class Schedule extends Componet {
    render(){
        return(
            <div className="schedule">
                <h1 className="schedule__title">My schedule</h1>
                <ScheduleCourse title={'Problem Solving'}/>
                <ScheduleCourse title={'Problem Solving'}/>
                <ScheduleCourse title={'Problem Solving'}/>
                <Gradient/>
            </div>
        )
    }
}

export default Schedule