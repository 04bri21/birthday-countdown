import React, { Componet } from 'react';
import Arrow from '../arrow';

class LibraryCourse extends Componet {
    render(){
        return(
            <div className="library-course">
            <label className="Library-course__title">Problem Solving</label>
            <Arrow className="library-course__arrow">
        <Add className=" library-course__add"/>
        {/*action button componet*/}
        <div className="library-course__description">
            <label>Course Description</label>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris semper placerat lorem, sed feugiat ipsum pretium et.</p>
        </div>
            </div>

        )
    }
}

export default LibraryCourse;