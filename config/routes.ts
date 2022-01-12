export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/config',
    name: '配置管理',
    icon: 'setting',
    routes: [
      {
        //数据源管理
        name: '数据源管理',
        path: '/config/datasource',
        component: './config/datasource',
      },
      {
        //维度管理
        name: '维度管理',
        path: '/config/dimension',
        component: './config/dimension',
      },
      {
        //指标管理
        name: '指标管理',
        path: '/config/index',
        component: './config/index',
      },
      {
        //图表管理
        name: '图表管理',
        path: '/config/widget',
        component: './config/widget',
      },
      {
        name: '图表设计',
        path: '/config/visualizer',
        hideInMenu: true,
        component: './config/visualizer',
      },
      {
        //模板管理
        name: '模板管理',
        path: '/config/template',
        component: './config/template',
      },
      {
        //主题管理
        name: '主题管理',
        path: '/config/subject',
        component: './config/subject',
      },
    ],
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
      {
        component: './404',
      },
    ],
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
