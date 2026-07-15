// This is a simplified example config file for quickstart
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
}

const workerConfig: WorkerConfig = {
  monitors: [
    {
      id: 'GitHub_monitor',
      name: 'My github web Monitor',
      method: 'GET',
      target: 'https://fangxinzhen.github.io',
    },
    {
      id: 'Blog_monitor',
      name: 'My Blog web Monitor',
      method: 'GET',
      target: 'https://blog.xinzhenfang.qzz.io',
    },
    {
      id: 'Fnos_monitor',
      name: 'My Fnos Monitor',
      method: 'GET',
      target: 'https://nas.xinzhenfang.linkpc.net:5667',
    },
    {
      id: 'edgetunnel01_monitor',
      name: 'My edgetunnel01 Monitor',
      method: 'GET',
      target: 'https://edgetunnel.xinzhenfang.qzz.io',
    },
    {
      id: 'edgetunnel02_monitor',
      name: 'My edgetunnel02 Monitor',
      method: 'GET',
      target: 'https://edgetunnel02.xinzhenfang.ccwu.cc',
    },
    {
      id: 'Cloud_Mail_monitor',           // ← 改成下划线，避免空格
      name: 'My Cloud Mail Monitor',
      method: 'GET',
      target: 'https://cloud-mail.xinzhenfang.ccwu.cc',
    },
    {
      id: 'fnos_tcp_monitor',
      name: 'Fnos TCP Monitor',
      method: 'TCP_PING',
      target: '121.15.177.72:5667',
    },
  ],

  // 通知配置（Telegram）
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
  },
}

// 维护计划（暂时不需要可留空）
const maintenances: MaintenanceConfig[] = []

// Don't edit this line
export { maintenances, pageConfig, workerConfig }
