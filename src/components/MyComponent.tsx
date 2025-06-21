'use client';

import { useIntlayer } from "next-intlayer";



// CTRL + SHIFT + P: Intlayer create dictionary file (typescript)

export const MyComponent = ()=>{

    const content = useIntlayer("my-component")

    return <div>
        <h1>{content.title}</h1>
        <p>{content.paragraph}</p>
    </div>
}