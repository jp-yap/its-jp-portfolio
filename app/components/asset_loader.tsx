"use client";

import { ReactNode, useEffect, useState } from "react";
import LoadingScreen from "./loading_screen";
import { Constants } from "../constants";

const assets = [
    "/home_bg.webp",
    "/about_bg.webp",
    "/projects_bg.webp",
    "/contact.webp",
    "/gold.webp",
    "/diamond.webp",
    "/iron.webp",
    "/stone.webp",
    "/diamond_ingot.webp",
    "/gold_ingot.webp",
    "/iron_ingot.webp",
    `${Constants.ANIMATIONS_PATH}breaking.webp`,
    `${Constants.ANIMATIONS_PATH}broken.webm`,
    `${Constants.ROY_PATH}before.webp`,
    `${Constants.ROY_PATH}after.webp`
];

const AssetLoader = ({ children }: { children: ReactNode }) => {
    const [loaded, setLoaded] = useState(false);
    const [visible, setVisible] = useState(true);

    useEffect(() => {

        document.body.style.overflow = "hidden";

        const loadImages = async () => {
            await Promise.all(
                assets.map(
                    (src) =>
                        new Promise<void>((resolve) => {
                            const image = new Image();

                            image.onload = () => resolve();
                            image.onerror = () => resolve();

                            image.src = src;
                        })
                )
            );

            setLoaded(true);

            setTimeout(() => {
                setVisible(false);

                document.body.style.overflow = "";
            }, 500);
        };

        loadImages();

        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    return (
        <>
            {children}

            {visible && (
                <div
                    className={`fixed inset-0 z-9999 transition-opacity duration-500 ${loaded
                        ? "pointer-events-none opacity-0"
                        : "opacity-100"
                        }`}
                >
                    <LoadingScreen />
                </div>
            )}
        </>
    );
}

export default AssetLoader
