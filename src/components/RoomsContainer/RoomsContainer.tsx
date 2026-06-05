import Separator from '../Separator/Separator';
import styles from './styles.module.scss';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function RoomsContainer ()    {
    return(
        <>
            <section className={styles.section} id='roomsContainer'>
                <div className={styles.rooms}>
                    <h1 className={styles.title}>Nossos quartos</h1>
                    <div className={styles.separator}>
                        <Separator bg={"#F4EEA9"} />
                    </div>
                    <p className={styles.description}>Nossa especialidade é lhe proporcionar a melhor vista natural, em conjunto com o conforto e a comodidade que nossos quartos tem como ninguém.</p>
                </div>
                <div className={styles.splideContainer}>
                    <Splide aria-label="My Favorite Images" 
                    options={{
                        type: "loop",
                        perPage: 2,
                        height: "320px",
                        gap: "20px",
                        breakpoints:    {
                            1200:   {
                                height:"280px",
                            },
                            956:    {
                                height: "370px",
                                perPage: 1,
                            },
                            657:    {
                                height: "300px"
                            }
                        }
                    }}
                    >
                        <SplideSlide style={{textAlign: "center"}}>
                            <img src="../src/images/shores-seastar.jpg" alt="Shores Seastar Room" className={styles.roomImages} />
                            <p className={styles.roomName}>Shores Seastar</p>
                        </SplideSlide>
                        <SplideSlide style={{textAlign: "center"}}>
                            <img src="../src/images/hills-stargazer.jpg" alt="Hills Stargazer Room" className={styles.roomImages} />
                            <p className={styles.roomName}>Hills Stargazer</p>
                        </SplideSlide>
                        <SplideSlide style={{textAlign: "center"}}>
                            <img src="../src/images/hills-presidential.jpg" alt="Hills Presidential Room" className={styles.roomImages} />
                            <p className={styles.roomName}>Hills Presidential</p>
                        </SplideSlide>
                        <SplideSlide style={{textAlign: "center"}}>
                            <img src="../src/images/shores-dolphin.jpg" alt="Shores Dolphin Room" className={styles.roomImages} />
                            <p className={styles.roomName}>Shores Dolphin</p>
                        </SplideSlide>
                        <SplideSlide style={{textAlign: "center"}}>
                            <img src="../src/images/shores-bungalow.jpg" alt="Shores Dolphin Room" className={styles.roomImages} />
                            <p className={styles.roomName}>Shores Bungalow</p>
                        </SplideSlide>
                        <SplideSlide style={{textAlign: "center"}}>
                            <img src="../src/images/hills-hideout.jpg" alt="Hills Hideout Room" className={styles.roomImages} />
                            <p className={styles.roomName}>Hills Hideout</p>
                        </SplideSlide>
                    </Splide>
                </div>
            </section>
            <div className={styles.features}>
                <div className={styles.descriptions}>
                    <div className={styles.iconContainers}>
                        <img src="../src/images/vectors/coffee.svg" alt="Coffee Icon" className={styles.icons} />
                    </div>
                    <p className={styles.information}>Café da manhã incluso</p>
                </div>
                <div className={styles.descriptions}>
                    <div className={styles.iconContainers}>
                        <img src="../src/images/vectors/credit-card.svg" alt="Credit Card" className={styles.icons} />
                    </div>
                    <p className={styles.information}>Várias formas de pagamento</p>
                </div>
                <div className={styles.descriptions}>
                    <div className={styles.iconContainers}>
                        <img src="../src/images/vectors/heart.svg" alt="Satisfaction" className={styles.icons} />
                    </div>
                    <p className={styles.information}>Hóspedes 100% satisfeitos!</p>
                </div>
            </div>
        </>
    )
}

export default RoomsContainer