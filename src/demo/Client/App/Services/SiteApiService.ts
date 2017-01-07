﻿import { Injectable, EventEmitter } from '@angular/core';
import { HttpModule, Http, Response, Headers, RequestOptions } from '@angular/http';
import * as Rx from 'rxjs/rx';
import 'rxjs/add/operator/map';
import { UserViewModel } from '../ViewModels/UserViewModel';

/**
 * This service just simulates a user store to keep the demo running without further dependencies.
 * 
 */
@Injectable()
export class SiteApiService {

  private users: Array<UserViewModel>;

  constructor() {
    // some static demo data
    let u1 = new UserViewModel();
    u1.id = 1;
    u1.email = "Paul@parker.com";
    u1.phoneNumber = "030-123456";
    u1.userName = "Paul Parker";
    let u2 = new UserViewModel();
    u2.id = 2;
    u2.email = "wilma@workshop.com";
    u2.phoneNumber = "055-123456";
    u2.userName = "Wilma Workshop";
    let u3 = new UserViewModel();
    u3.id = 3; 
    u3.email = "theodor@trainer.com"; 
    u3.phoneNumber = "088-123456"; 
    u3.userName = "Theodor Trainer";
    let u4 = new UserViewModel();
    u4.id = 4; 
    u4.email = "bill@boss.com"; 
    u4.phoneNumber = "001-55998877"; 
    u4.userName = "Bill Boss";

    this.users = new Array<UserViewModel>();
    this.users.push(u1);
    this.users.push(u2);
    this.users.push(u3);
    this.users.push(u4);
  }

  /// User

  public getUser(id: number): Rx.Observable<UserViewModel> {
    var user = this.users.filter(u => u.id == id)[0];
    return Rx.Observable.create(o => o.next(user));
  }


  public getUsers(): Rx.Observable<Array<UserViewModel>> {
    return Rx.Observable.create(o => o.next(this.users));
  }

  public newUser(user: UserViewModel): Rx.Observable<boolean> {
    this.users.push(user);
    // always true 
    return Rx.Observable.create(o => true);
  }

  public editUser(id: number, user: UserViewModel): Rx.Observable<boolean> {
    var user = this.users.filter(u => u.id == id)[0];
    this.users.splice(this.users.indexOf(user), 1, user);
    // always true 
    return Rx.Observable.create(o => true);
  }

  /// Common Functions

  private handleError(error: Response) {
    console.error(error);
    return Rx.Observable.throw(error.json().error || 'Server error');
  }


}

