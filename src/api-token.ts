import assert from 'minimalistic-assert'

const API_TOKEN_PREFIX = 'virtoshi_'
const API_TOKEN_LENGTH = 73

export class ApiKey {
  #apiKey

  constructor(apiKey: string) {
    assert(typeof apiKey === 'string', `apiKey must be string`)
    assert(
      apiKey.startsWith(API_TOKEN_PREFIX),
      `apiKey must start with ${API_TOKEN_PREFIX}`,
    )
    assert(
      apiKey.length === API_TOKEN_LENGTH,
      `apiKey must have length of ${API_TOKEN_LENGTH}`,
    )
    this.#apiKey = apiKey
  }

  toString() {
    return this.#apiKey
  }
}
