import { 
  Desc,
  DescWrapper,
  DescImage,
  DescText,
  DescTitle,
  DescDetail,
  DescSinopse
} from './style';

const Description = props => (
  <Desc>
    <DescWrapper>
      <DescImage>
        <img src={props.activeMovies.movie_banner}
          alt={props.activeMovies.title}
        />
      </DescImage>

      <DescText>
        <DescTitle>{props.activeMovies.title} ({props.activeMovies.original_title})</DescTitle>
        
        <DescDetail>
          Director: {props.activeMovies.director}
        </DescDetail>

        <DescDetail>
          Release Date: {props.activeMovies.release_date}
        </DescDetail>

        <DescSinopse>{props.activeMovies.description}</DescSinopse>
      </DescText>
    </DescWrapper>
  </Desc>
)

export default Description
