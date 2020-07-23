<script lang="ts">
    import type { Todo } from "./model/Todo";
    import type { Id } from "./model/Id";
    export let todo: Todo;
    export let onToggle: (id: Id) => void;
</script>

<div>
    <span>{todo.name}</span>
    <button on:click={() => onToggle(todo.id)}>X</button>
</div>

