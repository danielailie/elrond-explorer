import { Time } from '@angular/common';

export class Transaction{
    public Hash: string;    
    public MiniBlockHash: string;
    public Status: string;
    public Timestamp: Time;
    public Sender: string;
    public SenderShard: string;
    public Receiver: string;
    public ReceiverShard: string;
    public Value: number;
    public Fee: number;
    public GasLimit: number;
    public GasUsed: number;
    public GasPrice: number;
    public Nonce: number;
    public Data: string;
    public Age: number;
}