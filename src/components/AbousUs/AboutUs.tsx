import Separator from '../Separator/Separator';
import styles from './styles.module.scss';

function AboutUs ()    {
    return(
        <>
            <section className={styles.section} id='aboutUs'>
                <div className={styles.aboutImage}>
                    <img src="./src/images/about-us.jpg" alt="Vivace Hills Landscape" className={styles.image} />
                </div>
                <div className={styles.aboutSection}>
                    <h1 className={styles.aboutTile}>Sobre nós</h1>
                    <Separator bg={'#064635'} />
                    <p className={styles.description}>Vivace é uma dupla de pousadas no estado de Santa Catarina. Nossa unidade Shores se localiza no litoral de Itajaí, e nossa unidade Hills se localiza no alto das serras catarinenses.</p>
                    <a href="#roomsContainer">
                        <button className={styles.button}>SAIBA MAIS</button>
                    </a>
                </div>
                <div className={styles.pageIndicator}></div>
            </section>
        </>
    )
}

export default AboutUs