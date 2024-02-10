import { ApiKey } from './api-token'
import { ClientParams, SimulationRequest, SimulationResponse } from './types'

const ENDPOINT = 'https://api.virtoshi.com'

export class VirtoshiClient {
  #endpoint
  #apiKey

  constructor({ endpoint, apiKey }: ClientParams) {
    this.#endpoint = endpoint || ENDPOINT
    this.#apiKey = new ApiKey(apiKey)
  }

  simulateTransaction = async (
    req: SimulationRequest,
  ): Promise<SimulationResponse> => {
    const response = await fetch(this.#endpoint + '/v1/simulate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.#apiKey.toString()}`,
      },
      body: JSON.stringify(req),
    })

    if (response.ok) {
      const result = await response.json()
      return result
    } else {
      const _err = await response.json()
      const err = new Error(`${_err.name}: ${_err.msg}`)
      err.name = _err.name
      throw err
    }
  }
}
