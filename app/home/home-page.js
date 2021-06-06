import {  } from '@nativescript/core';
// import TNSPhaser from "@nativescript/canvas-phaser";
import { HomeViewModel } from './home-view-model'


export function onNavigatingTo(args) {
  const page = args.object
  page.bindingContext = new HomeViewModel()
}
