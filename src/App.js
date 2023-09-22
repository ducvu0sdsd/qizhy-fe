import { BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import './App.css';
import Header from './Header';
import WallPapers from './WallPaperPage';
import Footer from './Footer';
import WallPaperDetail from './WallPaperDetail';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from './Loading';
import HomePage from './HomePage'


function App() {

  const shuffleArray = (array) => {
    const shuffledArray = array
    let currentIndex = shuffledArray.length;
  
    while (currentIndex > 0) {
      const randomIndex = Math.floor(Math.random() * currentIndex);
  
      currentIndex--;
  
      const temporaryValue = shuffledArray[currentIndex];
      shuffledArray[currentIndex] = shuffledArray[randomIndex];
      shuffledArray[randomIndex] = temporaryValue;
    }
  
    return shuffledArray;
}

  const changeDate = (isoDateString) => {
    const dateObject = new Date(isoDateString);
    const day = dateObject.getDate();
    const monthIndex = dateObject.getMonth();
    const year = dateObject.getFullYear();
    const monthNames = [
      "January", "February", "March", "April", "May", "June", "July",
      "August", "September", "October", "November", "December"
    ];
    const formattedDate = `${monthNames[monthIndex]} ${day}, ${year}`;
    return formattedDate
  }
  const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  };

  const [walls, setWalls] = useState()
  const [wallpapers, setWallPapers] = useState()
  useEffect(() => {
    axios.get('https://qizhy-backend.vercel.app/get-wallpapers')
      .then(res => {
        res.data.wallpapers.forEach(item => {
          let date = changeDate(item.createdAt + '')
          item.createdAt = date
        })
        let arr3 = shuffleArray(res.data.wallpapers)
        setWallPapers(arr3)
        let arr = arr3
        let length1 = Math.floor(arr.length / 20)
        let length2 = arr.length % 20
        let arrTotal = []
        for (let i = 1; i <= length1; i++) {
          let arr1 = []
          arr.forEach((item, index) => {
            if (index < 20 * 1) {
              arr1.push(item)
            }
          })
          arrTotal.push(arr1)
        }
        let arr1 = []
        for (let i = 0; i < length2; i++) {
          arr1.push(arr[length1 * 20 + i])
        }
        arrTotal.push(arr1)
        setWalls(arrTotal)
      })
  }, [])


  return (
    <div className="App" style={{paddingTop : '50px'}}>
      <Router>
        <ScrollToTop />
        <Header />
        {wallpapers != undefined ? 
          <Routes>
          <Route path='/' element={<HomePage/>} />
          {walls.map((item, pageIndex) => (
            item.map((wall, wallIndex) => (
              <Route
                key={wallIndex}
                path={`/wallpaper/${wall.title.toLowerCase().split(' ').join('-')}`}
                element={<WallPaperDetail wall={wall} walls = {wallpapers} />}
              />
            ))
          ))}
          {walls.map((item, index) => {
            return <Route key={index} path={'/wallpapers/page-'+(index+1)} element={<WallPapers walls={item} index={index + 1} max={walls.length}/>}/>
          })}
          </Routes> : <Loading />
        }
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
