import CarItem from "./car-item/CarItem";
import { cars } from "./cars.data";
import CreateCarFrom from "./create-car-form/CreateCarFrom";
import styles from './home.module.css'

const Home = () => {
  return (
    <div>
      <h1>Cars catalog</h1>
      <CreateCarFrom/>
      <div className={styles.cardContainer}>
        {cars.length ? (
          cars.map((car) => <CarItem key={car.id} car={car} />)
        ) : (
          <p>There are no cars</p>
        )}
      </div>
    </div>
  );
};

export default Home;
