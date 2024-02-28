import './gallery.scss';
import pic from "./AllPic";
import GalleryItem from './GalleryItem';

export default function Gallery({setModal}) {
    return (
        <div className='gallery'>
            {pic.map((item) => (
                <GalleryItem key={item.id}
                             url={item.url}
                             alt={item.alt} 
                             descr={item.descr}
                             setModal={setModal}/>
            ))}
        </div>
    );
}