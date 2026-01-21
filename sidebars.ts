import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'はじめに',
      items: ['intro', 'installation'],
    },
    {
      type: 'category',
      label: '製品一覧',
      items: [
        {
          type: 'category',
          label: 'WinActor for WinActor Manager on Cloud',
          items: [
            'winactor-wmc/index',
            'winactor-wmc/setup',
            'winactor-wmc/usage',
            'winactor-wmc/library-list',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'サンプル',
      items: ['mdx-demo'],
    },
  ],
};

export default sidebars;
