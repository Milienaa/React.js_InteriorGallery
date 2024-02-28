import './galleryItem.scss';

export default function GalleryItem({ url, alt, descr, setModal }) {
    let currentPic = {
        url: url,
        alt: alt,
        descr: descr
    }

    return (
        <img className="gallery__item" src={url} alt={alt} onClick={() => {setModal(currentPic)}} />
    );
}