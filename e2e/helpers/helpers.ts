import {browser} from 'protractor';

export class Helpers {
  setTextFieldValue(element: any, value: any) {
    return element.sendKeys(value);
  }
}
