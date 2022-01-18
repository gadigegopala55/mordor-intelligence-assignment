import './index.css'
import Filters from '../Filters'

const InnerPage = () => (
  <div>
    <div className="inner-page-container">
      <div className="date-container">
        <h1 className="date-heading">May27-Jun2,2020</h1>
        <img
          src="https://res.cloudinary.com/debrutohq/image/upload/v1642491028/bag_yxp7dp.png"
          alt="date"
          className="date-image"
        />
      </div>
      <div className="compare-container">
        <h1 className="compare-heading">Compare</h1>
      </div>
    </div>
    <Filters />
  </div>
)

export default InnerPage
