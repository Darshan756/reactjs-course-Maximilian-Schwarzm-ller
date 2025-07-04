export default function TabButton({children, onSelect , isSelected}){
    console.log('this is tabbutton executes 4 times')
    return (
    <li>
        <button className={isSelected ? 'active' : undefined}  onClick={onSelect}>{children}</button>
    </li>)
}
