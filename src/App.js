import './App.css';
import Header from "./components/head/header"
import LeftContent from './components/content/leftColumnContent'
import RightContent from './components/content/rightColumnContent'
import RightContentAlter from './components/content/rightColumnContentAlter'
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
    title: "Woooho",
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, maxime!",
    color: "purple",
    type: "img",
  },
  {
    title: "Lorem ipsum dolor sit.",
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, maxime!",
    color: "purple",
    type: "video",
    src: "https://mazwai.com/videvo_files/video/free/2019-12/small_watermarked/190915_B_01_Timelapse%20Danang_02_preview.webm"
  },
  {
    title: "LetitBeee",
    content: "Если сравнивать с Екатеринбургом, то там больше разнообразных форматов. Но это связано скорее не с тем, что там рестораторы лучше, а тут - хуже. Это связано с потребителем. Возможно, там он богаче и его в принципе больше, чем в Перми.  У нас много заведений, которые достойно презентуют себя. Гости из других регионов их хорошо оценивают. ",
    color: "green",
    type: "img",
  },
  {
    title: "Lorem ipsum dolor sit.",
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, maxime!",
    color: "purple",
    type: "video",
    src: "https://mazwai.com/videvo_files/video/free/2015-07/small_watermarked/Clouds_1_1_preview.webm"
  },
  {
    title: "Lorem ipsum dolor sit.",
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, maxime!",
    color: "purple",
    type: "video",
    src: "https://mazwai.com/videvo_files/video/free/2016-10/small_watermarked/160929_133_London_TowerBridgeTimeLapse_1080p_preview.webm"
  },
  {
    title: "Title 4",
    content: "У нас нет ресторанов, которые бы специализировались на речной рыбе. Пермь стоит на реке и что у нас очень много рыбы. Да, во многих заведениях присутствуют котлеты из щуки, но где ее поймали? ",
    color: "yellow",
    type: "img",
  },
  {
    title: "Lorem ipsum dolor sit.",
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, maxime!",
    color: "purple",
    type: "video",
    src: "https://mazwai.com/videvo_files/video/free/2014-06/small_watermarked/davide_quatela--the_london_feeling_preview.webm"
  },
  {
    type: "img",
    title: "IdontKnow",
    content: "Нижний Новгород интереснее Перми в сегменте премиальных ресторанов, их дизайн более красивый, чем в дорогих заведениях  Перми. Но в Нижнем и населения больше, чем у нас. В Перми есть рестораны, близкие к такому уровню, но их мало."
  },
  {
    title: "SomeText",
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, maxime!",
    color: "yellow",
    type: "video",
    src: "https://mazwai.com/videvo_files/video/free/2015-09/small_watermarked/up_in_the_clouds_preview.webm"
  }
  ,
  {
    title: "LetitBeee",
    content: "Если сравнивать с Екатеринбургом, то там больше разнообразных форматов. Но это связано скорее не с тем, что там рестораторы лучше, а тут - хуже. Это связано с потребителем. Возможно, там он богаче и его в принципе больше, чем в Перми.  У нас много заведений, которые достойно презентуют себя. Гости из других регионов их хорошо оценивают. ",
    color: "green",
    type: "img",
  },
  ,
  {
    title: "LetitBeee",
    content: "Если сравнивать с Екатеринбургом, то там больше разнообразных форматов. Но это связано скорее не с тем, что там рестораторы лучше, а тут - хуже. Это связано с потребителем. Возможно, там он богаче и его в принципе больше, чем в Перми.  У нас много заведений, которые достойно презентуют себя. Гости из других регионов их хорошо оценивают. ",
    color: "green",
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
        <div className='app-mainfraim'>
          <div className="left-column-content">
            <Header />
            <LeftContent />
          </div>
          <div className="right-column-content">
            {/* <RightContent data={mockData} /> */}
            <RightContentAlter data={mockData} />
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
