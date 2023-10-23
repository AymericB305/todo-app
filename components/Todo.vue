<template>
    <div :class="`flex items-center justify-between bg-martinique-950 p-4 rounded-lg mb-4 ${todo.isDone ? 'opacity-70' : ''}`">
        <div :class="`${todo.isDone ? 'line-through' : ''}`">{{todo.title}}</div>
        <div class="min-w-fit">
            <button class="button bg-green-400 text-black" @click="toggle">{{todo.isDone ? 'Undo' : 'Done'}}</button>
            <button @click="remove" class="button bg-red-600">Delete</button>
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