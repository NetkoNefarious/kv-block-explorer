interface ScriptSig {
  asm: string;
  hex: string;
}

interface Vin {
  txid: string;
  vout: number;
  scriptSig: ScriptSig;
  sequence: number;
  txinwitness?: string;
  coinbase?: string;
}

interface ScriptPubKey {
  asm: string;
  hex: string;
  reqSigs?: number;
  type: string;
  addresses?: string[];
}

interface Vout {
  value: number;
  n: number;
  scriptPubKey: ScriptPubKey;
}

export default interface Transaction {
  txid: string;
  hash: string;
  version: number;
  size: number;
  vsize: number;
  weight: number;
  locktime: number;
  vin: Vin[];
  vout?: Vout[];
  hex: string;
  blockhash: string;
  confirmations: number;
  time: number;
  blocktime: number;
}
