import { browser, by, element, protractor } from 'protractor';
import { BasePage } from './base.po';

export class AppPage extends BasePage {
  constructor() {
    super();
  }
  getTodosTitle() {
    return element(by.css('[data-e2e="todo-title"]')).getText();
  }
  getTodoName() {
    return element.all(by.css('[data-e2e="todo-label"]')).get(0).getText();
  }
  addTodo(value: string) {
    element(by.css('[data-e2e="todo-field"]')).sendKeys(value);
    return browser.actions().sendKeys(protractor.Key.ENTER).perform();
  }
  getAllTodos() {
    return element.all(by.css('[data-e2e="todo-list"]')).count();
  }
  removeSecondTodo() {
    return element.all(by.css('[data-e2e="todo-destroy"]')).get(1).click();
  }
  filterCompletedTodos() {
    element.all(by.css('[data-e2e="todo-completed"]')).get(1).click();
    return element(by.css('[data-e2e="filter-completed"]')).click();
  }
  showAllTodos() {
    return element(by.css('[data-e2e="show-all"]')).click();
  }
}
