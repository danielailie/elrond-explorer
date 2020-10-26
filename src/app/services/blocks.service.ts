import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Block } from 'src/models/block';

@Injectable({
  providedIn: 'root',
})
export class BlocksService {
  constructor(private http: HttpClient) {}

  private blocksUrl = 'http://localhost:3000/blocks';
  private getBlockByHashUrl = 'http://localhost:3000/blocks?BlockHash={hash}';

  getBlocks(): Observable<Block[]> {
    return this.http.get<Block[]>(this.blocksUrl);
  }

  getBlockById(hash: string): Observable<Block> {
    let url =this.getBlockByHashUrl.replace("{hash}", hash);
    console.log("Url ", url);
    return this.http.get<Block>(this.getBlockByHashUrl.replace("{hash}", hash));
  }
}
