import './arrows.scss';

export default function ArrowRight({ modal, setMoveRight }) {
    return (
        <img src="./pic/arrow_right.svg" alt="next" className="arrow__right" onClick={setMoveRight} style={{ display: modal.id === 3 ? 'none' : 'block' }}/>
    )
}