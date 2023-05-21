import { render, screen } from '@testing-library/react'

import Form from '@/components/Login/Form';

describe('tests over Login Form', () => { 
    it('should render two password fields in form', () => {
        render(<Form />)

        expect(screen.getByLabelText(/primer contraseña/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/segunda contraseña/i)).toBeInTheDocument();
    })
 })

export {}