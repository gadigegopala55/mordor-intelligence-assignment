import './index.css'
import {useChecklist} from 'react-checklist'

const data = [
  {id: 1, label: 'Chrome'},
  {id: 2, label: 'Firefox'},
  {id: 3, label: 'Safari'},
  {id: 4, label: 'edge'},
]

const Filters = () => {
  const {handleCheck, checkedItems} = useChecklist(data, {
    key: 'id',
    keyType: 'number',
  })

  console.log(checkedItems)
  console.log([...checkedItems])
  return (
    <div>
      <div className="input-container">
        <img
          src="https://res.cloudinary.com/debrutohq/image/upload/v1642509980/search_npnebl.png"
          alt="icon"
          className="icon-image"
        />
        <input placeholder="Search" className="search" />
      </div>
      <h1>Browser(4/5)</h1>
      <ul className="list-container">
        {data.map(v => (
          <li>
            <input
              type="checkbox"
              data-key={v.id} // 3
              onChange={handleCheck} // 4
              checked={checkedItems.has(v.id)} // 5
            />
            <label>{v.label}</label>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Filters
