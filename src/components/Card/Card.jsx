import Container from '../Container/Container';
import style from './Card.module.css';
import Felicitation from './Felicitation/Felicitation';
import Image from './Image/Image';


const Card = () => (
  <Container>
    <div className={style.card}>
      <div className={style.wrapper}>
        <div className={style.image}>
          <Image />
          <Felicitation />
        </div>
      </div>
    </div>
  </Container>
);

export default Card;