import React from 'react';
import searchIcon from '../assets/icons/search.svg';
import '../styles/icon.styles.css';

function OnClick(e, props) {
  e.preventDefault();

  if (props.clickable)
    props.clickable();
  else {
    console.log('[NO CLICKABLE EVENT]'); 
    return null;
  }
}

export default function Icon(props) {

  let iconPath = '';

  if (props.type === 'search')
    iconPath = searchIcon;

  let Classes = [];

  if (props.clickable)
    Classes.push('clickable');
  
  return (
    <img 
      className={ Classes.join(' ') }
      onClick={(e) => OnClick(e, props)}
      src={iconPath}
      width={props.size ?? 50}
      height={props.size ?? 50}
      alt={ `${props.type} icon` }
    />
  );
}
