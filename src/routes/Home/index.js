import Header from '../../components/Header';
import Layout from '../../components/Layout';
import Footer from '../../components/Footer';
import PokemonCard from '../../components/PokemonCard';
import MenuHeader from '../../components/MenuHeader';

import z from '../../zxc.json';

import s from './style.module.css';

import backgroundIMG1 from '../../assets/bg1.jpg';
import backgroundIMG3 from '../../assets/bg3.jpg';



const HomePage = ({onChange}) => {
    const handleClickButton = (page) => {
        console.log('#### : <HomePage/>');
        onChange && onChange(page);
    }
    return (
        <>
          <Header 
          title = "Pokemon Game" 
          descr = "The simple triple triad card game"
          onClickButton = {handleClickButton}
          />
          <Layout
          title = "How to fight"  
          urlBg = {backgroundIMG3} 
          >
            <p>
              In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.
              Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the
              player's own color of red or blue.
            </p>
            
          </Layout>
          <Layout 
          title = "Your cards" 
          colorBg = "#181d23"
          >
          </Layout>
          <Layout 
          title = "How to win" 
          urlBg = {backgroundIMG1}
          >
            <p>
              To win, a majority of the total ten cards played (including the one card that is not placed on the board) must be
              of the player's card color. To do this, the player must capture cards by placing a card adjacent to an opponent's
              card whereupon the 'ranks' of the sides where the two cards touch will be compared. If the rank of the opponent's
              card is higher than the player's card, the player's card will be captured and turned into the opponent's color.
              If the player's rank is higher, the opponent's card will be captured and changed into the player's color instead
            </p>
          </Layout>
        </>
    )
}

export default HomePage;
