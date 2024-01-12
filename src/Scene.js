import { animated, useSpring } from "@react-spring/three";
import { useState } from "react";

const Scene = () => {
  const [spring, api] = useSpring(() => ({
    from: { x: 0 },
  }));
  const clickHandler = () => {
    api.start({
      to: { x: spring.x.get() === 1 ? 0 : 1 },
    });
  };
  return (
    <>
      <animated.mesh onClick={clickHandler} position-x={spring.x}>
        <boxGeometry />
        <animated.meshBasicMaterial color={"orange"} />
      </animated.mesh>
    </>
  );
};

export default Scene;
