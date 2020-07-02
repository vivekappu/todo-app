import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
todolist;
completed;

  constructor(public http:HttpClient) { 
     http.get('https://jsonplaceholder.typicode.com/todos').subscribe((todolist)=>{
        this.todolist=todolist;
     })
  }
  additem(event){
    event.preventDefault();
  }

  ngOnInit(): void {

  
    
    /*todo part here */
    var todoListItem = $(".todo-list");
    var todoListInput = $(".todo-list-input");
    var countNewCompltetedTasks = 0;
    /* event listener on todo list */
    $(".todo-list-add-btn").on("click", function (event) {
      
    
      var item = $(this).prevAll(".todo-list-input").val();
    
      if (item) {
        todoListItem.append(`
        <li>
            <div class='form-check'>
            <label class='form-check-label'><input class='checkbox' type='checkbox' /> 
            ${item}
            <i class='input-helper'></i>
            </label>
            </div>
            <i class='remove mdi mdi-close-circle-outline'></i>
        </li>`);
        todoListInput.val("");
      }
    });
    /* event listener on list item */
    todoListItem.on("change", ".checkbox", function () {
      $(this).closest("li").toggleClass("completed");
    });
    
    todoListItem.on("click", ".remove", function () {
      $(this).parent().remove();
    });
    
    $('button[type="submit"]').on("click", redirectTologin);
    function redirectTologin() {
      $(location).attr("href", "login.html");
    }
    

}}
