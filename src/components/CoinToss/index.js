import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    totalCounts: 0,
    headsCounts: 0,
    tailsCount: 0,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  onClickCoinToss = () => {
    const tossResult = Math.floor(Math.random() * 2)
    console.log(tossResult)

    if (tossResult === 1) {
      this.setState(prevSate => ({
        totalCounts: prevSate.totalCounts + 1,
        tailsCount: prevSate.tailsCount + 1,
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      }))
    } else {
      this.setState(prevSate => ({
        totalCounts: prevSate.totalCounts + 1,
        headsCounts: prevSate.headsCounts + 1,
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      }))
    }
  }

  render() {
    const {totalCounts, headsCounts, tailsCount, imageUrl} = this.state
    return (
      <div className="bg-container">
        <div className="items-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img className="head-tail-image" src={imageUrl} alt="toss result" />
          <button
            onClick={this.onClickCoinToss}
            className="toss-coin-button"
            type="button"
          >
            Toss Coin
          </button>
          <div className="description-container">
            <p className="counts">Total: {totalCounts}</p>
            <p className="counts">Heads: {headsCounts}</p>
            <p className="counts">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
