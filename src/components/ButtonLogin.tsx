interface IButtonLoginProps {
    children?: React.ReactNode;
    type?: "button" | "submit" | "reset" | undefined;
    onClick: () => void;
}

export const ButtonLogin: React.FC<IButtonLoginProps> = ({ type, onClick, children }) => {
    return(
        <button type={type} onClick={onClick}>{children}</button>
    )
}