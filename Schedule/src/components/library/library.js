import React, {Componet} from 'react';

import LibraryCourse from './LibraryCourse';
class Library extends Componet {
    render(){
        return(
            <div className="library">
                <h1 className="library__title">Course Library</h1>
                <LibraryCourse/>
                <LibraryCourse/>
                <LibraryCourse/>
            </div>
        )
    }
}

export default Library