import { Divider } from '@mantine/core'
import { pageConfig } from '@/uptime.config'

export default function Footer() {
  const defaultFooter =
    '<p style="text-align: center; font-size: 12px; margin-top: 10px;">' +
    'Open-source monitoring and status page powered by ' +
    '<a href="https://github.com/lyc8503/UptimeFlare" target="_blank" style="color: inherit;">Uptimeflare</a>, ' +
    'used with ❤ by ' +
    '<a href="https://github.com/fangxinzhen" target="_blank" style="color: inherit;">moses</a>.' +
    '</p>'

  return (
    <>
      <Divider mt="lg" />
      <div dangerouslySetInnerHTML={{ __html: pageConfig.customFooter ?? defaultFooter }} />
    </>
  )
}
