const csvToMarkdown = require('csv-to-markdown-table')

export function generateTable(csvContent: string, delimiter?: string, hasHeader?: boolean) {
  return csvToMarkdown(csvContent, delimiter, hasHeader)
}
