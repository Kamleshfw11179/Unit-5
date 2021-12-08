import Counter from "./Counter"

import { render, screen, fireEvent } from '@testing-library/react';

test("if counter is present",()=>{
    render(<Counter />)
})


test("if buttons are present" ,()=>{
    render(<Counter />)
    const addbutton = screen.getByText("Add")
    const redbutton = screen.getByText("Reduce")
    const text = screen.getByTestId("count");
})

test("if any value",()=>{
    render(<Counter />)
    const text = screen.getByTestId("count");
    expect(text.textContent).toBe("0")
})

test("if add is working",()=>{
    render(<Counter />)
    fireEvent.click(screen.getByTestId("addBtn"))
    const count = screen.getByTestId("count");
    expect(count.textContent).toBe("5")
})

test("if reduce is working",()=>{
    render(<Counter />)
    fireEvent.click(screen.getByTestId("addBtn"))
    fireEvent.click(screen.getByTestId("addBtn"))
    fireEvent.click(screen.getByTestId("delBtn"))
    const count = screen.getByTestId("count");
    expect(count.textContent).toBe("5")
})