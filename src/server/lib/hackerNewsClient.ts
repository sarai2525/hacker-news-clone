import ky from 'ky'

const BASE_URL = 'https://hacker-news.firebaseio.com/v0'

class HackerNewsClient {
  private client: typeof ky

  constructor() {
    this.client = ky.create({
      prefixUrl: BASE_URL,
    })
  }

  public async getBestHackerNews() {
    const ids = await this.client.get('topstories.json').json<number[]>()

    const top10Ids = ids.slice(0, 10)

    const storyPromises = top10Ids.map((id) => this.client.get(`item/${id}.json`).json())

    const top10Stories = await Promise.all(storyPromises)

    return top10Stories
  }
}

export default new HackerNewsClient()
