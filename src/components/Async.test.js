import {render, screen} from "@testing-library/react"
import Async from "./Async"

describe("Async component", () => {
	
	test("renders posts if request succeeds", async() => {
// 		Simulating a success case
// 		Replacing the fetch function with a custom made so that our test does not trigger additional GET/POST requiests
		window.fetch = jest.fn();
		window.fetch.mockResolvedValueOnce({
			json: async () => [
				{
					id: "p1",
					title: "first post"
				}
			]
		});
		
		render(<Async />)
		
// 		The Find quiery allows for a third argument with gives a timeout period in which the page will be re-rendered multiple times
		const listElements = await screen.findAllByRole("listitem", {}, {});
		expect(listElements).not.toHaveLength(0);
	})
})