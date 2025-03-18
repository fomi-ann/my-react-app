import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Food from './components/Food.jsx'
import Card from './components/Card.jsx'
import ButtonExternal from './components/ButtonExternal.jsx'
import ButtonModule from './ButtonModule/ButtonModule.jsx'
import ButtonInline from './components/ButtonInline.jsx'

import Student from './components/Student.jsx'
import UserGreeting from './components/UserGreeting.jsx'

function App() {
  return(
    <>
      <Header />
      <Card />
      <Card />
      <Card />
      <Card />
       <hr />
      <ButtonExternal />
      <ButtonModule />
      <ButtonInline />
      <hr />
      <Food />
      <Food />
      <Food />
      <hr />
      <Student name="Spongebob" age={30} isStudent="true"/>
      <Student name="Patrick" age={42} isStudent={false}/>
      <Student name="Squidward" age={50} isStudent={false}/>
      <Student name="Sandy" age={27} isStudent={true}/>
      <Student name='Lary'/>
      <hr />
      <UserGreeting isLoggedIn={true} />
      <hr />
      <Footer />
    </>
  );

}

export default App
