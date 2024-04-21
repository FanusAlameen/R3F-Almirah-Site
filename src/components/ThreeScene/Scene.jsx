import { CameraControls } from "@react-three/drei"
import { useEffect, useRef } from "react"
import { Almirah } from "./Almirah"

const Scene = () => {

  const meshFitCamera = useRef()
  
  const controls = useRef()

  const fitCamera = () => {
    return new Promise((resolve) => {
      controls.current.fitToBox(meshFitCamera.current, true);
      resolve();
    });
  };
  

  const intro = async () => {
    controls.current.enabled = true;
  
    await controls.current.dolly(-5);
    controls.current.smoothTime = 0.5;
    await fitCamera();
  
    setTimeout(async () => {
      controls.current.enabled = false;    
    }, 1000);
  };

  useEffect(() => {
    intro();
  }, [])

  useEffect(() => {
    window.addEventListener("resize", fitCamera);
    return () => window.removeEventListener("resize", fitCamera);
  })

  return (
    <>
     <CameraControls 
      ref={controls} 
     />
     <directionalLight intensity={3} position={[4, 5, 12]} />
     <ambientLight intensity={3} />
     <Almirah />
     <mesh position={[0, 0, 0]} ref={meshFitCamera} visible={false}>
      <boxGeometry args={[3, 5, 3]} />
      <meshBasicMaterial color={"green"} transparent opacity={0.2} />
     </mesh>
    </>
  )
}

export default Scene