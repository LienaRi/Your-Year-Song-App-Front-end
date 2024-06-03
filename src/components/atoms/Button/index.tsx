import "./styles.module.css";

interface ButtonProps {
  title: string;
  className: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, className, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
