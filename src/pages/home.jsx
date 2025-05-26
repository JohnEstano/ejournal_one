
import '../App.css'
import Lanyard from '../components/Lanyard'
import { DockNav } from "@/components/dock-nav"
import FadeContent from '../components/FadeContent'
import { ThemeProvider } from "@/components/theme-provider"


function Home() {


  return (
    <>

      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">

        <div>

          <Lanyard position={[0, 0, 20]} gravity={[0, -30, 0]} fov={[10]} />





          <div className="flex items-center justify-center h-screen w-full">


            <FadeContent blur={true} duration={500} easing="ease-out" initialOpacity={0}>
              <p className="text-center text-lg">
                Hello, Welcome to my <span className="text-emerald-600">E-journal.</span>
              </p>
              <p className='text-zinc-500 italic'>Seminars, Workshops, & Tours</p>
            </FadeContent>
          </div>



        </div>
        <DockNav />

      </ThemeProvider>
    </>
  )
}

export default Home;
