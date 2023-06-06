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
    // Obtenez d'abord la liste des ID des meilleures histoires
    const ids = await this.client.get('topstories.json').json<number[]>()

    // Prenez les 10 premiers ID
    const top10Ids = ids.slice(0, 10)

    // Créez une promesse pour chaque détail d'histoire que vous allez récupérer
    const storyPromises = top10Ids.map((id) => this.client.get(`item/${id}.json`).json())

    // Exécutez toutes les promesses en parallèle et attendez qu'elles soient toutes résolues
    const top10Stories = await Promise.all(storyPromises)

    return top10Stories
  }
}

export default new HackerNewsClient()
