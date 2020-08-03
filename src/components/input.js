import React from 'react';
import Icon from './icon';
import '../styles/input.styles.css';

function UpdateValue(e, props) { 
  if (props.onChange)
    props.onChange(e.target.value);
  else {
    console.log('[NO ON CHANGE EVENT]')
    return null;
  }
}

function onKeyDownEvent(e, props) {
  if (props.onEnter) { 
    if (e.keycode === 13 || e.keyCode === 13)
      props.onEnter();
    else
      console.log('[KEYPRESS] Is not enter...');
  }
  return null;
}

export default function Input(props) {

  let ClassNames = ['form-input'];
  if (props.outlined)
    ClassNames.push('form-input--outlined')
  if (props.invisible)
    ClassNames.push('form-input--invisible')
  if (props.largeText)
    ClassNames.push('form-input--large-text')
  if (props.icon)
    ClassNames.push('form-input--icon')

  return ( 
    <div className='input-container'>
      <input
          placeholder={ props.placeholder ?? null }    
          className={ ClassNames.join(' ') }
          value={ props.value ?? '' }
          onChange={ (e) => UpdateValue(e, props) }
          onKeyDown={ (e) => onKeyDownEvent(e, props) }
          type={ props.type ?? 'text' }
        /> 
      {
        props.icon ? 
        <Icon 
          type={ props.icon } 
          size={ 25 }
          clickable={ props.onClickIcon ?? null }
        /> : 
        null
      }
    </div>
  );
}
