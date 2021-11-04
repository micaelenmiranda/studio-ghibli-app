import { CardMovie } from './styles';

const Card = props => (
  <>
    {props.movies.map(( item ) => {
      return(
        <CardMovie key={item.id}>
          <img src={item.image} alt={item.title}/>
          <h2>{item.title}</h2>
          <h3>{item.original_title}</h3>
      </CardMovie>
      )
    })}
  </>
)

export default Card
