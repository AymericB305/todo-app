<template>
  <main class="w-full h-100vh flex flex-col items-center pt-8">
    <h1 class="uppercase mb-2 text-4xl font-bold">Todo List</h1>
    <p class="mb-8">Add your own todos</p>
    
    <div class="flex justify-center items-center max-w-lg">
      <input
        class="appearance-none outline-none border-b border-solid border-white bg-transparent text-2xl py-2 duration-300 focus:border-green-400"
        type="text"
        v-model="newTodo"
        placeholder="Add a new todo"
        @keypress.enter="addTodo"
      />

      <button
        class="button bg-green-400 text-black text-xl"
        @click="addTodo"
      >
        Add
      </button>
    </div>

    <div class="todos w-full max-w-lg mt-8">
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
