import { t, type Dictionary } from 'intlayer';

const myComponentContent = {
  key: 'my-component',
  content: {
    title: t({
      en:'salmon',
      'zh-Hant':'鮭魚'
    }),
  },
} satisfies Dictionary;

export default myComponentContent;
