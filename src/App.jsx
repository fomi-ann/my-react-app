import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Food from './components/Food.jsx'
import Card from './components/Card.jsx'
import ButtonExternal from './components/ButtonExternal.jsx'
import ButtonModule from './ButtonModule/ButtonModule.jsx'
import ButtonInline from './components/ButtonInline.jsx'

import Student from './components/Student.jsx'

function App() {
  return(
    <>
      <Header />
      <Card />
      <Card />
      <Card />
      <Card />
       <hr></hr>
      <ButtonExternal />
      <ButtonModule />
      <ButtonInline />
      <hr></hr>
      <Food />
      <Food />
      <Food />
      <hr></hr>
      <Student name="Spongebob" age={30} isStudent="true"/>
      <Student name="Patrick" age={42} isStudent={false}/>
      <Student name="Squidward" age={50} isStudent={false}/>
      <Student name="Sandy" age={27} isStudent={true}/>
      <Student name='Lary'/>
      <Footer />
    </>
  );

}

export default App
