import { t, type Dictionary } from 'intlayer';

const myComponentContent = {
  key: 'my-component',
  content: {
    title: t({
      en:'my new title',
      fr:'mon nouveau titre',
      es:"mi nuevo titulo"
    }),
    paragraph: t({
      en: 'my paragraph',
      fr:'mon paragraphe',
      es:'mi parrafo'
    })
  },
} satisfies Dictionary;

export default myComponentContent;
