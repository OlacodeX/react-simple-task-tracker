import { useLocation } from "react-router-dom"
import Button from "./Button"

const Header = ({title, setShowAddTask, showAddTask}) => {
  
  const location = useLocation()

  return (
    <header className="header">
        <h1>{title}</h1>
        {location.pathname === '/' && <Button 
          color={showAddTask ? "red" :"green"} 
          text={showAddTask ? "Close" : "Add"} 
          onClick={() => setShowAddTask(!showAddTask)}
        />}
    </header>
  )
}

Header.defaultProps = {
    title: "Default Title",
}
export default Header