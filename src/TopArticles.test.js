import { render, screen } from "@testing-library/react"
import TopArticles from "./TopArticles";

const mockData = {
    title: "Mock Headline Title",
    img: "Mock Image Path", // mock data must match prop name used in file, (not the name passed to the file)
    url: "Mock Headline url"
}

test("Renders Headline Title", () => {
    render(<TopArticles/>);
    const title = screen.getByTestId("title-test");
    expect(title).toBeInTheDocument();
})

test("Render Headline Image", () => {
    render(<TopArticles img={mockData.img} title={mockData.title} />)

    const imgSrc = screen.getByTestId("img-test")
    expect(imgSrc).toHaveAttribute(
        "src",
        `${mockData.img}`
    );
    expect(imgSrc).toHaveAttribute("alt", `${mockData.title}`)
})

test("Render link", () => {
    render(<TopArticles url={mockData.url} />)

    const urlHref = screen.getByTestId('link-test')
    expect(urlHref).toHaveAttribute(
        "href",
        `${mockData.url}`
    )
})

