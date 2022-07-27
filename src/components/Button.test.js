import React from 'react'
import { render, screen } from '@testing-library/react'
import ButtonDistraction from './ButtonDistraction';


test('should render a button with the function ButtonDistraction', () => {
    render(<ButtonDistraction />)
    const Buttontest = screen.getByRole('button',{name:/Distraction?/i})
  })

 


 