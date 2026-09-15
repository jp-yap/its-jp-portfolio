'use client';
import React, { useState } from 'react'
import Image from 'next/image';
import styles from "../about.module.css";
import ImagePopup from '@/app/components/image_popup';
import { Constants } from '@/app/constants';

export type Certificate = {
  logo: string;
  name: string;
  description: string;
  date: string;
  certificate: string[];
}

const CertificateCard = ({ logo, name, description, date, certificates}: { logo: string, name: string, description: string, date: string, certificates : string[]}) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  return (
    <button onClick={() => {setIsPopupOpen(true)}} className={`${styles.certificateCard} ${isPopupOpen && styles.active} w-full p-2 grid grid-rows-3 grid-cols-[auto_1fr] text-start`}>
      <div className="row-span-3 flex items-center justify-center pr-5">
        <Image
          src={`${Constants.CERTIFICATES_PATH}${logo}`}
          alt={name}
          width={64}
          height={64}
        />
      </div>
      <div className={styles.certificateTitle}>{name}</div>
      <div className={styles.certificateDesc}>{description}</div>
      <div className={styles.certificateDate}>{date}</div>
      {
        <ImagePopup
          isOpen={isPopupOpen}
          onClose={() => setIsPopupOpen(false)}
          path={Constants.CERTIFICATES_PATH}
          src={certificates}
          alt={name}
        />
      }
    </button>
  )
}

export default CertificateCard
