import React from 'react'
import styles from "./disclaimer.module.css";

const Disclaimer = () => {
  return (
    <div className="bg-black w-full flex flex-col text-center justify-center py-10 px-20">
      <div className={styles.header}>DISCLAIMER</div>
      <div className={styles.subheader}>Minecraft is a trademark of Mojang Studios and Microsoft.<br/> This website is an independent, fan-made portfolio and is not affiliated with, endorsed by, or sponsored by Mojang Studios or Microsoft. <br/>Minecraft-related names, assets, and imagery belong to their respective owners.</div>
    </div>
  )
}

export default Disclaimer
