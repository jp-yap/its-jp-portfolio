import React from 'react'
import Image from 'next/image'
import { Constants } from '@/app/constants';
import MinecraftButton from '@/app/components/minecraft_button';

const ContactInformationButton = ({ icon, url }: { icon: string, url: string }) => {
    return (
        <MinecraftButton href={url} className="w-16 h-16 p-0">
            <Image
                src={`${Constants.CONTACTS_PATH}${icon}`}
                alt={icon}
                height={32}
                width={32}
            />
        </MinecraftButton>
    )
}

export default ContactInformationButton
