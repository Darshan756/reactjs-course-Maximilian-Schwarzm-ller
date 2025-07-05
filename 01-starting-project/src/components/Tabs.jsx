export default function Tabs({children,buttons,buttonContainer}){
  const ButtonsConatiner = buttonContainer;
  return( <>
     <ButtonsConatiner>{buttons}</ButtonsConatiner>
     {children}
    </>)
}