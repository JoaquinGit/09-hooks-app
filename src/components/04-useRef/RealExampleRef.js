import React, { useState } from 'react';
import { MultipleCustomHooksRealExample } from './MultipleCustomHooksRealExample';

import '../styles.css';

export const RealExampleRef = () => {

    const [show, setShow] = useState(false);

    return (
        <div>
            <h1 className="text-center">RealExampleRef</h1>
            <hr />

            { show && <MultipleCustomHooksRealExample /> }

            <button
                className="btn btn-primary mt-5"
                onClick={ () => {
                    setShow( !show );
                }}
            >
                Show/Hide
            </button>

        </div>
    )
}
