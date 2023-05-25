'use client'

import BarLink from './BarLink'

const Box = () => {
    return (
        <ul className="grid w-full gap-6 lg:grid-cols-2 max-h-[80%] overflow-y-scroll">
            <BarLink />
            <BarLink />
            <BarLink />
            <BarLink />
            <BarLink />
        </ul>
    )
}

export default Box