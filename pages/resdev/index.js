import styles from '../styles/pages/_home.module.scss';

export default function resdev() {
    return (
        <div className={styles.main}>
            <section className={styles.main__drawer}>
                drawer
            </section>
            <div className={styles.main__content}>
                <nav className={styles.main__content__navbar}>
                    <h3>ALLIANCE OF COMPUTER SCIENCE STUDENTS</h3>
                    <p>Renz Tegrado</p>
                </nav>
                <div className={styles.main__content__pages}>
                    <div className={styles.main__content__pages_body}>
                        <h4>Home</h4>
                        <span></span>
                        <div className='postbox'>
                            <div className='postbox__input'>
                                <div>A</div>
                                <input Write Something/>
                            </div>
                            <div className='postbox__buttons'>
                                <div>

                                </div>
                                <button>
                                    POST
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.main__content__pages__sidebar}>

                    </div>
                </div>
            </div>
        </div>
    )
}