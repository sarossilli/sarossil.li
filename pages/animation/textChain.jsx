import AnimatedTextChain from "../../src/components/common/AnimatedTextList";

const TextChainIntro = () => {
    return(
    <div>
        <AnimatedTextChain delay={[1000,2000,4000,5000]}>
            <h1>Hi, Im Sam</h1>
            <h1>Scroll to learn more about me </h1>
        </AnimatedTextChain>
    </div>
    );
}

export default TextChainIntro;