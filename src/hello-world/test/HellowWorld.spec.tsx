import { render } from '@testing-library/react'
import * as React from 'react'

import HelloWorld from '../HelloWorld'

describe('tests', () => {
    describe('jest', () => {
        it('should run the tests', () => {
            console.log('jest test suite is running')
        })
    })
    describe('react-testing-library', () => {
        it('should get the greeting dom element and find its className', async () => {
            const { findByText } = render(
                <HelloWorld greeting="this is a greeting" />,
            )
            const greeting = await findByText('this is a greeting')
            expect(greeting.className).toBe('purple')
        })
    })
})
