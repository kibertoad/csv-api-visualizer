import { fetchCsv } from './fetcher'
import { generateTable } from './tableTransformer'
import { saveTable } from './tableSaver'

export async function run() {
  const csv = await fetchCsv('https://nodejs.org', '/metrics/summaries/version.csv')
  const table = generateTable(csv, ',', true)
  saveTable(table, 'NodeJs_Version_Download')
}
