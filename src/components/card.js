import React from 'react';
import '../styles/card.styles.css';

export default function Card (props) {

  let Styles = {
    width: props.width ? `${props.width}%` : null,
    minWidth: props.minWidth ?? null,
    height: props.height ?? null,
    margin: props.margin ?? null,
    marginTop: props.marginTop ?? null,
    padding: props.padding ?? null,
    position: props.position ?? 'relative',
    top: props.top ?? null,
    left: props.left ?? null,
    background: props.background ?? '#fff',
    textAlign: props.textAlign ?? null,
    zIndex: props.position === 'fixed' ? 1000 : 0,
  };

  return (
    <div className="card" style={ Styles }>
      { props.children }
    </div>
  );
}



