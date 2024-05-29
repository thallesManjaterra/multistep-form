export const UserForm = ({ data, updateFieldHandler }) => {
  return (
    <>
      <div className="form-control">
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Digite seu nome"
          value={data.name || ''}
          onChange={(e) => updateFieldHandler('name', e.target.value)}
          required
        />
      </div>
      <div className="form-control">
        <label htmlFor="email">E-mail</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Digite seu e-mail"
          value={data.email || ''}
          onChange={(e) => updateFieldHandler('email', e.target.value)}
          required
        />
      </div>
    </>
  )
}
