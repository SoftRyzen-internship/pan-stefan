type ButtonProps = {
    type: 'button' | 'submit',
    link?: {target: string},
    text: string,
    centered?: boolean,
    long?: boolean,
    onClick?: React.MouseEventHandler,
};

export default ButtonProps;