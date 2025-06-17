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
    textmenuItem = false,
    lefticon,
    righticon = false,
    children,
    onClick,
    ...passProps
}) {
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
    //Remove event listener when btn is disabled
    if (disable) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }
    const classes = classNames('text-[16px] rounded-[4px] font-bold border-solid select-none space-x-2', {
        'bg-[#fe2c55] text-white border-[#fe2c55] hover:bg-[#f0274d] inline-flex items-center justify-center': primary,
        'border-[#fe2c55] text-[#fe2c55] hover:bg-[#fe2c550f] border-[1px] inline-flex items-center justify-center':
            outline,
        'min-w-[88px] py-[4px] px-[16px] inline-flex items-center justify-center': small,
        'min-w-[100px] py-[6px] px-[16px] inline-flex items-center justify-center': medium,
        'min-w-[140px] py-[14px] px-[16px] inline-flex items-center justify-center': large,
        'hover:underline inline-flex items-center justify-center': text,
        'pointer-events-none opacity-50 inline-flex items-center justify-center': disable,
        'border-[#fe2c55] hover:border-[#fe2c55] inline-flex items-center justify-center': outline && rounded,
        'rounded-[999px] shadow-[0_2px_8px_rgb(0_0_0_/_6%)] border-[#1618231f] hover:border-[#16182333] hover:bg-[#16182308] border-[1px] inline-flex items-center justify-center':
            rounded,
        'w-full inline-flex h-full justify-start': textmenuItem,
    });
    return (
        <Comp className={classes} {...props}>
            {lefticon && <span className="w-[24px] inline-block text-center">{lefticon}</span>}
            <span className="">{children}</span>
            {righticon && <span className="">{lefticon}</span>}
        </Comp>
    );
}

export default Button;
