import * as firebase from "firebase";
import {AuthParams} from "../../services/auth/auth.strategy";
import {AuthProviders} from "../../services/auth/auth.providers";
import {AuthService} from "../../services/auth/auth.service";
import {Dispatch} from "@reduxjs/toolkit";
import {login, logout, signup} from "../auth";

export class Auth {
  private authService: AuthService;
  private readonly dispatch: Dispatch;

  constructor(service: AuthService, dispatch: Dispatch) {
    this.authService = service;
    this.dispatch = dispatch;
  }

  logoutAction = async () => {
    try {
      await firebase.default.auth().signOut().then(res => {
        this.dispatch(logout());
      });
    } catch (err) {
      alert(err);
    }
  };

  loginAction = async (params: AuthParams, provider: AuthProviders) => {
    try {
      await this.authService
        .loginStrategy(provider)
        .login(params)
        .then(res => this.dispatch(login(res.user)));
    } catch (err) {
      alert(err);
    }
  };

  registerAction = async (email: string, password: string) => {
    try {
      return await firebase.default.auth()
        .createUserWithEmailAndPassword(email, password)
        .then(res => this.dispatch(signup(res.user)));
    } catch (err) {
      alert(err);
    }
  };
}