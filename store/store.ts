import { defineStore } from 'pinia'

type Todo = {
    title: string;
    isDone: boolean;
}

interface State {
    todos: Todo[];
}

export const useTodosStore = defineStore({
    id: 'todos',
    state: (): State => ({ todos: [] }),

    actions: {
        add(title: string): number {
            this.todos.unshift({
                title: title,
                isDone: false
            });
            return 0;
        },
        toggle(index: number) {
            this.todos[index].isDone = !this.todos[index].isDone;            
        },
        remove(index: number) {
            this.todos.splice(index, 1);
        },
    },

    getters: {
        length: (state) => state.todos.length,
    }
})