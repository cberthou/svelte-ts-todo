type Id = string;

let id = 0;

function createId() {
    return `${id++}`;
}

export type { Id };
export { createId };
