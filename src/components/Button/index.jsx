import classNames from 'classnames/bind';
import './Button.module.scss';
import { Link } from 'react-router-dom';

function Button({
    to,
    href,
    primary = false,
    small = false,
    large = false,
    medium = false,
    outline = false,
    text = false,
    disable = false,
    rounded = false,
    lefticon,
    children,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    console.log(outline);
    console.log(primary);
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    //Remove event listener when btn is disabled
    if (disable) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }
    const classes = classNames(
        'text-[16px] rounded-[4px] font-bold border-solid select-none inline-flex items-center space-x-2 justify-center',
        {
            'bg-[#fe2c55] text-white border-[#fe2c55] hover:bg-[#f0274d]': primary,
            'border-[#fe2c55] text-[#fe2c55] hover:bg-[#fe2c550f] border-[1px]': outline,
            'min-w-[88px] py-[4px] px-[16px]': small,
            'min-w-[100px] py-[6px] px-[16px]': medium,
            'min-w-[140px] py-[14px] px-[16px]': large,
            'hover:underline': text,
            'pointer-events-none opacity-50': disable,
            'border-[#fe2c55] hover:border-[#fe2c55]': outline && rounded,
            'rounded-[999px] shadow-[0_2px_8px_rgb(0_0_0_/_6%)] border-[#1618231f] hover:border-[#16182333] hover:bg-[#16182308] border-[1px]':
                rounded,
        },
    );
    return (
        <Comp className={classes} {...props}>
            {lefticon && <span className="">{lefticon}</span>}
            <span className="">{children}</span>
            {lefticon && <span className="">{lefticon}</span>}
        </Comp>
    );
}

export default Button;
