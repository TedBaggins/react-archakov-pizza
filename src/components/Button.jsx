import classNames from "classnames";
import PropTypes from 'prop-types';

function Button({onClick, outline, className, children}) {
    return (
        <button
            onClick={onClick}
            className={classNames('button', className,
                {'button--outline': outline}
            )}
        >{children}</button>
    )
}

Button.propTypes = {
    onClick: PropTypes.func,
}

export default Button;