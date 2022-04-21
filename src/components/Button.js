import PropTypes from 'prop-types';
const Button = ({color, text, addClick}) => {
    return (
    <button className='btn' style={{backgroundColor:color}} onClick={addClick}>{text}</button>
  )
}

Button.defaultProps = {
    text: 'New',
  }
  
  Button.propTypes = {
    text: PropTypes.string,
  }

export default Button