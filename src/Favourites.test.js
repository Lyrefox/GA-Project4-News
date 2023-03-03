import { render, screen } from "@testing-library/react";
import Favourites from "./Favourites";

const mockData = {
  title: "Mock Headline Title",
  img: "Mock Image Path", // mock data must match prop name used in file, (not the name passed to the file)
  url: "Mock Headline url",
};

const setLocalStorage = (id, data) => {
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

  window.localStorage.setItem(id, JSON.stringify(data));
};

test("localStorage mock data", () => {
  const mockId = "0";
  const mockJson = { data: "json" };
  setLocalStorage(mockId, mockJson);
  expect(localStorage.getItem(mockId)).toEqual(JSON.stringify(mockJson));
});

test("Renders Fav Headline Title", () => {
  render(<Favourites />);
  const title = screen.getByTestId("fav-title-test");
  expect(title).toBeInTheDocument();
});

test("Render's no favourites message", () => {
    render(<Favourites/>);
    const noFav = screen.getByTestId("no-fav-test-id")
    expect(noFav).toBeInTheDocument();
})
