import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  wmcSidebar: [
    {
      type: 'html',
      value: '<div class="sidebar-product-title"><div class="sidebar-product-title__subtitle">WinActor for</div><div class="sidebar-product-title__main">Manager on Cloud</div></div>',
      defaultStyle: true,
    },
    'intro',
    {
      type: 'category',
      label: 'ライブラリ一覧',
      items: [
        'library-list',
        {
          type: 'category',
          label: '認証関連',
          items: [
            'libraries/access-token',
          ],
        },
        {
          type: 'category',
          label: 'WinActor関連',
          items: [
            'libraries/winactor-update',
            'libraries/winactor-restart',
            'libraries/winactor-delete',
            'libraries/winactor-info-export',
            'libraries/winactor-usage-export',
          ],
        },
        {
          type: 'category',
          label: 'ライセンス関連',
          items: [
            'libraries/fl-usage-export',
            'libraries/license-info-get',
            'libraries/license-usage-get',
          ],
        },
        {
          type: 'category',
          label: 'ファイル関連',
          items: [
            'libraries/file-upload',
            'libraries/file-download',
            'libraries/file-delete',
            'libraries/file-info-export',
            'libraries/file-info-update',
          ],
        },
        {
          type: 'category',
          label: 'シナリオ関連',
          items: [
            'libraries/scenario-update',
            'libraries/scenario-delete',
            'libraries/scenario-info-export',
            'libraries/scenario-register',
          ],
        },
        {
          type: 'category',
          label: 'スケジュール関連',
          items: [
            'libraries/schedule-update-month-end',
            'libraries/schedule-update-condition',
            'libraries/schedule-update-immediate',
            'libraries/schedule-update-datetime',
            'libraries/schedule-update-monthly',
            'libraries/schedule-update-weekly',
            'libraries/schedule-update-daily',
            'libraries/schedule-delete',
            'libraries/schedule-info-export',
            'libraries/schedule-register-month-end',
            'libraries/schedule-register-condition',
            'libraries/schedule-register-immediate',
            'libraries/schedule-register-datetime',
            'libraries/schedule-register-monthly',
            'libraries/schedule-register-weekly',
            'libraries/schedule-register-daily',
            'libraries/schedule-disable',
            'libraries/schedule-enable',
          ],
        },
        {
          type: 'category',
          label: 'タスク関連',
          items: [
            'libraries/archive-file-history-get',
            'libraries/task-delete',
            'libraries/task-info-export',
          ],
        },
        {
          type: 'category',
          label: 'イベント関連',
          items: [
            'libraries/event-log-count-get',
            'libraries/event-log-get',
            'libraries/event-info-export',
          ],
        },
        {
          type: 'category',
          label: 'ユーザ関連',
          items: [
            'libraries/user-update',
            'libraries/user-delete',
            'libraries/user-info-import',
            'libraries/user-info-export',
            'libraries/user-register',
            'libraries/pending-schedule-export',
          ],
        },
        {
          type: 'category',
          label: '所属関連',
          items: [
            'libraries/department-update',
            'libraries/department-delete',
            'libraries/department-info-import',
            'libraries/department-info-export',
            'libraries/department-register',
          ],
        },
      ],
    },
  ],
};

export default sidebars;
