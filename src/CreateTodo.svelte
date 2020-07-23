<script lang="ts">
    export let onCreate: (name: string) => void; 
    let todoName = "";

    function onSubmitTodo() {
        onCreate(todoName);
    }
</script>

<div>
    <input type="text" bind:value={todoName} />
    <button on:click={onSubmitTodo}>Create</button>
</div>