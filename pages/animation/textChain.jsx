import AnimatedTextChain from "../../src/components/common/AnimatedTextList";
import Image from "next/image";

const TextChainIntro = () => {
  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AnimatedTextChain delay={[200, 2500, 4200,4800]}>
        <div>
          <h1> {"Hi, I'm Sam Rossilli"}</h1>
        </div>
        <h3>Scroll down to learn more about me </h3>
        <div style={{ display:"inline", position: "absolute", top: "7.1%", left: "7%" }}>
          <p >
            Or use the links here to skip to a section{" "}
          </p>
        </div>
        <div style={{ display:"inline", position: "absolute", top: "5%", left: "5%" }}>
          <Image 
            alt=""
            width={50}
            height={50}
            src="/../public/img/gif/arrow.gif"
          />
        </div>
      </AnimatedTextChain>
    </div>
  );
};

export default TextChainIntro;
