import { ApiKey } from '../api-token'

describe('ApiKey', () => {
  it('should succeed to create a valid token', () => {
    expect(
      () =>
        new ApiKey(
          'virtoshi_183df5447ebc1193862bc9394ed85f51e03a3024f6701290e879dc08109379ff',
        ),
    ).not.toThrow()
  })

  it('should fail to create a valid token with wrong type', () => {
    expect(() => new ApiKey(null)).toThrow()
  })

  it('should fail to create a valid token with wrong prefix', () => {
    expect(
      () =>
        new ApiKey(
          'satoshis_183df5447ebc1193862bc9394ed85f51e03a3024f6701290e879dc08109379ff',
        ),
    ).toThrow()
  })

  it('should fail to create a valid token with wrong length', () => {
    expect(
      () => new ApiKey('virtoshi_183df5447ebc1193862bc9394ed85f51e'),
    ).toThrow()
  })
})
