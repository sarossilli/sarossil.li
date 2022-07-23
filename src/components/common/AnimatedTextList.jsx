import { useSprings, animated, config } from "react-spring";

const AnimatedTextList = ({ children, delay }) => {
  const springs = useSprings(
    children.length,
    children.map((item, index) => ({
      config: config.molasses,
      to: {opacity: 1,},
      from: {opacity: 0,},
      delay: delay[index],
    }))
  );
  console.log(children);

  return springs.map((styles, index) => (
    <animated.div key={index} style={styles}>
      {children[index]}
    </animated.div>
  ));
};

export default AnimatedTextList;
