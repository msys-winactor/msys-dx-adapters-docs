import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  boxSidebar: [
    {
      type: 'html',
      value: '<div class="sidebar-product-title"><div class="sidebar-product-title__subtitle">WinActor for</div><div class="sidebar-product-title__main">Box</div></div>',
      defaultStyle: true,
    },
    'intro',
  ],
};

export default sidebars;
