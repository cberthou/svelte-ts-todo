<script lang="ts">
	import { createTodo } from "./model/Todo";
	import type { Todo } from "./model/Todo";
	import TodoList from "./TodoList.svelte";
	import CreateTodo from "./CreateTodo.svelte";
	import type { Id } from "./model/Id";
	import { transfer } from "./util/ArrayUtil";
    let todoList: Todo[] = [
        createTodo("task1"),
        createTodo("task2"),
        createTodo("task3")
    ];

    let doneList: Todo[] = [
        createTodo("task4")
	];
	
	function doTask(id: Id) {
		[todoList, doneList] = transfer("id", id, todoList, doneList);
	}

	function undoTask(id: Id) {
		[doneList, todoList] = transfer("id", id, doneList, todoList);
	}

	function onCreate(name: string) {
		todoList = [...todoList, createTodo(name)];
	}
</script>

<main>
	<div>Hello</div>
	<div class="todoContainer">
		<TodoList name="Todo" todos={todoList} onToggle={doTask}></TodoList>
		<TodoList name="Done" todos={doneList} onToggle={undoTask}></TodoList>
	</div>
	<div>
		<CreateTodo onCreate={onCreate} />
	</div>
</main>

<style>
	.todoContainer {
		display: flex;
	}
</style>