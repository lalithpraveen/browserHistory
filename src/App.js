import {Component} from 'react'

import BrowseHistory from './components/BrowseHistory'
import './App.css'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class App extends Component {
  state = {
    searchInput: '',
    historyList: initialHistoryList,
  }

  getFilteredHistory = () => {
    const {searchInput, historyList} = this.state
    let updatedList
    if (searchInput === '') {
      updatedList = initialHistoryList
    } else {
      updatedList = historyList.filter(eachItem =>
        eachItem.title.toLowerCase().includes(searchInput.toLowerCase()),
      )
    }

    this.setState({historyList: updatedList})
  }

  onSearch = event => {
    this.setState({searchInput: event.target.value}, this.getFilteredHistory)
  }

  deleteItem = id => {
    const {historyList} = this.state
    const updatedList = historyList.filter(eachItem => eachItem.id !== id)
    this.setState({historyList: updatedList})
  }

  renderBrowserHistory = () => {
    const {historyList} = this.state
    const lengthOfList = historyList.length

    if (lengthOfList > 0) {
      return (
        <ul className="history-list-container">
          {historyList.map(eachItem => (
            <BrowseHistory
              deleteItem={this.deleteItem}
              itemDetails={eachItem}
              key={eachItem.id}
            />
          ))}
        </ul>
      )
    }

    return <p className="no-results">There is no history to show</p>
  }

  render() {
    return (
      <>
        <header className="header-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png "
            alt="app logo"
            className="logo"
          />
          <div className="search-box">
            <button
              className="search-btn"
              type="button"
              onClick={this.onSearch}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
              />
            </button>
            <input
              type="search"
              className="search-input"
              placeholder="Search history"
              onChange={this.onSearch}
            />
          </div>
        </header>
        {this.renderBrowserHistory()}
      </>
    )
  }
}

export default App
