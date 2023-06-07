type ButtonProps = {
  type: 'button' | 'submit';
  text: string;
  centered?: boolean;
  long?: boolean;
  lightHover?: boolean;
  xwide?: boolean;
  onClick?: React.MouseEventHandler;
};

export default ButtonProps;
