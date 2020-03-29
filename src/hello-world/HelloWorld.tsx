import * as React from 'react'

export const HelloWorld: React.FunctionComponent<{ greeting: string }> = ({
    greeting,
}) => (
    <>
        <h1>Hello World !</h1>
        <p>A base app built with typescript, react, express and webpack</p>
        <h5 dangerouslySetInnerHTML={{ __html: greeting }} />
    </>
)
