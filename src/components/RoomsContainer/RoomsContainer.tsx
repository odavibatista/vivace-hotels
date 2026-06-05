import coffeeIcon from '../../images/vectors/coffee.svg';
import creditCardIcon from '../../images/vectors/credit-card.svg';
import heartIcon from '../../images/vectors/heart.svg';
import seastarRoomImage from '../../images/shores-seastar.jpg';
import stargazerRoomImage from '../../images/hills-stargazer.jpg';
import presidentialRoomImage from '../../images/hills-presidential.jpg';
import dolphinRoomImage from '../../images/shores-dolphin.jpg';
import bungalowRoomImage from '../../images/shores-bungalow.jpg';
import hideoutRoomImage from '../../images/hills-hideout.jpg';
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
                            <img src={seastarRoomImage} alt="Shores Seastar Room" className={styles.roomImages} />
                            <p className={styles.roomName}>Shores Seastar</p>
                        </SplideSlide>
                        <SplideSlide style={{textAlign: "center"}}>
                            <img src={stargazerRoomImage} alt="Hills Stargazer Room" className={styles.roomImages} />
                            <p className={styles.roomName}>Hills Stargazer</p>
                        </SplideSlide>
                        <SplideSlide style={{textAlign: "center"}}>
                            <img src={presidentialRoomImage} alt="Hills Presidential Room" className={styles.roomImages} />
                            <p className={styles.roomName}>Hills Presidential</p>
                        </SplideSlide>
                        <SplideSlide style={{textAlign: "center"}}>
                            <img src={dolphinRoomImage} alt="Shores Dolphin Room" className={styles.roomImages} />
                            <p className={styles.roomName}>Shores Dolphin</p>
                        </SplideSlide>
                        <SplideSlide style={{textAlign: "center"}}>
                            <img src={bungalowRoomImage} alt="Shores Dolphin Room" className={styles.roomImages} />
                            <p className={styles.roomName}>Shores Bungalow</p>
                        </SplideSlide>
                        <SplideSlide style={{textAlign: "center"}}>
                            <img src={hideoutRoomImage} alt="Hills Hideout Room" className={styles.roomImages} />
                            <p className={styles.roomName}>Hills Hideout</p>
                        </SplideSlide>
                    </Splide>
                </div>
            </section>
            <div className={styles.features}>
                <div className={styles.descriptions}>
                    <div className={styles.iconContainers}>
                        <img src={coffeeIcon} alt="Coffee Icon" className={styles.icons} />
                    </div>
                    <p className={styles.information}>Café da manhã incluso</p>
                </div>
                <div className={styles.descriptions}>
                    <div className={styles.iconContainers}>
                        <img src={creditCardIcon} alt="Credit Card" className={styles.icons} />
                    </div>
                    <p className={styles.information}>Várias formas de pagamento</p>
                </div>
                <div className={styles.descriptions}>
                    <div className={styles.iconContainers}>
                        <img src={heartIcon} alt="Satisfaction" className={styles.icons} />
                    </div>
                    <p className={styles.information}>Hóspedes 100% satisfeitos!</p>
                </div>
            </div>
        </>
    )
}

export default RoomsContainer