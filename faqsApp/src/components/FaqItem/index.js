import './index.css'

const faqItem = props => {
  const {faqDetails, onExpandFaq} = props
  const {id, questionText, answerText, isExpanded} = faqDetails

  let answerElement
  if (isExpanded) {
    answerElement = <p className="answer">{answerText}</p>
  } else {
    answerElement = null
  }

  const expandFaq = () => {
    onExpandFaq(id)
  }

  const expandBtnImgUrl = isExpanded
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

  return (
    <li className="faq-item-container">
      <div className="question-container">
        <h1 className="question">{questionText}</h1>
        <button className="expand-btn" type="button" onClick={expandFaq}>
          <img
            src={expandBtnImgUrl}
            alt={isExpanded ? 'minus' : 'plus'}
            className="expand-image"
          />
        </button>
      </div>

      {answerElement}
    </li>
  )
}

export default faqItem
