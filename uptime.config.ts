import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  title: "Nextray Cluster Status Page",
  links: [
    { link: 'https://github.com/Ryhn23', label: 'GitHub' },
    { link: 'mailto:ray@nextray.org', label: 'Contact', highlight: true },
  ],
  group: {
    ' Web Services': ['solarisnet_ui'],
    ' Automation & AI': ['n8n_instance'],
  },
  maintenances: {
    upcomingColor: 'gray',
  },
}

const workerConfig: WorkerConfig = {
  kvWriteCooldownMinutes: 3,
  monitors: [
    {
      id: 'solarisnet_ui',
      name: 'SolarisNet',
      method: 'GET',
      target: 'https://net.shorekeeper.me/', 
      tooltip: 'Frontend Dashboard',
      statusPageLink: 'https://net.shorekeeper.me/',
      hideLatencyChart: false,
      expectedCodes: [200],
      timeout: 10000,
      headers: { 'User-Agent': 'Uptimeflare' },
    },
    {
      id: 'n8n_instance',
      name: 'n8n Automation Engine',
      method: 'GET',
      target: 'https://n8n.nextray.online/healthz',
      tooltip: 'Workflow Orchestrator',
      statusPageLink: 'https://n8n.nextray.online/',
      timeout: 10000,
      headers: { 'User-Agent': 'Uptimeflare' },
    }
  ],

  callbacks: {
    onStatusChange: async (
      env: any, monitor: any, isUp: boolean, timeIncidentStart: number, timeNow: number, reason: string
    ) => {
    },
    onIncident: async (
      env: any, monitor: any, timeIncidentStart: number, timeNow: number, reason: string
    ) => {
    },
  },
}

const maintenances: MaintenanceConfig[] = []

export { maintenances, pageConfig, workerConfig }
