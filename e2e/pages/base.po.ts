import {browser} from 'protractor';
import { Helpers } from '../helpers/helpers';

export class BasePage {
  navigateTo() {
    browser.waitForAngularEnabled(false);
    return browser.get('http://localhost:5000/');
  }
}
