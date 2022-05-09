import {fireEvent, render,screen,cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './components/button.js';
import Calculator from './components/calculator.js';
import OutputScreen from './components/outputScreen.js';
import OutputScreenRow from './components/outputScreenRow.js';

// test('test the Clear Button', async () => {
//     //when button label 'clear' is clicked Both outputscreenrow is cleared

//     render(<Calculator/>)
    

//     fireEvent.click(screen.getByDisplayValue('Clear'))

//     const items=await this.state.answer ;

//     expect(items).toHaveValue('');


afterEach(() => {
    cleanup(); // Resets the DOM after each test suite
 });

 describe("Button Component" ,() => {
  
    
 //test 1   
test("Button Rendering Clear", () => {
    render(<Calculator />)
    const item=(screen.getByDisplayValue('Clear'))
    expect(item).toBeInTheDocument(); 
})

//test 2
test("Button Rendering Delete ", () => {
    render(<Calculator />)
    const item=(screen.getByDisplayValue('Delete'))
    expect(item).toBeInTheDocument(); 
})

//test 3
test("Button Rendering .", () => {
    render(<Calculator />)
    const item=(screen.getByDisplayValue('.'))
    expect(item).toBeInTheDocument(); 
})

//test 4
test("Button Rendering / ", () => {
    render(<Calculator />)
    const item=(screen.getByDisplayValue('/'))
    expect(item).toBeInTheDocument(); 
})

//test 5   
test("Button Rendering 7", () => {
    render(<Calculator />)
    const item=(screen.getByDisplayValue('7'))
    expect(item).toBeInTheDocument(); 
})

//test 6
test("Button Rendering 8 ", () => {
    render(<Calculator />)
    const item=(screen.getByDisplayValue('8'))
    expect(item).toBeInTheDocument(); 
})

//test 7   
test("Button Rendering 9", () => {
    render(<Calculator />)
    const item=(screen.getByDisplayValue('9'))
    expect(item).toBeInTheDocument(); 
})

//test 8
test("Button Rendering * ", () => {
    render(<Calculator />)
    const item2=(screen.getByDisplayValue('*'))
    expect(item2).toBeInTheDocument(); 
})

//test 9   
test("Button Rendering 4", () => {
    render(<Calculator />)
    const item=(screen.getByDisplayValue('4'))
    expect(item).toBeInTheDocument(); 
})

//test 10
test("Button Rendering 5 ", () => {
    render(<Calculator />)
    const item=(screen.getByDisplayValue('5'))
    expect(item).toBeInTheDocument(); 
})

//test 11
test("Button Rendering 6 ", () => {
    render(<Calculator />)
    const item=(screen.getByDisplayValue('6'))
    expect(item).toBeInTheDocument(); 
})

//test 12
test("Button Rendering -", () => {
    render(<Calculator />)
    const item=(screen.getByDisplayValue('-'))
    expect(item).toBeInTheDocument(); 
})

//test 13
test("Button Rendering 1 ", () => {
    render(<Calculator />)
    const item=(screen.getByDisplayValue('1'))
    expect(item).toBeInTheDocument(); 
})

//test 14
test("Button Rendering 2", () => {
    render(<Calculator />)
    const item=(screen.getByDisplayValue('2'))
    expect(item).toBeInTheDocument(); 
})

//test 15
test("Button Rendering 3 ", () => {
    render(<Calculator />)
    const item2=(screen.getByDisplayValue('3'))
    expect(item2).toBeInTheDocument(); 
})

//test 16 
test("Button Rendering +", () => {
    render(<Calculator />)
    const item=(screen.getByDisplayValue('+'))
    expect(item).toBeInTheDocument(); 
})

//test 17
test("Button Rendering 0 ", () => {
    render(<Calculator />)
    const item=(screen.getByDisplayValue('0'))
    expect(item).toBeInTheDocument(); 
})

//test 18
test("Button Rendering = ", () => {
    render(<Calculator />)
    const item=(screen.getByDisplayValue('='))
    expect(item).toBeInTheDocument(); 
})

})
