import React from 'react'
import Header from '../../components/Header/Header'
import "./Home.css"
// import AddReview from '../Review/AddReview'
import Contacts from '../Contacts/Contact'
import Abouthome from '../About/Abouthome'
import Enroll from '../Enroll/Enroll'
import Header2 from '../../components/Header/Header-2'

const Home = () => {

  return (
    <div>
      <Header />
      <Enroll/>
      <Abouthome />
      {/* <AddReview /> */}
      <Header2/>
      <Contacts />
      {/* <Footer /> */}
    </div>
  )
}

export default Home