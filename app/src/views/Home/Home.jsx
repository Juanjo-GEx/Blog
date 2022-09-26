import { Fragment } from 'react';
import { useQuery } from '@tanstack/react-query'
import { getData } from '../../services/fetchData';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header';
import CardList from '../../components/Cards/CardList';

const Home = () => {

  const { data: texts, isSuccess} = useQuery(["texts"], async () => await getData('texts')); 

  return (
    <Fragment>
      <Header />
      <main className="Home">
        { isSuccess && 
            (
              texts.find(text => text.title === 'Home')
                  .text.blocks.filter(block => block.type === 'header').map(itemText => 
                      <h1 className="Home-title" key={itemText.id}>{itemText.data.text}</h1>
              )
            )
        }
        { isSuccess && 
            (
              texts.find(text => text.title === 'Home')
                  .text.blocks.filter(block => block.type === 'paragraph').map(itemText => 
                      <p className="Home-subtitle" key={itemText.id}>{itemText.data.text}</p>
              )
            )
        }
        <CardList />        
      </main>
      <Footer />
    </Fragment>
  )
}

export default Home