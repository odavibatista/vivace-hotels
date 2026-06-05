import hotelLoungeImage from '../../images/hotel-lounge.jpg';
import Separator from '../Separator/Separator';
import styles from './styles.module.scss';

function ReservationsContainer ()    {
    return(
        <>
            <section className={styles.section} id='reservationsContainer'>
                <div className={styles.formDiv}>
                    <h1 className={styles.titleForm}>Entre em contato e faça sua reserva</h1>
                        <Separator bg={'#064635'} />
                        <form className={styles.form}>
                        <label className={styles.labels} htmlFor="name">Nome</label>
                        <input className={styles.inputs} type="text" id='name' name='name'/>
                        <label className={styles.labels} htmlFor="email">Email</label>
                        <input className={styles.inputs} type="text" id='email' name='email'/>
                        <label className={styles.labels} htmlFor="message">Mensagem</label>
                        <input type="text" id='message' name='message' className={styles.message} />
                        <button className={styles.reservation}>Enviar</button>
                        </form>
                </div>
                <div className={styles.imageDiv}>
                    <img src={hotelLoungeImage} alt="Hotel Lounge" className={styles.image} />
                </div>
            </section>
        </>
    )
}

export default ReservationsContainer