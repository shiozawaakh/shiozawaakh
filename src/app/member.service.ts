import { Injectable } from '@angular/core';
import { MEMBERS } from './mock-members';
import { Member } from './member';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor() { }

  getMembers(): Observable<Member[]> {
    return of(MEMBERS);
  }
}
