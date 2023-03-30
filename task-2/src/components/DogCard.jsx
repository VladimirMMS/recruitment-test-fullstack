import './../App.css';
import { useState } from 'react';

export function DogCard(props) {
    const [isHovering, setIsHovering] = useState(false);
    const handleMouseOver = () => {
        setIsHovering(true);
      };
      const handleMouseOut = () => {
        setIsHovering(false);
      };

    return (
        <div className='cardContainer'>
            <div className='imgC'
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
            >
                {isHovering ?
                <ul className='list'>
                    {props.breeds && props.breeds.slice(0, 3).map((breed, index) => (
                        <li key={breed}>{breed}</li>
                    ))}
                </ul> 
                
                : <img src={props.url} alt={props.name} className='img' loading="lazy"/>}

            </div>
            <p className='cardP'>{props.name}</p>
        </div>
    )
    
}