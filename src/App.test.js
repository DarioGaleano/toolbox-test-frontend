import { render, screen } from "@testing-library/react";
import { Table, Header } from "../src/components";
import { Button } from "react-bootstrap";
test("test components", () => {
	//Test header
	render(<Header />);
	expect(screen.getByText("React Test App")).toBeInTheDocument();
	//Test Table
	render(<Table />);
	expect(screen.getByRole("table")).toBeInTheDocument();
	//Test Button
	render(<Button></Button>);
	expect(screen.getByRole("button")).toBeInTheDocument();
});
