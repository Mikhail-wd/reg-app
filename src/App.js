import './App.css'
import Header from "./components/head/header"
import LeftContent from './components/content/leftColumnContent'
import MobileMainFrame from './components/mobileSwiper/mobileSwiper'
import RightContentAlter from './components/content/rightColumnContentAlter'
import SideModal from './components/mobileModal/sideModal';
import { useReducer, createContext, useRef, useState } from "react"


const AppData = {
  title: "Great meetings are just the beginning",
  content: "We help your teams build great meeting habits through collaborative agendas and easy-to-schedule meetings"
}

export const AppContext = createContext({})

function reducer(state, action) {
  switch (action.type) {
    case "transfer_data":
      return { ...action.payload }
    default:
      console.log("Reducer error")
  }
}
const mockData = [
  {
    title: "Jane Smith",
    content: "Scientist",
    color: "purple",
    type: "img",
  },
  {
    title: "Harry Pumper",
    content: "Musician",
    color: "purple",
    type: "video",
    src: "https://media.istockphoto.com/id/1338072182/ru/%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE/%D0%B4%D0%B5%D0%BB%D0%B8%D0%BC%D1%81%D1%8F-%D0%BE%D1%81%D0%BE%D0%B1%D1%8B%D0%BC%D0%B8-%D0%BC%D0%BE%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D0%BC%D0%B8-%D0%B8%D0%B7-%D0%BD%D0%B0%D1%88%D0%B5%D0%B9-%D0%BF%D0%BE%D1%85%D0%BE%D0%B4%D0%BD%D0%BE%D0%B9-%D0%B4%D0%B5%D1%8F%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D0%B8.mp4?s=mp4-640x640-is&k=20&c=pN0iOz11dN-v1DAI6mfssOnX3r88b6WkvjVTdXLDb4Y="
  },
  {
    title: "Jeniffer Mc'Facepuncher",
    content: "Tiger trainer",
    color: "green",
    type: "img",
  },
  {
    title: "Leo Spencer",
    content: "Slinger",
    color: "purple",
    type: "video",
    src: "https://mazwai.com/videvo_files/video/free/2015-07/small_watermarked/Clouds_1_1_preview.webm"
  },
  {
    title: "Victoria Huge",
    content: "Beekeeper",
    color: "purple",
    type: "video",
    src: "https://mazwai.com/videvo_files/video/free/2016-10/small_watermarked/160929_133_London_TowerBridgeTimeLapse_1080p_preview.webm"
  },
  {
    title: "Bob Marley",
    content: "Lawyer",
    color: "yellow",
    type: "img",
  }
]
function App() {

  function shuffle(array) {
    let newArray = []
    newArray.push(array.sort(() => Math.random() - 0.5))
    return newArray
  }
  const [appState, dispatch] = useReducer(reducer, AppData)
  return (
    <AppContext.Provider value={{ data: appState, dispatchData: dispatch }}>
      <div className="App">
        <MobileMainFrame data={mockData}/>
        <div className='app-mainfraim'>
          <div className="left-column-content">
            <Header />
            <LeftContent />
          </div>
          <SideModal data={mockData} />
          <div className="right-column-content">
            <RightContentAlter data={mockData} />
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
