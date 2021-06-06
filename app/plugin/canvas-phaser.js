import {EventData, Page} from '@nativescript/core';
import {GestureStateTypes} from "@nativescript/core";
// import {DemoSharedCanvasPhaser} from '@demo/shared';
import TNSPhaser from "@nativescript/canvas-phaser";

export function navigatingTo(args) {
  const page = args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedCanvasPhaser {
}
