import { Id, createId } from "./Id";

export type Todo = {
    id: Id;
    name: string;
};

export const createTodo = (name: string): Todo => ({
    id: createId(),
    name
});
