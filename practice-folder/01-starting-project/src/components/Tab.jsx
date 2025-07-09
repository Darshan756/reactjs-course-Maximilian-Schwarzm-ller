export default function Tab({buttons,buttonContainer,children}){
  const ButtonsContainer = buttonContainer;
    return (
        <>
        <ButtonsContainer>{buttons}</ButtonsContainer>
        
       {children}
       </>
    )
}