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
  // 分组显示（推荐，页面更清晰）
  group: {
    '🌐 主要站点': [
      'GitHub_monitor',
      'Blog_monitor',
      'Cloud_Mail_monitor'
    ],
    '🔗 隧道 & NAS': [
      'edgetunnel01_monitor',
      'edgetunnel02_monitor',
      'Fnos_monitor',
      'fnos_tcp_monitor'
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
      interval: 120,           // 2分钟检查一次
      timeout: 15000,
      hideLatencyChart: false,
    },
    {
      id: 'Blog_monitor',
      name: '博客站点',
      method: 'GET',
      target: 'https://blog.xinzhenfang.qzz.io',
      interval: 180,           // 3分钟（博客容易波动）
      timeout: 20000,
      hideLatencyChart: false,
    },
    {
      id: 'Fnos_monitor',
      name: 'Fnos NAS',
      method: 'GET',
      target: 'https://nas.xinzhenfang.linkpc.net:5667',
      interval: 120,
      timeout: 15000,
    },
    {
      id: 'edgetunnel01_monitor',
      name: 'EdgeTunnel 01',
      method: 'GET',
      target: 'https://edgetunnel.xinzhenfang.qzz.io',
      interval: 90,
      timeout: 15000,
    },
    {
      id: 'edgetunnel02_monitor',
      name: 'EdgeTunnel 02',
      method: 'GET',
      target: 'https://edgetunnel02.xinzhenfang.ccwu.cc',
      interval: 90,
      timeout: 15000,
    },
    {
      id: 'Cloud_Mail_monitor',
      name: 'Cloud Mail',
      method: 'GET',
      target: 'https://cloud-mail.xinzhenfang.ccwu.cc',
      interval: 120,
      timeout: 15000,
    },
    {
      id: 'fnos_tcp_monitor',
      name: 'Fnos NAS (TCP)',
      method: 'TCP_PING',
      target: '121.15.177.72:5667',
      interval: 120,
      timeout: 8000,
    },
  ],

  // Telegram 通知配置
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
    gracePeriod: 5,                    // 连续失败5分钟后才通知
    skipErrorChangeNotification: true, // 减少重复通知
  },
}

// 维护计划（暂时留空）
const maintenances: MaintenanceConfig[] = []

export { maintenances, pageConfig, workerConfig }
