<script lang="ts">
    import TodoElement from "./TodoElement.svelte";
    import { createTodo } from "./model/Todo";
    import type { Todo } from "./model/Todo";
    import type { Id } from "./model/Id";
    export let name = "";
    export let todos: Todo[] = [];
    export let onToggle: (id: Id) => void;
</script>

<div class="todoList">
    <h2>{name}</h2>
{#each todos as todo (todo.id)}
    <TodoElement {todo} onToggle={onToggle}/>
{/each}
</div>

<style>
    .todoList {
        display: flex;
        flex-direction: column;
    }
</style>

