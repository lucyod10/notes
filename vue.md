# Vue

## Vues

`v-if` | an if statement- if the value is true, it will show
`v-for` | a for loop- loop through an array. e.g. `v-for:"todo in todos"` will loop through an array todos declared in vue.
`v-on:click="function"` | declare a function in the value in vue.
`<input v-model="message"` | creates an input field


## Components

Define a component:
```
Vue.component('todo-item', {
  template: '<li>This is a todo</li>'
})
```

And then, to use this component, `todo-item`, you can use it like `<todo-item></todo-item>`

To add in data:

```
Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})
```
