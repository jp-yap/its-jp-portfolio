import React from 'react'
import Menu from './components/menu';
import MinecraftButton from './components/minecraft_button';

const NotFound = () => {
  return (
    <Menu text="Unknown page"><MinecraftButton href="/" className="text-gray-500">
        Return To Home</MinecraftButton></Menu>
  )
}

export default NotFound
