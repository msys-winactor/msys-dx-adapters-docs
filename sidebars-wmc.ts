import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  wmcSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Library List',
      items: [
        'library-list',
      ],
    },
  ],
};

export default sidebars;
