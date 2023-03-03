import { render, screen } from "@testing-library/react"
import Favourites from "./Favourites"

const mockData = {
    title: "Mock Headline Title",
    img: "Mock Image Path", // mock data must match prop name used in file, (not the name passed to the file)
    url: "Mock Headline url"
}

const localStorageMock = (function () {
    let store = {};

    return {
      getItem(key) {
        return store[key];
      },

      setItem(key, value) {
        store[key] = value;
      },

      clear() {
        store = {};
      },

      removeItem(key) {
        delete store[key];
      },

      getAll() {
        return store;
      },
    };
  })();

  Object.defineProperty(window, "localStorage", { value: localStorageMock });

  const setLocalStorage = (id, data) => {
    window.localStorage.setItem(id, JSON.stringify(data));
  };




//   describe("set local storage item", () => {
//     beforeEach(() => {
//         window.localStorage.clear()
//     })
// })
test("localStorage mock data", () => {
    const mockId = "0"
    const mockJson = { data: "json" }
    setLocalStorage(mockId, mockJson)
    expect(localStorage.getItem(mockId)).toEqual(JSON.stringify(mockJson))
})


test("Renders Fav Headline Title", () => {
    // const mockId = "0"
    // const mockJson = { data: "json" }
    // setLocalStorage(mockId, mockJson)
    render(<Favourites/>);
    const title = screen.getByTestId("fav-title-test")
    expect(title).toBeInTheDocument();
})
