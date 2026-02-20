export const Card = ({ id, name, image, status, species }) => {
    return (
      <section style={{textAlign:'center'}}>
        <h2>#{id} - {name}</h2>
        <img src={image} alt={name} width={200}/>
        <p>Status: {status}</p>
        <p>Species: {species}</p>
      </section>
    )
  }