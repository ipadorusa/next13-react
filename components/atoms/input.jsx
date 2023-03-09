export default function InputCheck({ id }) {
  return (
    <label htmlFor={id}>
      check
      <input className="input-item" type="checkbox" name={`select-item`} />
    </label>
  )
}
