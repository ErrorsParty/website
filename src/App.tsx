import type { Component } from "solid-js";
import { createEffect, createSignal, onCleanup, Show, For } from "solid-js";
import supabase from "./supabase";
import { type Database } from "./gen/types.gen";

const App: Component = () => {
	const [loading, setLoading] = createSignal(true);
	const [error, setError] = createSignal<string | undefined>();
	const [items, setItems] = createSignal<Array<Database["public"]["Tables"]["todos"]["Row"]>>([]);

	createEffect(() => {
		onCleanup(() => {
			setItems([]);
			setError(undefined);
			setLoading(true);
		});

		(async () => {
			const result = await supabase.from("todos").select("id, title, content, at");
			// eslint-disable-next-line @typescript-eslint/no-throw-literal -- This is an error.
			if (result.error !== null) throw result.error;
			console.log(result);
			setItems(result.data);
		})()
			.catch((error) => setError(error.message))
			.finally(() => setLoading(false));
	});

	return (
		<div>
			<Show when={!loading()} fallback={<div class="italic">Loading...</div>}>
				<Show when={error() !== undefined} fallback={<div class="text-red-500">{error()}</div>}>
					<table class="dui-table">
						<thead>
							<tr>
								<th>ID</th>
								<th>Title</th>
								<th>Content</th>
								<th>Timestamp</th>
							</tr>
						</thead>
						<tbody>
							<For each={items()}>
								{(item) => (
									<tr>
										<td>{item.id}</td>
										<td>{item.title}</td>
										<td>{item.content ?? <span class="italic">No content</span>}</td>
										<td>{item.at}</td>
									</tr>
								)}
							</For>
						</tbody>
					</table>
				</Show>
			</Show>
		</div>
	);
};

export default App;
