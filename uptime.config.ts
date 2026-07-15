// This is a simplified example config file for quickstart
// Some not frequently used features are omitted/commented out here
// For a full-featured example, please refer to `uptime.config.full.ts`

// Don't edit this line
import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  // Title for your status page
  title: "moses's Status Page",
  // Links shown at the header of your status page, could set `highlight` to `true`
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
  // Define all your monitors here
  monitors: [
    // Example HTTP Monitor
    {
      // `id` should be unique, history will be kept if the `id` remains constant
      id: 'GitHub_monitor',
      // `name` is used at status page and callback message
      name: 'My github web Monitor',
      // `method` should be a valid HTTP Method
      method: 'GET',
      // `target` is a valid URL
      target: 'https://fangxinzhen.github.io',
      // [OPTIONAL] `tooltip` is ONLY used at status page to show a tooltip
      //tooltip: 'This is a tooltip for this monitor',
      // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
      //statusPageLink: 'https://fangxinzhen.github.io',
      // [OPTIONAL] `expectedCodes` is an array of acceptable HTTP response codes, if not specified, default to 2xx
      //expectedCodes: [200],
      // [OPTIONAL] `timeout` in millisecond, if not specified, default to 10000
      //timeout: 10000,
      // [OPTIONAL] headers to be sent
      //headers: {
      //  'User-Agent': 'Uptimeflare',
      //  Authorization: 'Bearer YOUR_TOKEN_HERE',
      },
    {
      // `id` should be unique, history will be kept if the `id` remains constant
      id: 'Blog_monitor',
      // `name` is used at status page and callback message
      name: 'My Blog web Monitor',
      // `method` should be a valid HTTP Method
      method: 'GET',
      // `target` is a valid URL
      target: 'https://blog.xinzhenfang.qzz.io',
      },
    {
      // `id` should be unique, history will be kept if the `id` remains constant
      id: 'Fnos_monitor',
      // `name` is used at status page and callback message
      name: 'My Fnos Monitor',
      // `method` should be a valid HTTP Method
      method: 'GET',
      // `target` is a valid URL
      target: 'https://nas.xinzhenfang.linkpc.net:5667',
      },
    {
      // `id` should be unique, history will be kept if the `id` remains constant
      id: 'edgetunnel01_monitor',
      // `name` is used at status page and callback message
      name: 'My edgetunnel01 Monitor',
      // `method` should be a valid HTTP Method
      method: 'GET',
      // `target` is a valid URL
      target: 'https://edgetunnel.xinzhenfang.qzz.io',
      },
    {
      // `id` should be unique, history will be kept if the `id` remains constant
      id: 'edgetunnel02_monitor',
      // `name` is used at status page and callback message
      name: 'My edgetunnel02 Monitor',
      // `method` should be a valid HTTP Method
      method: 'GET',
      // `target` is a valid URL
      target: 'https://edgetunnel02.xinzhenfang.ccwu.cc',
      },
    {
      // `id` should be unique, history will be kept if the `id` remains constant
      id: 'Cloud Mail_monitor',
      // `name` is used at status page and callback message
      name: 'My Cloud Mail Monitor',
      // `method` should be a valid HTTP Method
      method: 'GET',
      // `target` is a valid URL
      target: 'https://cloud-mail.xinzhenfang.ccwu.cc',
      },
      // [OPTIONAL] body to be sent (require POST/PUT/PATCH method)
      // body: 'Hello, world!',
      // [OPTIONAL] if specified, the response must contains the keyword to be considered as operational.
      // responseKeyword: 'success',
      // [OPTIONAL] if specified, the response must NOT contains the keyword to be considered as operational.
      // responseForbiddenKeyword: 'bad gateway',
      // [OPTIONAL] if specified, will call the check proxy to check the monitor, mainly for geo-specific checks
      // refer to docs https://github.com/lyc8503/UptimeFlare/wiki/Check-proxy-setup before setting this value
      // currently supports `worker://`, `globalping://` and `http(s)://` proxies
      // checkProxy: 'worker://weur',
      // [OPTIONAL] if true, the check will fallback to local if the specified proxy is down
      // checkProxyFallback: true,
    },
    // Example TCP Monitor
    {
      id: 'fnos_tcp_monitor',
      name: 'fno TCP Monitor',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'TCP_PING',
      // `target` should be `host:port` for tcp monitors
      target: '121.15.177.72:5667',
      //tooltip: 'My production server SSH',
      //statusPageLink: 'https://example.com',
      //timeout: 5000,
    },
  ],
  

const maintenances: MaintenanceConfig[] = [
  {
    // [Optional] Monitor IDs to be affected by this maintenance
    //monitors: ['foo_monitor', 'bar_monitor'],
    // [Optional] default to "Scheduled Maintenance" if not specified
    //title: 'Test Maintenance',
    // Description of the maintenance, will be shown at status page
   // body: 'This is a test maintenance, server software upgrade',
    // Start time of the maintenance, in UNIX timestamp or ISO 8601 format
    //start: '2020-01-01T00:00:00+08:00',
    // [Optional] end time of the maintenance, in UNIX timestamp or ISO 8601 format
    // if not specified, the maintenance will be considered as on-going
    //end: '2050-01-01T00:00:00+08:00',
    // [Optional] color of the maintenance alert at status page, default to "yellow"
    //color: 'blue',
  },
]

// Don't edit this line
export { maintenances, pageConfig, workerConfig }
