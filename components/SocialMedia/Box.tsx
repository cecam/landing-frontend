'use client'

import ButtonWrapper from '../Modal/Button'
import BarLink from './BarLink'

const Box = () => {
    return (
        <ul className="grid w-full gap-6 p-5 lg:grid-cols-2 max-h-[480px] overflow-y-scroll">
            <ButtonWrapper>
                <BarLink />
            </ButtonWrapper>
            <BarLink />
            <BarLink />
            <BarLink />
            <BarLink />
        </ul>
    )
}

export default Box