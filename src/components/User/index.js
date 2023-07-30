const User = props => {
  const {match} = props
  const {params} = match
  const {id} = params

  return <h1>USER Route {id}</h1>
}

export default User
