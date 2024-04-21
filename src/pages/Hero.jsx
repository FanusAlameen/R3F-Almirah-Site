import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import Scene from "../components/ThreeScene/Scene"
import { Bloom, EffectComposer, Noise, Vignette } from "@react-three/postprocessing"
import Header from "../components/nav/Header"

const Hero = () => {  
return (
  <>
      <div className="h-screen bg-[#111111] relative" id="home">
       <Canvas>
        <fog attach="fog" args={['#111111', 3, 10]} />
        <Suspense>
          <Scene />
        </Suspense>
        <EffectComposer>
          <Bloom mipmapBlur intensity={3} luminanceSmoothing={0.5} luminanceThreshold={0.6}/>
          <Noise opacity={0.01} />
          <Vignette eskil={false} offset={0.1} darkness={1.1} />
        </EffectComposer>
       </Canvas>
      </div>
      <Header />
  </>
  )
}

export default Hero;