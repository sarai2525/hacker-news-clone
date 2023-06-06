import HackerNewsClient from '../lib/hackerNewsClient'

export async function hackerNewsService(): Promise<any> {
  const data = await HackerNewsClient.getBestHackerNews()
  return data
}
