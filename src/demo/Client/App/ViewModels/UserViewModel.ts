﻿import { Required, MaxLength, Range, Email, Display, Hidden } from "svogv";

/**
 * View Model for table view.
 * 
 * The intializer (= 0 and = "") are required to force the TS compiler to create properties. This is required to loop the element 
 * 
 */
export class UserViewModel {

  @Hidden()
  id: number = 0;

  @Display("E-Mail", "E-Mail address")
  @Required()
  @MaxLength(100)
  @Email()
  email: string = "";

  @Display("Phone Number", "The user's phone")
  @Required()
  @MaxLength(20)
  phoneNumber: string = "";

  @Display("User Name", "The full name")
  @Required()
  @MaxLength(100)
  userName: string = "";

}