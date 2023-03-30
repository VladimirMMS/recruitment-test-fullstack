import './../App.css'
import { DogCard } from './DogCard';
import { useJoinData } from '../hooks/useJoinData';

function DogList() {
  const { dataJoined } = useJoinData()
  if(!dataJoined.length) {
    return <h1>Loading...</h1>
  }
  return (
    <>
    <h1>Dog List</h1>
    <div className='dogList'>
      {dataJoined.map((dog) => (
        <DogCard key={dog.name} name={dog.name} url={dog.imageUrl} breeds={dog.breeds}/>
      ))}
    </div>
    </>
  );
}

export default DogList;