import CatRecordSpin from '../images/gifs/cat-record-spin.gif';
import WindowsDudeRecords from '../images/gifs/windows-dude-records.gif';
import FreshDancing from '../images/gifs/fresh-dancing.gif';

const GifStack = () => {
    return (
        <>
           <img src={CatRecordSpin} style={{
            position: "fixed",
            top: 20,
            left: 20,
          }} />
          <img src={WindowsDudeRecords} style={{
            position: "fixed",
            top: "50%",
            right: 0,
            transform: "translateY(-50%)"
          }} />
          <img src={FreshDancing} style={{
            position: "fixed",
            bottom: 20,
            left: -20,
          }} />        
        </>
    );
}

export default GifStack;