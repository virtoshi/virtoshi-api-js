export type ClientParams = {
  endpoint?: string
  apiKey: string
}

export interface Balance {
  ticker: string
  value: number
  sign: string
}

export interface NFT {
  id: string
  sign: string
}

export interface StateChange {
  balance: Balance[]
  nft: NFT[]
}

export interface StateChanges {
  [address: string]: StateChange
}

export interface AggregatedStateChange {
  balance: Balance[]
  nft: NFT[]
}

export interface Aggregated {
  state_change: AggregatedStateChange
}

export interface SimulationResponse {
  state_changes: StateChanges
  aggregated: Aggregated
  inputs: number
  outputs: number
  fee: number
}

export type SimulationRequest = {
  psbt: string
  addresses?: string[]
}
