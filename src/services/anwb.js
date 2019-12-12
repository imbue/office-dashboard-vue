import axios from 'axios'

class Anwb {
  async trafficJam () {
    const response = await axios.get(
      `https://www.anwb.nl/feeds/gethf`
    )

    return response.data
  }
}

export default new Anwb()
