import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import TextChainIntro from "../pages/animation/textChain";

const App = () => {
    return(<
    Parallax pages={2} style={{ top: '0', left: '0' }}>
    <ParallaxLayer
      offset={0}
      factor={1}
      speed={2.5}
      style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center' }}>

      <TextChainIntro></TextChainIntro>

    </ParallaxLayer>
  
    <ParallaxLayer offset={1} factor={1} speed={0.05} style={{ backgroundColor: '#ff6d6d' }} />
    
    <ParallaxLayer
      offset={1}
      factor={1}
      speed={0.5}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
      }}>
      <p>Work in progrss</p>
    </ParallaxLayer>
  </Parallax>);
}

export default App;
