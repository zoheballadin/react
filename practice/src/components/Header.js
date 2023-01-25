import propTypes from "prop-types";
import Button from "./Button";
const Header = ({title, onAdd, showAdd}) => {

    
    return (
        <header className="header">
            <h1>task tracker</h1> 
            <Button color={showAdd ? "red" : "green"} text={showAdd ? "close" : "Add"} onClick = {onAdd}/>
            
            
        </header>
    )
}

Header.defaultProps = {
    title: "default prop"
}

// const headerStyle = {color: "red", backgroundColor: "Black"}

Header.propTypes = {
    title: propTypes.string.isRequired
}
export default Header