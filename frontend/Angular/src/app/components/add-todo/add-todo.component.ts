import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() addTodo: EventEmitter<any> = new EventEmitter();

  text:string;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    const todo = {
      text: this.text,
      completed: false
    }

    this.addTodo.emit(todo);
  }

}
