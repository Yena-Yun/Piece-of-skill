import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { Burger, Menu } from './components';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div>
          <h1>Hello. This is burger menu tutorial</h1>
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSti6XeRwcgY06MLdnd8aUm6KHoY017vlNBEg&usqp=CAU'
            alt='burger icon'
          />
          <small>Icon made by Freepik from www.flaticon.com</small>
        </div>
        {/* <div>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div> */}
        <div>
          <Burger />
          <Menu />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
