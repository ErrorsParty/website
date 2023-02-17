import type { Database } from "../gen/types.gen";
import supabase from "../supabase";

export async function getTodos(): Promise<Array<Database["public"]["Tables"]["todos"]["Row"]>> {
	// eslint-disable-next-line no-useless-catch -- Supabase returns shitty promises. This is necesarry.
	try {
		const { data, error } = await supabase.from("todos").select("*");
		// eslint-disable-next-line @typescript-eslint/no-throw-literal -- This is an error.
		if (error != null) throw error;
		return data;
	} catch (error) {
		throw error;
	}
}

export async function deleteTodo(
	id: number,
): Promise<Array<Database["public"]["Tables"]["todos"]["Row"]>> {
	// eslint-disable-next-line no-useless-catch -- Supabase returns shitty promises. This is necesarry.
	try {
		const { data, error } = await supabase
			.from("todos")
			.delete()
			.eq("id", id)
			.returns(...(["*"] as any as []));
		// eslint-disable-next-line @typescript-eslint/no-throw-literal -- This is an error.
		if (error !== null) throw error;
		return data as any;
	} catch (error) {
		throw error;
	}
}
