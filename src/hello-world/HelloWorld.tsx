import '../style/entry'

import * as React from 'react'

const HelloWorld: React.FunctionComponent<{ greeting: string }> = ({ greeting }) => (
    <div className="main">
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <h1 className="red">Hello World !</h1>
            <p>A base app built with typescript, react, express and webpack</p>
            <h5 className="purple" dangerouslySetInnerHTML={{ __html: greeting }} />
        </div>
    </div>
)

export default HelloWorld
