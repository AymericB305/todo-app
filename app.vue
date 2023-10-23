<template>
  <main>
    <h1>Todo List</h1>
    <p>Add your own todos</p>
    
    <div class="create-new">
      <input type="text" v-model="newTodo" placeholder="Add a new todo" @keypress.enter="addTodo" />

      <button @click="addTodo">Add</button>
    </div>

    <div class="todos">
      <Todo
        v-for="(todo, i) in todos"
        :todo="todo"
        :index="i"
        @toggle="toggle(i)"
        @remove="remove(i)" />
    </div>
  </main>
</template>

<script setup lang="ts"> 
import { useTodosStore } from './store/store';

  const todosStore = useTodosStore();
  const { todos } = storeToRefs(todosStore);
  let newTodo = '';

  function addTodo() {
    if (newTodo) {
      todosStore.add(newTodo);
      newTodo = '';
    }
  }

  function toggle(index: number) {
    todosStore.toggle(index);
  }

  function remove(index: number) {
    todosStore.remove(index);
  }

</script>
