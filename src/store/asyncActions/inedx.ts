import {Dispatch} from "@reduxjs/toolkit";
import {ActionsGroup} from "./types";
import {Auth} from "./auth";
import {AuthService} from "../../services/auth/auth.service";

export class AsyncService {
  private readonly dispatch: Dispatch;

  constructor(dispatch: Dispatch) {
    this.dispatch = dispatch;
  }

  asyncActionStrategy(actionType: ActionsGroup) {
    switch (actionType){
      case ActionsGroup.auth: return new Auth(new AuthService(), this.dispatch);
    }
  }
}