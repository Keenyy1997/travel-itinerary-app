import React from 'react';

import Input from '../components/input';
import Card from '../components/card';

export default class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      value: '',
    }

    this.updateValue = this.updateValue.bind(this);
  }

  updateValue(value) {
    this.setState({
      value,
    })

    console.log('[NEW VALUE RECEIVED]', value);
    console.log('[STATE]', this.state);
  }

  render() { 
    return (
      <>
        <Card
          width={ 20 } height={ 40 }
          minWidth={ 400 }
          textAlign={ 'center '}
          position={ 'fixed' }
          top={ '2.5%' }
          left={ '2.5%' }>

          <Input
            invisible={ true }
            placeholder={ 'Search a destination...' }
            largeText={ true }
            value={ this.state.value }
            onChange={ this.updateValue }
            icon={ 'search' }
            onClickIcon={ () => alert('holi we') } 
            onEnter={ () => alert('holi we') }
          />
        </Card>
      </>
    );

  }

}
