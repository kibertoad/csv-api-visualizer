import fs from 'fs'
import path from 'path'

function getDataText() {
  const now = new Date()

  const date = ('0' + now.getDate()).slice(-2)
  const month = ('0' + (now.getMonth() + 1)).slice(-2)
  const year = now.getFullYear()
  return `${year}-${month}-${date}`
}

export function saveTable(table: string, tableName: string) {
  fs.mkdirSync('tables', { recursive: true })
  const targetFilePath = path.resolve('tables', `${tableName}-${getDataText()}.md`)
  fs.writeFileSync(targetFilePath, `${table}`)
}
