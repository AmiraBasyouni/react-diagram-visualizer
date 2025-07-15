import React from "react";
import { LayoutContext } from "../LayoutProvider";
import { Handle } from "@xyflow/react";
import styles from "./ComponentNode.module.css";

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
    <section ref={sectionRef} className={styles.wrapper}>
      <h2 className={styles.title}>{component.name}</h2>
      {component.description && (
        <p className={styles.content}>{component.description}</p>
      )}

      <h3 className={styles.subtitle}>INTERNAL</h3>
      {component.internal.states.map((state) => (
        <p key={state} className={styles.content}>
          {" "}
          {`- [${state}]`}{" "}
        </p>
      ))}
      {component.internal.functions.map((func) => (
        <p key={func} className={styles.content}>
          {" "}
          {`- ${func}()`}
        </p>
      ))}
      <h3 className={styles.subtitle}>EXTERNAL</h3>
      {component.external.props.map((prop) => (
        <p key={prop} className={styles.content}>
          {" "}
          {`+ ${prop}`}
        </p>
      ))}
      {component.external.context.map(({ values }) =>
        values.map((value) => (
          <p key={value} className={styles.content}>{`+C ${value}`}</p>
        )),
      )}
      <Handle type="source" position="bottom" />
      <Handle type="target" position="top" />
    </section>
  );
}

export default ComponentNode;
