import React from 'react'
import HeroSection from './components/hero_section';
import ImageSlider from './components/image_slider';
import MinecraftSplash from './components/minecraft_splash';
import NameTag from './components/name_tag';
import { Constants } from '../constants';

const Home = () => {
    return (
        <div className="relative w-full overflow-hidden" id={Constants.HOME}>
            <div
                className="absolute inset-0 scale-105 bg-cover bg-center blur-sm"
                style={{ backgroundImage: "url('/home_bg.webp')" }}
            />

            <div className="relative z-10">
                <div className="flex flex-col md:items-start pt-18 md:pt-35 md:flex-row px-5 lg:px-20">
                    <MinecraftSplash />
                    <HeroSection className="flex flex-col justify-center items-center">
                        <NameTag/>
                        <ImageSlider
                        />
                    </HeroSection>
                </div>
            </div>
        </div>
    )
}

export default Home
