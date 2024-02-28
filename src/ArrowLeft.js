import './arrows.scss';

export default function ArrowLeft({modal, setMoveLeft}) {
    return (
        <img src="./pic/arrow_left.svg" alt="prev" className="arrow__left" onClick={setMoveLeft} style={{ display: modal.id === 1 ? 'none' : 'block' }}/>
    )
}