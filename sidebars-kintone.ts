import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  kintoneSidebar: [
    {
      type: 'html',
      value: '<div class="sidebar-product-title"><div class="sidebar-product-title__subtitle">WinActor for</div><div class="sidebar-product-title__main">kintone</div></div>',
      defaultStyle: true,
    },
    'intro',
  ],
};

export default sidebars;
