let chain = [
      {
        path: '/main/resources_manage',
        name: 'resources_manage',
        meta: {
          title: '资源管理',
          icon: 'el-icon-c-scale-to-original',
          hideInMenu: false
        },
        component: () => import("@/einv/baas_platform/resources_manage.vue"),
      },{
      path: '/main/organize_manage',
        name: 'rh_button',
        meta: {
          title: '组织管理',
          icon: 'el-icon-c-scale-to-original',
          hideInMenu: false
        },
        component: () => import("@/einv/baas_platform/organize_manage.vue"),
      },{
        path: '/main/networking_manage',
        name: 'rh_button',
        meta: {
          title: '网络管理',
          icon: 'el-icon-c-scale-to-original',
          hideInMenu: false
        },
        component: () => import("@/einv/baas_platform/networking_manage.vue"),
      },
      {
        path: '/main/vessel_manage',
        name: 'rh_button',
        meta: {
          title: '容器管理',
          icon: 'el-icon-c-scale-to-original',
          hideInMenu: false
        },
        component: () => import("@/einv/baas_platform/vessel_manage.vue"),
      },
      {
        path: '/main/pannel_manage',
        name: 'rh_button',
        meta: {
          title: '通道管理',
          icon: 'el-icon-c-scale-to-original',
          hideInMenu: false
        },
        component: () => import("@/einv/baas_platform/pannel_manage.vue"),
      },
      {
        path: '/main/chain_setup',
        name: 'chain_manage',
        meta: {
          title: '链蚂管理-链蚂安装',
          icon: 'el-icon-c-scale-to-original',
          hideInMenu: false
        },
        component: () => import("@/einv/baas_platform/chain_setup.vue"),
      },
      {
        path: '/main/chain_upload',
        name: 'chain_manage',
        meta: {
          title: '链蚂管理-链蚂上传',
          icon: 'el-icon-c-scale-to-original',
          hideInMenu: false
        },
        component: () => import("@/einv/baas_platform/chain_upload.vue"),
      },
      {
        path: '/main/chain_upload',
        name: 'chain_manage',
        meta: {
          title: '链蚂管理-链蚂上传',
          icon: 'el-icon-c-scale-to-original',
          hideInMenu: false
        },
        component: () => import("@/einv/baas_platform/chain_upload.vue"),
      },
      {
        path: '/main/makenet_circle',
        name: 'chain_manage',
        meta: {
          title: '组网服务',
          icon: 'el-icon-c-scale-to-original',
          hideInMenu: false
        },
        component: () => import("@/einv/baas_platform/makenet_circle.vue"),
      },
      {
        path: '/main/member_search',
        name: 'chain_search',
        meta: {
          title: '成员查询',
          icon: 'el-icon-c-scale-to-original',
          hideInMenu: false
        },
        component: () => import("@/einv/baas_platform/member_search.vue"),
      },
    ]
export default chain