import { browser } from 'protractor';
import { AppPage } from './pages/todos.po';

describe('pr-app App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should has title', () => {
    page.navigateTo();
    expect(page.getTodosTitle()).toEqual('Todos');
    browser.sleep(500);
  });
  it('should add a todo', () => {
    page.addTodo('My first todo');
    expect(page.getTodoName()).toEqual('My first todo');
    browser.sleep(1000);
  });
  it('should add 2 more todos', () => {
    page.addTodo('My second todo');
    page.addTodo('My third todo');
    expect(page.getTodoName()).toEqual('My first todo');
    browser.sleep(1000);
  });
  it('should has 3 todos in the list', () => {
    expect(page.getAllTodos()).toEqual(3);
    browser.sleep(1000);
  });
  it('should remove 2nd todo', () => {
    page.removeSecondTodo();
    expect(page.getAllTodos()).toEqual(2);
    browser.sleep(1000);
  });
  it('should add 1 more todo', () => {
    page.addTodo('My fourth todo');
    expect(page.getAllTodos()).toEqual(3);
    browser.sleep(1500);
  });
  it('should filter completed todos', () => {
    page.filterCompletedTodos();
    expect(page.getAllTodos()).toEqual(1);
    browser.sleep(1500);
  });
  it('should show all todos', () => {
    page.showAllTodos();
    expect(page.getAllTodos()).toEqual(3);
    browser.sleep(1500);
  });
});
