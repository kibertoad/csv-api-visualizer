import { Client } from 'undici'
import { Readable } from 'stream'

export async function fetchCsv(hostUrl: string, pathUrl: string): Promise<string> {
  const client = new Client(hostUrl)

  const response = await client.request({
    path: pathUrl,
    method: 'GET',
  })

  const result = await streamToString(response.body)
  return result
}

function streamToString(stream: Readable): Promise<string> {
  const chunks: any[] = []
  return new Promise((resolve, reject) => {
    stream.on('data', (chunk) => chunks.push(chunk))
    stream.on('error', reject)
    stream.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')))
  })
}
