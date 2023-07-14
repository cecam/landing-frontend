import { render, screen } from '@testing-library/react'

import RegisterForm from '@/components/Login/RegisterForm';

describe('tests over Login Form', () => { 
    it('should render two password fields in form', () => {
        render(<RegisterForm />)

        expect(screen.getByLabelText(/primer contraseña/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/segunda contraseña/i)).toBeInTheDocument();
    })
 })

export {}