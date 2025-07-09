export default function CoreConcept({img,title,description}) {
    return (
        <>
            <img src={img} alt="" />
            <h3>{title}</h3>
            <p>{description}</p>
       </>
    )
}