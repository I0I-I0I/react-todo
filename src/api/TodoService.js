const URL = "https://jsonplaceholder.typicode.com/todos";

export default class TodoService {
	static async getTodos() {
		const response = await fetch(URL).then((result) => result.json());
		return response;
	}
}
