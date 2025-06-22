'use client';
import Image from "next/image";
import { useIntlayer } from "next-intlayer";
// import { useIntlayer } from "next-intlayer/server"; for server components

import styles from './MyComponent.module.css'


// CTRL + SHIFT + P: Intlayer create dictionary file (typescript)

export const MyComponent = ()=>{

    const content = useIntlayer("my-component")

    return (<div className={styles.tattoo}>
          <Image src={"/clean-arm.jpg"} alt="logo" width="600" height="430"/>
          <p className={styles['tattoo-word']}>
            {content.title}
          </p>
        </div>);
}