import './modalWindow.scss';
import Btn from './Btn';
import ArrowLeft from './ArrowLeft';
import ArrowRight from './ArrowRight';

export default function ModalWindow({modal, setModal, pic}) {
    if (!modal) {
            return null;
    } 

    const findIndex = (id) => pic.findIndex((item) => item.id === id);
    const currentIndex = findIndex(modal.id);

    const setMoveLeft = () => {
        const newIndex = (currentIndex - 1 + pic.length) % pic.length;
        setModal(pic[newIndex]);
    };

    const setMoveRight = () => {
        const newIndex = (currentIndex + 1) % pic.length;
        setModal(pic[newIndex]);
    };
    return (
        <div className="overlay">
            <div className="modal">
                <img src={modal.url} alt={modal.alt} />
                <div className="modal__content">
                    <h2>{modal.alt}</h2>
                    <div className='wrap'>
                        <div className='modal__content__line'></div><div className='modal__content__square'></div>
                    </div>
                    
                    <p className='modal__content__text'>{modal.descr}</p>
                    <Btn setModal={setModal} />
                    <ArrowLeft modal={modal} setMoveLeft={setMoveLeft}/>
                    <ArrowRight modal={modal} setMoveRight={setMoveRight}/>
                </div>
            </div>
        </div>
    );
}