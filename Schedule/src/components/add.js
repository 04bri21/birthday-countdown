import React, { Componet }from 'react';
class Add extends Componet {
    render() {
        return (
            <div className={`${this.props.className}add`}>
            +
            </div>
        )
    }
}

export default Add