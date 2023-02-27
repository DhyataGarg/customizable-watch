import straps from './data/straps'
import faces from './data/faces'
import cases from './data/cases'
import './Slick.css'
import styles from './cart.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faRotateRight } from '@fortawesome/free-solid-svg-icons'

const Cart = ({ dial, face, strap, setCurrentSlide, isStrapSelected }) => {
    return (
        <>
            <div>
                <p>
                    <b>YOUR WATCH CUSTOMIZATION</b>
                </p>

                <h2>ADD YOUR SELECTION TO THE CART</h2>

                <p style={{ color: 'grey' }}>
                    Your customization might be composed of a watch reference and an
                    additional strap
                </p>
            </div>

            <div className={styles.watchContainer}>
                <div className={styles.watchDisplay}>
                    <div
                        style={{ height: '100%' }}
                        className="c-Watch c-Watch--42 u-relative u-flex u-items-center"
                    >
                        <div
                            className="o-Img c-Watch_Item -straps -fakes js-fake-s"
                            aria-hidden="true"
                        >
                            <img
                                className="js-img -loaded"
                                src={straps[dial]}
                                alt=""
                                decoding="async"
                                loading="lazy"
                                draggable="false"
                                data-load="loaded"
                            />
                            <span className="c-Watch_WFBg u-absolute"></span>
                            <div className="o-Img c-Watch_Item -cases">
                                <img
                                    className="js-img -loaded"
                                    src={cases[dial]}
                                    alt="calibre e4 42 mm"
                                    loading="lazy"
                                    decoding="async"
                                    draggable="false"
                                    data-load="loaded"
                                />
                                <div
                                    className="o-Img c-Watch_Item -watchfaces -s42 -fakes js-fake-wf"
                                    aria-hidden="true"
                                >
                                    <img
                                        className="js-img -loaded"
                                        src={faces[dial]}
                                        alt=""
                                        loading="lazy"
                                        decoding="async"
                                        draggable="false"
                                        data-load="loaded"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <p>Watch Name</p>
                    <p>Watch case</p>

                    <button>ADD TO CART</button>
                </div>

                {isStrapSelected ? <div className={styles.watchDisplay}>
                    <div
                        style={{ height: '100%' }}
                        className="c-Watch c-Watch--42 u-relative u-flex u-items-center"
                    >
                        <div
                            className="o-Img c-Watch_Item -straps -fakes js-fake-s"
                            aria-hidden="true"
                        >
                            <img
                                className="js-img -loaded"
                                src={straps[strap]}
                                alt=""
                                decoding="async"
                                loading="lazy"
                                draggable="false"
                                data-load="loaded"
                            />
                        </div>
                    </div>

                    <p>Strap Name</p>
                    <p>Buckle Name</p>


                </div> : <div
                    className={styles.watchDisplay}
                    onClick={() => {
                        setCurrentSlide(2)
                    }}
                >
                    <div className={styles.circle}>
                        <FontAwesomeIcon icon={faPlus} />
                    </div>

                    <span class="u-block h6 u-uppercase">
                        Add an
                        <br />
                        additionnal strap
                    </span>
                </div>}
            </div>

            <div
                className={styles.reCreate}
                onClick={() => {
                    setCurrentSlide(1)
                }}
            >
                <FontAwesomeIcon icon={faRotateRight} />
                <span> CONFIGURE ANOTHER WATCH</span>
            </div>
        </>
    )
}

export default Cart
