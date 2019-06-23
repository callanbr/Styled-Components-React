import React, {useState} from 'react';
import { Card, CardImage, CardFooter } from './components/Card';
import { Container } from './components/Layout';
import { Button } from './components/Button';

function App(props) {
    const [theme, setTheme] = useState('light');
  
    const toggleTheme = () => {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
    }
  
    return (
      <Container theme={theme}>
        <Card
          theme={theme}
        >
          <CardImage imgsrc="https://www.geeky-gadgets.com/wp-content/uploads/2019/05/electric-skateboard.jpg" />
          <CardFooter center>
            <Button
              onClick={toggleTheme}
              theme={theme}
            >
              {theme}
            </Button>
          </CardFooter>
        </Card>
      </Container>
    );
  }
  
  export default App;