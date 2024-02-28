import pic from './AllPic';
import './app.scss';
import Gallery from "./Gallery";
import ModalWindow from './ModalWindow';
import {useState} from 'react';

function App() {
  
  const [modal, setModal] = useState(null);

  return (
    <>
      <Gallery setModal = {setModal} />
      <ModalWindow modal = {modal} setModal = {setModal} pic = {pic}/>
    </>
  );
}

export default App