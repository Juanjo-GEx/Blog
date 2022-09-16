import { useEffect } from 'react';
import { getData, getFile } from '../services/fetchData';

const Home = () => {

  useEffect(() => {

    getData('posts')
      .then((response) => console.log(response))
      .catch((error) => console.log(error.message));
    
    getFile('f8e248aa-ead4-4119-87a9-65c6fdca0925', ['id'])
      .then((response) => console.log(response))
      .catch((error) => console.log(error.message)); 

  }, []);

  return (
    <div>Home</div>
  )
}

export default Home