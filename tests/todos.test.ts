import { describe, it, expect } from "vitest";
import { getTodos } from "../src/lib/todos";

describe("getTodos", () => {
	it("should get the todo items", async () => {
		expect(await getTodos()).toBeInstanceOf(Array);
	});
});
