import {EventData, Page} from '@nativescript/core';
import {MainViewModel} from "./main-view-model";

export function navigatingTo(args) {
  const page = args.object;
  page.bindingContext = new MainViewModel();
}
