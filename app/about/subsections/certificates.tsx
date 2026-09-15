import React from 'react'
import CertificateCard, { Certificate } from '../components/certificate_card'
import styles from "../about.module.css";
import Subsection from '@/app/components/subsection';
import { Constants } from '@/app/constants';
import about from '@/data/about.json';


const certificate_list: Certificate[] = about.certificates;

const Certificates = () => {
    return (
        <Subsection header="Certificates" id={Constants.CERTIFICATES}>
            <div className="relative w-full overflow-hidden py-5">
                <div className="w-full overflow-hidden">
                    <div className={`${styles.marquee} flex w-max`}>

                        <div className="flex shrink-0 gap-50 pr-50">
                            {certificate_list.map((certificate) => (
                                <CertificateCard
                                    key={certificate.name}
                                    logo={certificate.logo}
                                    name={certificate.name}
                                    description={certificate.description}
                                    date={certificate.date}
                                    certificates={certificate.certificate}
                                />
                            ))}
                        </div>

                        <div
                            className="flex shrink-0 gap-50 pr-50"
                            aria-hidden="true"
                        >
                            {certificate_list.map((certificate) => (
                                <CertificateCard
                                    key={`duplicate-${certificate.name}`}
                                    logo={certificate.logo}
                                    name={certificate.name}
                                    description={certificate.description}
                                    date={certificate.date}
                                    certificates={certificate.certificate}
                                />
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </Subsection>
    )
}

export default Certificates
