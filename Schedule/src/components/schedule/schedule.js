import React, {Componet} from 'react';
import Gradient from '../gradient';

class Schedule extends Componet {
    render(){
        return(
            <div className="schedule">
                <h1 className="schedule__title">My schedule</h1>
                <Gradient/>
            </div>
        )
    }
}

export default Schedule