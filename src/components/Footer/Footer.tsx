import Separator from '../Separator/Separator';
import styles from './styles.module.scss';

function Footer ()    {
    return(
        <>
            <footer className={styles.footer} id='footer'>
                <section className={styles.section}>
                    <div className={styles.addresses}>
                        <h1 className={styles.addressesTitle}>VIVACE SHORES</h1>
                        <p className={styles.addressesTexts}>Lg. Presidente García Moreno, nº 42</p>
                        <p className={styles.addressesTexts}>(47) 4012-5519</p>
                        <p className={styles.addressesTexts}>contato@vivaceshores.com</p>
                        <h1 className={styles.addressesTitle}>VIVACE HILLS</h1>
                        <p className={styles.addressesTexts}>Estrada BR 251, km 140</p>
                        <p className={styles.addressesTexts}>(47) 4013-9104</p>
                        <p className={styles.addressesTexts}>contato@vivacehills.com</p>
                    </div>
                    <div className={styles.explore}>
                        <h1 className={styles.exploreTitle}>Explore</h1>
                        <div style={{marginBottom: "-30px"}}  className={styles.separatorDiv}>
                            <Separator bg={'#064635'}/>
                        </div>
                        <a href="#aboutUs" style={{textDecoration: "none"}}>
                            <p className={styles.exploreTexts}>Sobre nós</p>
                        </a>
                        <a href="#roomsContainer" style={{textDecoration: "none"}}>
                            <p className={styles.exploreTexts}>Nossos Quartos</p>
                        </a>
                        <a href="#reservationsContainer" style={{textDecoration: "none"}}>
                            <p className={styles.exploreTexts}>Faça sua reserva</p>
                        </a>
                    </div>
                    <div className={styles.newsletter}>
                        <h1 className={styles.newsletterTitle}>Não perca nossas novidades</h1>
                        <div style={{marginBottom: "20px"}}>
                            <div className={styles.separatorDiv}>
                                <Separator bg={'#064635'}/>
                            </div> 
                        </div>
                        <div className={styles.signInSession}>
                            <input type="text" placeholder='Digite seu email...' className={styles.sign} />
                            <button className={styles.button}>ENVIAR</button>
                        </div>
                    </div>
                </section>
                <div className={styles.seal}>
                    <p>© Todos os direitos reservados. Pousadas Vivace, {new Date().getFullYear()}</p>
                </div>
            </footer>
        </>
    )
}

export default Footer