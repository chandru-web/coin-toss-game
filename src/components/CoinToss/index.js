import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    total: 0,
    heads: 0,
    tails: 0,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png', // initial image URL
  }

  flipCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    let imageUrl

    if (tossResult === 0) {
      imageUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      this.setState(prevState => ({
        heads: prevState.heads + 1,
      }))
    } else {
      imageUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
      this.setState(prevState => ({
        tails: prevState.tails + 1,
      }))
    }

    this.setState(prevState => ({
      total: prevState.total + 1,
      imageUrl,
    }))
  }

  render() {
    const {total, heads, tails, imageUrl} = this.state

    return (
      <div className="app-container">
        <div className="coin-toss-game-container">
          <h1 className="coin-toss-game-heading">Coin Toss Game</h1>
          <p className="heads-or-tails">Heads (or) Tails</p>
          <img src={imageUrl} alt="toss result" className="toss-image" />
          <button
            type="button"
            className="toss-coin-button"
            onClick={this.flipCoin}
          >
            Toss Coin
          </button>
          <div className="score-container">
            <p className="total">Total: {total}</p>
            <p className="heads">Heads: {heads}</p>
            <p className="tails">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
