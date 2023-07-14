'use client'

import ButtonWrapper from '../Modal/Button'
import BarLink from './BarLink'

const Box = () => {
    return (
        <ul className="grid w-full gap-6 p-5 lg:grid-cols-2 max-h-[480px] md:overflow-y-scroll">
            <ButtonWrapper>
                <BarLink
                    link='https://www.youtube.com/cecam3'
                    image='youtube-icon.svg'
                    title='YouTube'
                    description='Viajes, ocurrencias y desarrollos'
                />
            </ButtonWrapper>
            <ButtonWrapper>
                <BarLink
                    link='https://www.instagram.com/cecam3_/'
                    image='insta-icon.svg'
                    title='Instagram'
                    description='Un poco más de mi'
                />
            </ButtonWrapper>
            <ButtonWrapper>
                <BarLink
                    link='https://www.twitch.tv/cecam3'
                    image='twitch-icon.svg'
                    title='Twitch'
                    description='Directos de progra y chismecito seguro'
                />
            </ButtonWrapper>
        </ul>
    )
}

export default Box