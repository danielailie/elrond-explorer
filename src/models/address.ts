import { Transaction } from './transaction';

export class Address{
    public Address: string;
    public Balance: number;
    public Nonce: number;
    public Transactions: Transaction[];
}