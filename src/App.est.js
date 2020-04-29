// import React from 'react';
// import { render } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import React from 'react';
import { render, getAllByTestId, fireEvent } from '@testing-library/react';
import CountRedux, { Count } from './index';
import { Provider } from 'react-redux'
import store from '../../redux/store'

describe('test count functionality', () => {
  const mockProps = {
    user : {
      name: 'andi'
    },
    num: 0,
    incrementAction: jest.fn(() => mockProps.num += 1),
    decrementAction: jest.fn(() => mockProps.num -= 1)
  }
  
  it('increment function', () => {
    const { getByTestId } = render(<Count {...mockProps} />)
    
    const buttonIncrement = getByTestId('increment')
    
    fireEvent.click(buttonIncrement)
    
    expect(mockProps.incrementAction).toHaveBeenCalled()
  })
  
  it('decrement function', () => {
    const { getByTestId } = render(<Count {...mockProps} />)
    
    const buttonIncrement = getByTestId('decrement')
    
    fireEvent.click(buttonIncrement)
    
    expect(mockProps.decrementAction).toHaveBeenCalled()
  }) 
  
})

describe('test count integrated with redux', () => {
  it('increment action should update num to 1', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <CountRedux />
      </Provider>
    )
    
    const buttonIncrement = getByTestId('increment')
    const divNum = getByTestId('result-num')
    
    fireEvent.click(buttonIncrement)
    fireEvent.click(buttonIncrement)
    expect(store.getState().cartQuantity).toEqual(2)
    expect(divNum.innerHTML).toEqual('2')
  })
})