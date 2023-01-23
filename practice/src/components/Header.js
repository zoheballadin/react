import propTypes from "prop-types";
import Button from "./Button";
const Header = ({title}) => {

    const onClick = (e) => {
        console.log("click");
      };
    return (
        <header className="header">
            <h1>task tracker</h1> 
            <Button color="green" text="Add" onClick = {onClick}/>
            
            
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