import PropTypes from 'prop-types'

const Button = ({type, className, onClick, text, children, disabled}) => {
    return <button type={type} className={className} onClick={onClick} disabled={disabled}>
        {children}{text}
    </button>
}

Button.defaultProps = {
    text: 'Save',
    className: 'btn btn-primary',
    type: 'button'
}

Button.propTypes = {
    text: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
    type: PropTypes.string,
    children: PropTypes.element
}

export default Button