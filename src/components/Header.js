import Button from "./Button"

const Header = ({title, setShowAddTask, showAddTask}) => {
  return (
    <header className="header">
        <h1>{title}</h1>
        <Button 
          color={showAddTask ? "red" :"green"} 
          text={showAddTask ? "Close" : "Add"} 
          onClick={() => setShowAddTask(!showAddTask)}
        />
    </header>
  )
}

Header.defaultProps = {
    title: "Default Title",
}
export default Header