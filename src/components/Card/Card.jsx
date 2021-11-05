import { Link } from 'react-router-dom';

import { 
  CardMovie,
  CardImage,
  CardTitle,
  CardSubTitle
 } from './styles';

const Card = props => (
  <>
    {props.movies.map(( item ) => {
      return(
        <Link key={item.id} to={{ pathname: `/movie/${item.original_title}`,
          state: { item: item.id }
        }}>
          <CardMovie>
            <CardImage src={item.image} alt={item.title}/>
            <CardTitle>{item.title}</CardTitle>
            <CardSubTitle>{item.original_title}</CardSubTitle>
          </CardMovie>
        </Link>
      )
    })}
  </>
)

export default Card
