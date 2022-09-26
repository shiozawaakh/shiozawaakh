import { Injectable } from '@angular/core';
import { MEMBERS } from './mock-members';
import { Member } from './member';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private messageService: MessageService) { }

  getMembers(): Observable<Member[]> {
    this.messageService.add("MemberService: 社員データを取得しました");
    return of(MEMBERS);
  }
}
