import { describe, it, expect } from "vitest";
import { deleteTodo, getTodos } from "../src/lib/todos";

let items: Awaited<ReturnType<typeof getTodos>> | undefined;

describe("getTodos", () => {
	it("should get the todo items", async () => {
		expect((items = await getTodos())).toBeInstanceOf(Array);
	});
});

describe("deleteTodos", () => {
	it("should delete the rows returned from getTodos", async () => {
		expect(items).not.toBeUndefined();
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		await Promise.all(items!.map(async (todo) => await deleteTodo(todo.id)));
	});
});
