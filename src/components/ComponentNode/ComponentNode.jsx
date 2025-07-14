import React from "react";
import { LayoutContext } from "../LayoutProvider";
import { Handle } from "@xyflow/react";

function ComponentNode({ data: component }) {
  const sectionRef = React.useRef();
  const { isLayoutReady, setLayoutIsReady, setNodeDimension } =
    React.useContext(LayoutContext);
  React.useLayoutEffect(() => {
    if (sectionRef.current) {
      const { width, height } = sectionRef.current.getBoundingClientRect();
      setNodeDimension(component.id, width, height);
      console.log(`isLayoutReady: ${isLayoutReady()}`);

      if (isLayoutReady()) {
        setLayoutIsReady(true);
      }
    }
  }, []);
  return (
    <section ref={sectionRef}>
      <h2>{component.name}</h2>
      <br />
      {component.description}
      <br />
      <h3>INTERNAL</h3>
      {component.internal.states.map((state) => (
        <p key={state}> {`- [${state}]`} </p>
      ))}
      {component.internal.functions.map((func) => (
        <p key={func}> {`- ${func}()`}</p>
      ))}
      <br />
      <h3>EXTERNAL</h3>
      {component.external.props.map((prop) => (
        <p key={prop}> {`+ ${prop}`}</p>
      ))}
      {component.external.context.map(({ values }) =>
        values.map((value) => <p key={value}>{`+C ${value}`}</p>),
      )}
      <Handle type="source" position="bottom" />
      <Handle type="target" position="top" />
    </section>
  );
}

export default ComponentNode;
