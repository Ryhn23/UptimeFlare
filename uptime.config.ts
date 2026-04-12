import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  // 状态页的标题
  title: "Teleseon Status Page",
  // 状态页头部的链接
  links: [
    { link: 'https://teleseon.com/', label: 'mainpage', highlight: true },
    { link: 'https://blog.teleseon.com/', label: 'blog' },
    { link: 'https://cloud-mail.teleseon.com/login', label: 'mail' },
  ],
  // 对监控项进行分组显示
  group: {
    '🌐 Teleseon 主站': ['mainpage', ],
    '📚 文章': ['blog','mail', ],
 //   '📚 资源存储': ['blog','ignorant_filecodebox', ],
  },
  maintenances: {
    upcomingColor: 'gray',
  },
}

const workerConfig: WorkerConfig = {
  kvWriteCooldownMinutes: 3,
  // 在这里定义您所有的监控项
  monitors: [
    // 1. 博客监控项
    {
      id: 'mainpage',
      name: 'Teleseon 主站',
      method: 'GET',
      target: 'https://teleseon.com/',
      tooltip: '主站',
      statusPageLink: 'https://teleseon.com/',
      hideLatencyChart: false,
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },
    // 2. FileCodeBox 监控项
    {
      id: 'blog',
      name: 'BLOG文章',
      method: 'GET',
      target: 'https://blog.teleseon.com/',
      tooltip: '文章',
      statusPageLink: 'https://blog.teleseon.com/',
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },
    // 3. OpenList 监控项
    {
      id: 'mail',
      name: 'Mail邮件',
      method: 'GET',
      target: 'https://cloud-mail.teleseon.com/login',
      tooltip: '邮件系统',
      statusPageLink: 'https://cloud-mail.teleseon.com/login',
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    }
  ],
  
  callbacks: {
    onStatusChange: async (
      env: any,
      monitor: any,
      isUp: boolean,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {},
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {},
  },
}

// 留空即可，不需要维护横幅
const maintenances: MaintenanceConfig[] = []

export { maintenances, pageConfig, workerConfig }
