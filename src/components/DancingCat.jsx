import { useState } from 'react'
import catImage from '../assets/images/cat.svg'
import './DancingCat.css'

function DancingCat() {
  const [isDancing, setIsDancing] = useState(false)

  const toggleDancing = () => {
    setIsDancing(!isDancing)
  }

  return (
    <div className="dancing-cat-container">
      <div className="stage">
        <img
          src={catImage}
          alt="Dancing Cat"
          className={`cat ${isDancing ? 'dancing' : ''}`}
        />
      </div>

      <button
        className="control-button"
        onClick={toggleDancing}
      >
        {isDancing ? '멈추기' : '춤추기'}
      </button>

      <p className="instruction">
        {isDancing ? '고양이가 춤추고 있어요!' : '버튼을 눌러 고양이를 춤추게 해보세요!'}
      </p>
    </div>
  )
}

export default DancingCat
