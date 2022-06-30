import './Styles/App.css'
import Header from './Components/Header.js'
import Container from '@mui/material/Container';
import Card from './Components/Card.js'
import data from './data.js'

function App() {

  const projects = data.map(card => {
    return (
      <Card
        {...card}
        key={card.id}
      />
    )
  })


  return (
    <div>
      <Header />
      <Container fixed>
        <div className="cardContainer">
          {projects}
        </div>
      </Container>
    </div>
  );
}

export default App;
