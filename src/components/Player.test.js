import React from 'react'
import { getByRole, getByTestId, render, screen } from '@testing-library/react'
import PlayerDance from './PlayerDance.js';


test('should check if the PlayerDance has no empty urls', () => {
    render(<PlayerDance/>)
const urlTest = getByRole('Playertest') 
expect (urlTest).toHaveValue('https://youtu%')
    })


// instructions from  https://www.npmjs.com/package/@testing-library/jest-dom#tobeempty