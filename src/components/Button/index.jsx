import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({ to, href, primary, small, large, medium, outline, children, onClick, ...passProps }) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    console.log({ ...props });
    const classes = classNames('text-[16px] rounded-[4px] font-bold border-solid border-[1px]', {
        'bg-[#fe2c55] text-white border-[#fe2c55] hover:bg-[#f0274d]': primary,
        'border-[#fe2c55] text-[#fe2c55] hover:bg-[#fe2c550f]': outline,
        'min-w-[88px] py-[4px] px-[16px]': small,
        'min-w-[100px] py-[9px] px-[16px]': medium,
        'min-w-[140px] py-[14px] px-[16px]': large,
    });
    return (
        <Comp className={classes} {...props}>
            <span className="">{children}</span>
        </Comp>
    );
}

export default Button;
