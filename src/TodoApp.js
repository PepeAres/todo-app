import { html, LitElement } from "lit";

export class TodoApp extends LitElement {
  static get properties() {
    return{
      todos: { type: Array }
    };
  }

  constructor() {
    super();
    this.todos = [];
  }

  render() {
    return html`
    <b>Agrega una nueva Tarea:</b>
      <form @submit=${this.onsubmit}>
        <input data-testid="newItem" name="newItem" required>
        <button data-testid="add">Agregar</button>
      </form>
      
      <ol>
        ${this.todos.map(item => {
          return html`
        <li>
          ${item.text}
          <input
            type="checkbox"
            .checked=${item.isDone}
            @click=${()=> this.changeDone(item)}>
          
            <button
              @click=${()=> this.remove(item)}>X
            </button>
              
        </li>`
        })}
      </ol>
      `;
  }

  onsubmit(e) {
    e.preventDefault();
    const from = e.target;
    const data = new FormData(from);
    const newItem = data.get('newItem');
    e.target.reset();
    this.todos = [...this.todos, {text:newItem}]

  }

  changeDone(item){
    item.isDone = !item.isDone;
        this.requestUpdate();
  }
  remove(item){
    this.todos = this.todos.filter((todo)=>{
      if(todo === item){
        return false;
      } 
      return true;
    });
    }


    mapTodos (items){
      return items.map(item=>{
        return {
          text: item.title,
          isDone:item.completed
        }
      })
    }
}