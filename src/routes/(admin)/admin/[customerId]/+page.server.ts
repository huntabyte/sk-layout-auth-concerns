import type { PageServerLoad } from "./$types"

export const load: PageServerLoad = async ({ params, parent }) => {
	await parent()
	const getCustomerById = async (customerId: string) => {
		console.log(`Fetched customer id: ${customerId} from database`)
		const res = await fetch(`https://dummyjson.com/users/${customerId}`)
		const customer = await res.json()
		return customer
	}

	return {
		customer: getCustomerById(params.customerId),
	}
}
