import './index.css'
import {useState} from 'react'
import {MultiSelect} from 'react-multi-select-component'
import InnerPage from '../InnerPage'

const options = [
  {label: 'Browser', value: 'browser'},
  {label: 'Country', value: 'country'},
  {label: 'Date', value: 'date', disabled: false},
]

const Page = () => {
  const [selected, setSelected] = useState([])

  return (
    <div className="page-container">
      <h1 className="page-heading">Leads unique by Email Address</h1>
      <MultiSelect
        className="input-select"
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
      />
      <InnerPage />
    </div>
  )
}

export default Page
