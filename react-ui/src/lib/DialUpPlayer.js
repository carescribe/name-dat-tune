import { useEffect, useRef } from "react"
import Modem from "../images/gifs/dial-up-modem.gif"
import DialUpSound from '../audio/dialup.mp3'
import { useNavigate } from "react-router-dom";


const DialUpPlayer = ({navTo}) => {
   const audioRef = useRef(new Audio(DialUpSound));
   const navigate = useNavigate();

   useEffect(() => {

      if(audioRef.current) {
         audioRef.current.addEventListener('ended', () => {
            navigate(navTo);
         });
         
         audioRef.current.play();
      }

      
      return () => {
         if(audioRef.current) {
            audioRef.current.removeEventListener('ended', () => {
               //
            });  
         }
      }
   },[audioRef.current]);

   return (
      <div style={{
         height: "100vh",
         width: "100vw",
         position: "fixed",
         display: "flex",
         flex: 1,
         justifyContent: "center",
         alignItems: "center",
      }}>
         <div>
            <img src={Modem} onClick={() => navigate(navTo)}/>
         </div>
      </div>
   )
}

export default DialUpPlayer;