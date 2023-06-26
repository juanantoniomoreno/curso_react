import PropTypes from 'prop-types';

const getSaludo = (name) => {
  return `Hola ${name}`;
}

const getAge = (birth_year) => {
  let now = new Date();
  return (now.getFullYear() - birth_year);
}

export const FirstApp = ({ title, subTitle, name }) => {

  //console.log(props);
      
  return (
    <>
      <h1 data-testid="test-title" > { title }</h1>
      <p>{ subTitle }</p>
      <p>{ subTitle }</p>
      {/* <h3>Tengo { subTitle } años</h3> */}
      {/* <code>{ JSON.stringify( newMsg ) }</code> */}
      <p>{ name }</p>
    </>
  )
}

//Para hacer que las props sean obligatorias y sean de un tipo determinado
FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

//Podemos dar valores por defecto a las props
FirstApp.defaultProps = {
  /* title: 'No hay título', */
  subTitle: 'No hay subtítulo',
  name: 'Juan'
}
