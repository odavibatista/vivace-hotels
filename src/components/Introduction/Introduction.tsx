
import styles from './styles.module.scss';

function Introduction ()    {
    return(
        <>
            <section className={styles.section}>
                <div className={styles.left}>
                    <h1 className={styles.title}>VIVACE</h1>
                    <p className={styles.subtitle}>
                        O Descanso Que Você Merece
                    </p>
                    <p className={styles.description}>
                        Tire suas férias com a agência de pousadas que atende a todos os gostos.
                    </p>
                    <a href="#reservationsContainer">
                        <button className={styles.button}>FAÇA SUA RESERVA</button>
                    </a>
                </div>
                <div className={styles.right}>
                    <div className={styles.nav}>
                        <div className={styles.links}>
                            <a href="#aboutUs" className={styles.anchors}>
                                <p>Sobre</p>
                            </a>
                            <a href="#roomsContainer" className={styles.anchors}>
                                <p>Quartos</p>
                            </a>
                            <a href="#footer" className={styles.anchors}>
                                <p>Contato</p>
                            </a>
                        </div>
                        <a href="#reservationsContainer">
                            <button className={styles.reservation}>Reservar</button>
                        </a>
                    </div>
                    <img src="./src/images/hotel-bar.jpg" alt="Coffee Lounge" className={styles.image} />
                </div>
            </section>
        </>
    )
}

export default Introduction