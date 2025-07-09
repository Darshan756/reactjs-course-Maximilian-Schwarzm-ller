import { useState } from "react"
export default function Player({intialName,symbol,isActive,onChangeName}){
const [playerName, setPlayerName] = useState(intialName) 
const [isEditing,setIsEditing] = useState(false)

  function handleEditClick(){
    //setIsEditing(!isEditing)
    setIsEditing((editing) => !editing );
    if(isEditing){
    onChangeName(symbol,playerName)
    }

  }
  
  function handleChange(event){
   
      setPlayerName(event.target.value)
  }
  let editablePlayerName = <span className="'player-name">{playerName}</span>;
  //let buttonCaption = 'Edit'
  if (isEditing){
     editablePlayerName = <input type="text" required value={playerName}  onChange={handleChange}/>
    //buttonCaption="Save"
  }

    return (
        <li  className={isActive ? 'active' : undefined}>
          <span className="player">
          {editablePlayerName}
          <span className="player-symbol">{symbol}</span>
          </span>
          <button onClick={handleEditClick}>{!isEditing ? "Edit" : "Save"}</button>
        </li>
    )
}