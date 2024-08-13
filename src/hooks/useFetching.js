import { useState } from "react";

const useFetching = (callback) => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(false);

	const fetching = async (...args) => {
		try {
			setIsLoading(true);
			return await callback(...args);
		} catch (err) {
			setError(err.message);
		} finally {
			setIsLoading(false);
		}
	};

	return [error, isLoading, fetching];
};

export default useFetching;
