import style from "./styles.module.css";

interface ButtonProps {
  title: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, onClick }) => {
  return (
    <button className={style['btn']} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
