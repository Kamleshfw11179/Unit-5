import { render, screen,fireEvent } from '@testing-library/react';
import Slider from "./Slider"
const data = [{
    id:"" ,
    question:"Which of the following is the richest source of vitamin B1 ?" ,
    answer:" Cereal grains" ,
  },{
    id:"" ,
    question:"How many times does the kidney filter blood in a day ?" ,
    answer:"400" ,
  },{
    id:"" ,
    question:"Which of the following is the correct number violin string ?" ,
    answer:"Four" ,
  },{
    id:"" ,
    question:"What sport is played at Wimbledon ?" ,
    answer:"Tennis" ,
  }]

test("if slider is working properly" ,()=>{
    render(<Slider />)
})


test("if buttons as present" ,()=>{
    render(<Slider />)
    const next = screen.getByTestId("next");
    const prev = screen.getByTestId("prev");
    expect(next.textContent).toBe("Next");
    expect(prev.textContent).toBe("Prev")
})

test("if counts are be less than 4 and greater than 0",()=>{
    render(<Slider />)
    fireEvent.click(screen.getByTestId("next"));
    fireEvent.click(screen.getByTestId("next"));
    fireEvent.click(screen.getByTestId("next"));
    fireEvent.click(screen.getByTestId("next"));
    fireEvent.click(screen.getByTestId("next"));
    fireEvent.click(screen.getByTestId("next"));
    const count = screen.getByTestId("span");
    expect(Number(count.textContent)).toBeLessThanOrEqual(4)
    fireEvent.click(screen.getByTestId("prev"));
    fireEvent.click(screen.getByTestId("prev"));
    fireEvent.click(screen.getByTestId("prev"));
    fireEvent.click(screen.getByTestId("prev"));
    fireEvent.click(screen.getByTestId("prev"));
    fireEvent.click(screen.getByTestId("prev"));
    expect(Number(count.textContent)).toBeGreaterThanOrEqual(0)
})

test("if data matches" ,()=>{
    render(<Slider />)
    fireEvent.click(screen.getByTestId("next"));
    fireEvent.click(screen.getByTestId("next"));
    fireEvent.click(screen.getByTestId("next"));
    const ques = screen.getByTestId("qes").textContent;
    const count = Number(screen.getByTestId("span").textContent);
    const data1 =data[count-1].question;
    expect(ques).toContain(data1)
})