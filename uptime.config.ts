import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  title: "moses's Status Page",
  links: [
    { link: 'https://fangxinzhen.github.io/', label: 'GitHub' },
    { link: 'https://blog.xinzhenfang.qzz.io/', label: 'Blog' },
    { link: 'https://nas.xinzhenfang.linkpc.net:5667/', label: 'Fnos' },
    { link: 'https://edgetunnel.xinzhenfang.qzz.io/', label: 'edgetunnel01' },
    { link: 'https://edgetunnel02.xinzhenfang.ccwu.cc/', label: 'edgetunnel02' },
    { link: 'https://cloud-mail.xinzhenfang.ccwu.cc/', label: 'Cloud Mail' },
    { link: 'mailto:3396947162@qq.com', label: 'Email Me', highlight: true },
  ],
  group: {
    '🌐 主要站点': [
      'GitHub_monitor',
      'Blog_monitor',
      'Cloud_Mail_monitor'
    ],
    '🔗 隧道 & NAS': [
      'edgetunnel01_monitor',
      'edgetunnel02_monitor',
      'Fnos_monitor'
    ],
  },
}

const workerConfig: WorkerConfig = {
  kvWriteCooldownMinutes: 3,

  monitors: [
    {
      id: 'GitHub_monitor',
      name: 'GitHub 主页',
      method: 'GET',
      target: 'https://fangxinzhen.github.io',
      timeout: 15000,
    },
    {
      id: 'Blog_monitor',
      name: '博客站点',
      method: 'GET',
      target: 'https://blog.xinzhenfang.qzz.io',
      timeout: 20000,
    },
    {
      id: 'Fnos_monitor',
      name: 'Fnos NAS',
      method: 'GET',
      target: 'https://nas.xinzhenfang.linkpc.net:5667',
      timeout: 15000,
    },
    {
      id: 'edgetunnel01_monitor',
      name: 'EdgeTunnel 01',
      method: 'GET',
      target: 'https://edgetunnel.xinzhenfang.qzz.io',
      timeout: 15000,
    },
    {
      id: 'edgetunnel02_monitor',
      name: 'EdgeTunnel 02',
      method: 'GET',
      target: 'https://edgetunnel02.xinzhenfang.ccwu.cc',
      timeout: 15000,
    },
    {
      id: 'Cloud_Mail_monitor',
      name: 'Cloud Mail',
      method: 'GET',
      target: 'https://cloud-mail.xinzhenfang.ccwu.cc',
      timeout: 15000,
    },
  ],

  notification: {
    webhook: {
      url: 'https://api.telegram.org/bot8971820327:AAEr69v6sXrlIkfj11gwT93VIn6U79g8wUI/sendMessage',
      payloadType: 'x-www-form-urlencoded',
      payload: {
        chat_id: 8669947409,
        text: '$MSG',
      },
      timeout: 10000,
    },
    timeZone: 'Asia/Shanghai',
    gracePeriod: 5,
    skipErrorChangeNotification: true,
  },
}

const maintenances: MaintenanceConfig[] = []

export { maintenances, pageConfig, workerConfig }
