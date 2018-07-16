import React, { Componet } from 'react';

class Progresstracker extends Componet {
    render(){
        return (
            <div className="progress-tracker">
                <Label className="progress-tracker__label">Progress Tracker</Label>
                <div className="progress-tracker__percentage">
                    0%
                </div>
            </div>
        )
    }
}

export default ProgressTracker;