import { useState } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'

export const CounterApp = ({ value }) => {

  const [ counter, setCounter ] = useState( value );
  
  const handleAdd = () => { 
    
    setCounter( counter + 1 );
    //setCounter( (c) => c + 1  )
  }

  const handleSubstract = () => {
    setCounter( counter - 1 );
  }

  const handleReset = () => {
    setCounter( value );
  }

  return (
    <>
        <h1>CounterApp</h1>
        <h2>{ counter }</h2>
        <div>
          <Button 
            variant='info'
            onClick={ handleAdd }
            >+1
          </Button>
          <Button 
            variant='warning'
            onClick={ handleSubstract }
            > -1
          </Button>
          <Button 
            variant='secondary'
            onClick={ handleReset }
            aria-label = "btn-reset"
            >Reset
          </Button>
        </div>
    </>
  )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
    value: 0
}


