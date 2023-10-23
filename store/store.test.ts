import { createPinia, setActivePinia } from 'pinia'
import { describe, expect, test, beforeEach, beforeAll, afterEach } from 'vitest'
import { useTodosStore } from './store'

beforeAll(() => {
    setActivePinia(createPinia());
});

describe('Counter Store', async () => {

    let store: ReturnType<typeof useTodosStore>;

    beforeEach(() => {
        store = useTodosStore();
    });

    afterEach(() => {
        store.$reset();
    });

    test('creates a store', () => {
        expect(store).toBeDefined();
    });

    test('adds a todo', () => {
        const length = store.length;
        const index = store.add('Test');

        expect(store.todos.length).toBe(length + 1);
        expect(store.todos[index].title).toBe('Test');
        expect(store.todos[index].isDone).toBe(false);
    });

    test('toggles the "isDone" property', () => {
        store.add('Toggle Test');
        const initialIsDone = store.todos[0].isDone;
      
        store.toggle(0);      
        expect(store.todos[0].isDone).toBe(!initialIsDone);
      
        store.toggle(0);      
        expect(store.todos[0].isDone).toBe(initialIsDone);
    });
      
    test('removes a todo', () => {
        const length = store.length;
        store.add('Remove Test 1');
        const index = store.add('Remove Test 2');
      
        store.remove(index + 1);
      
        expect(store.todos.length).toBe(length + 1);
        expect(store.todos[index].title).toBe('Remove Test 2');
    });
})