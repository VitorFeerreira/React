import Item from "./Item";
function List() {
  return(
    <>
    <h1>Minha lista</h1>
    <ul>
      <Item marca="Coroloar" ano_lancamento={1964}/>
      <Item marca="Fiat" ano_lancamento={1975}/>
      <Item marca="Volkswagen" ano_lancamento={1976}/>
      <Item/>
    </ul>
    </>
  )
}
export default List;