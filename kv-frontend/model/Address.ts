export default interface Address {
  address: string;
  scriptPubKey: string;
  ismine: boolean;
  solvable: boolean;
  iswatchonly: boolean;
  isscript: boolean;
  iswitness: boolean;
  witness_version: number;
  witness_program: string;
  ischange: boolean;
  labels: any[];
}
