import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  constructor(props) {
    super(props)
    const faqsList = props.faqsList.map(each => ({...each, isExpanded: false}))
    this.state = {faqsList}
  }

  onExpandFaq = id => {
    const {faqsList} = this.state

    const newFaqsList = faqsList.map(each => {
      if (each.id === id) {
        return {...each, isExpanded: !each.isExpanded}
      }
      return each
    })

    this.setState({
      faqsList: newFaqsList,
    })
  }

  render() {
    const {faqsList} = this.state

    return (
      <div className="bg-container">
        <div className="inner">
          <h1 className="heading">FAQs</h1>
          <ul className="faqs-list-container">
            {faqsList.map(each => (
              <FaqItem
                faqDetails={each}
                onExpandFaq={this.onExpandFaq}
                key={each.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
