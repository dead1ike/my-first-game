import {EventData, Page} from '@nativescript/core';
import {DemoSharedCanvasPhaser} from '~/games';

export function navigatingTo(args) {
  const page = args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedCanvasPhaser {
}
