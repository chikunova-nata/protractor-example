import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.template.html'
})
export class TodoItemComponent {
  @Input() todo;
  @Output() itemModified = new EventEmitter();
  @Output() itemRemoved = new EventEmitter();
  editing = false;

  cancelEditing() {
    this.editing = false;
  }

  stopEditing(editedTitle) {
    this.todo.setTitle(editedTitle.value);
    this.editing = false;

    if (this.todo.title.length === 0) {
      this.remove();
    } else {
      this.update();
    }
  }

  edit() {
    this.editing = true;
  }

  toggleCompletion() {
    this.todo.completed = !this.todo.completed;
    this.update();
  }

  remove() {
    this.itemRemoved.next(this.todo.uid);
  }

  update() {
    this.itemModified.next(this.todo.uid);
  }
}
