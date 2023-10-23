<template>
    <div :class="`todo ${todo.isDone ? 'is-complete' : ''}`">
        <div class="content">{{todo.title}}</div>
        <div class="buttons">
            <button @click="toggle">{{todo.isDone ? 'Undo' : 'Done'}}</button>
            <button @click="remove" class="delete">Delete</button>
        </div>
    </div>
</template>

<script setup lang="ts">
    defineProps(['todo']);
    const emit = defineEmits(['toggle', 'remove']);

    function toggle() {
        emit('toggle');
    }

    function remove() {
        emit('remove');
    }
</script>