import s from './App.module.css'
import { Menu } from './components/menu'
import bannerImg from '/bannerImg.webp'

function App() {

  return (
    <>
      <Menu/>
        <div className={s.wrapHome}>

            <div className={s.section1}>
                <div className={s.wrapImage}>
                  <img className={s.imgSection1} src={bannerImg} alt="banner" />
                </div>
                <div className={s.wrapTexts}>
                    <h1 className={s.tituloSection1}>Título da Página</h1>
                    <p className={s.textSection1}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eligendi vero, repellat modi possimus quam voluptas reprehenderit unde ut autem veritatis quae beatae aliquam, error maxime vel molestiae harum culpa?</p>
                    <button className={s.btnSection1}>CLIQUE</button>
                </div>
            </div>

            <div className={s.section2}>
              <iframe className={s.vid} src="https://youtu.be/9WJ4T4kQS7c?si=rmt7dfccYvO9mva7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>

        </div>
    
    </>
  )
}

export default App

