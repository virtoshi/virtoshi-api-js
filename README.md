# @virtoshi/api
A TypeScript package for simulating Partially Signed Bitcoin Transactions (PSBT) and view the state changes that would occur on-chain. This package supports Bitcoin, Ordinals and BRC-20 transfers.

## Installation
```bash
npm install @virtoshi/api
```

## Usage
```typescript
const { VirtoshiClient } = require('@virtoshi/api');

const client = new VirtoshiClient({
  apiKey: 'your-api-token',
});

const simulationRequest = {
      psbt: 'cHNidP8BAJ4CAAAAAu2BaIBuhpYKY8ax31ZAVZze1iismPwTPStICuMyUJtGAAAAAAD/////IGFcnPZXzaCe4qr069+JnaAVUGID33eQ4aTpIM0eipEAAAAAAP////8C09/1BQAAAAAZdqkU0MWZA8W6woaHYOkP1SGkZlqnZSCIrADh9QUAAAAAF6kUNUXm4zuDLEcFDyTT7rk8nAOUi8eHsy4TAAABAP1zAQEAAAAAAQIWVufpLOUIurGPHgB4a9DffjOONLakDOqxdhe9eVgqKwAAAABqRzBEAiAKWOL5TVIiDAJnNoZAkSxXKiyelDWS4XfK+oewWuhzsgIgY/3O56Tvx94G1pgyu3fvSlUF+GTLUYV4+ViKBiHa7+YBIQKBEgfesvGQntqodhg/eXgul85JpOiZlEtE5WrmGkWatf3///9GyQ8t/FBuZJtE3o7pLRqpV7Mdyd2Eu9TVlSpnpYU9LQEAAAAA/f///wIiAgAAAAAAABYAFL8ZFtwz291l9g2LH2XrNegSCDX8we0AAAAAAAAWABTKhnyqk4kmcURM/mMXCfgO6vLpOQACSDBFAiEA33EggHpC0Y0xm4/16ZqEJYccH/mxnlxoYrNpVlRJZMICIBXSCLOcz2TILiWJdmGQt+pK/jogMc09apJfIdZiV/mdASECGiYrH+vxWfq1/xTy1Z4w4Z70bYpxCPBc95ToxYGiBr8AAAAAAAEA/cIFAgAAAAABAQfx91TW9jYtflkUznxebmTLIXJ4IjllVqkPJuNnh1w7AAAAAAD9////AhAnAAAAAAAAIlEgLhbUuM/an39AKXnPkfB05uPP50tKfcAJNyPMDzOgdfXqBwAAAAAAACJRIHlL+Z6VS6Kkg8SXhLSOqpqOIyGW6WDqb0ekGYHDMU5IA0CafzUJKa9RKP6CbYIFZmbrgc0pvthuOqFIW5hXU6H5B3WlWOQ7rk5EgJOD9NyNAVZ85nWFmNVQzjcrvNgb415P/dAEIDOf60xmhrkvoLzyCaGst9OMQDAOpvY0ML0RavaqDipurABjA29yZAEBF3RleHQvaHRtbDtjaGFyc2V0PXV0Zi04AE0IAgo8aHRtbCBsYW5nPSJlbiI+PGhlYWQ+PG1ldGEgaHR0cC1lcXVpdj0iQ29udGVudC1UeXBlIiBjb250ZW50PSJ0ZXh0L2h0bWw7IGNoYXJzZXQ9VVRGLTgiPgogICAgPG1ldGEgbmFtZT0idmlld3BvcnQiY29udGVudD0id2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCI+CiAgICA8c3R5bGU+CiAgICBib2R5IHsgZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGhlaWdodDogMTAwdmg7IG1hcmdpbjogMDsgfQogICAgI2RvZ3MgeyBwb3NpdGlvbjogcmVsYXRpdmU7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7IGJhY2tncm91bmQtY29sb3I6ICM4YzhiZmY7IH0KICAgICNkb2dzIGltZyB7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTsgb2JqZWN0LWZpdDogY29udGFpbjsgdG9wOiAwOyBsZWZ0OiAwOyBpbWFnZS1yZW5kZXJpbmc6IHBpeGVsYXRlZCB9CiAgICA8L3N0eWxlPgo8L2hlYWQ+Cjxib2RNCAJ5PgogICAgPGRpdiBpZD0iZG9ncyI+PGltZyBzcmM9Ii9jb250ZW50LzBkMjQ3YWJmZTc1ZWRkNGQ1ZTY5MWFhY2I5ZjA2Mzc4NWY2OWU1NGM5YjRkOTExZTY0Y2Q0YTEwNDk3YWRlMGFpMCIgYWx0PSJza2luIj48aW1nIHNyYz0iL2NvbnRlbnQvM2ZmZDE1YTc5MmE0OTI2N2EzNjQwYTU1YWVmZmUxYjcwMWYwMzgxOTEyM2M2ZjliYjg2NTcxZDUyMjc2YjhmNmkwIiBhbHQ9Im1vdXRoIj48aW1nIHNyYz0iL2NvbnRlbnQvOGRkNWZlY2NiZjgxNDg3MzdmZDAwNjUxMDNkMjhkNzkxMjE4NmQzOTBjNjRlMDVhNzkwYzI3YWNiOWZiZmY1YmkwIiBhbHQ9ImV5ZSI+PGltZyBzcmM9Ii9jb250ZW50LzZkZGZhODMzODkzYzJmNjZiZjM1ZDY1MzY2YWRjMTkxZDEyODE4MDYwOWQxMDFhZGU5ZjViOWY4YjM0YmI0ZTFpMCIgYWx0PSJjbG90aCI+PGltZyBzcmM9Ii9jb250ZW50L2UyY2FhZDFhMWM3ZjIzNjc5OTc5ODA2NGQxOTM2NDgxYjc5ZjE5YzgxYTdjMDU0N2M2Y2NlN2FmOTRmM2MwYTZpMCIgYWx0PSJuZWNrbGFjZSI+PGltTHRnIHNyYz0iL2NvbnRlbnQvYmViMjFhNmNmNmUxYWNiMDcxMDNhN2I0Mjc2MTkzMWM2NjNmN2RhMjVjOTExNDAxMzQ0NzU4Y2I2NDExNmNjZWkwIiBhbHQ9ImhhdCI+PC9kaXY+CjwvYm9keT48L2h0bWw+CmghwDOf60xmhrkvoLzyCaGst9OMQDAOpvY0ML0RavaqDipuAAAAAAAAAA==',
      addresses: [
        '1L2tGENeoh4mSoiUZrSbs1J3jazSdJH9QS',
        'bc1p9ctdfwx0m20h7spf088erur5um3ule6tff7uqzfhy0xq7vaqwh6sjfs3a5',
      ],
    };

try {
  const simulationResult = await client.simulateTransaction(req);
  // Do something with the simulation result.
  console.log(simulationResponse);
} catch (err) {
  // An error occurred.
  console.log(err)
}
```

## Types
### ClientParams
* `endpoint?: string`: The API endpoint for the simulation service.
* `apiKey: string`: The API token for authentication.

### SimulationRequest
* `psbt: string`: The hex representation of the partially signed Bitcoin transaction.
* `addresses?: string[]`: Optional array of addresses indicating which addresses belong to you, allowing the service to return an aggregated  result.

### SimulationResponse
* `state_changes: StateChanges`: Detailed state changes for each address.
* `aggregated: Aggregated`: Aggregated state changes.
* `inputs: number`: Value of satoshis of the inputs in the PSBT.
* `outputs: number`: Value of satoshis in the PSBT.
* `fee: number`: Transaction fee in satoshis for the PSBT.

### Aggregated
* `state_change: AggregatedStateChange`: Aggregated state changes.

### AggregatedStateChange
* `balance: Balance[]`: Aggregated balance changes.
* `nft: NFT[]`: Aggregated NFT changes.

### StateChanges
* `{ [address: string]: StateChange }`: Object mapping addresses to their respective state changes.

### StateChange
* `balance: Balance[]`: Array of balance changes.
* `nft: NFT[]`: Array of NFT changes.

### Balance
* `ticker: string`: The currency ticker (e.g., 'BTC').
* `value: number`: The balance value in sats.
* `sign: string`: The sign indicating whether the balance is positive or negative.

### NFT
* `id: string`: The unique identifier of the NFT.
* `sign: string`: The sign indicating whether the NFT is present or absent.



## Contributing
Feel free to contribute by opening issues or creating pull requests. Your feedback and contributions are highly appreciated.

## License
This project is licensed under the MIT License - see the LICENSE file for details.