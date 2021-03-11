import Header from './components/Header';
import Layout from './components/Layout';
import Footer from './components/Footer';

import ReactBg from './assets/bg3.jpg';

console.log(ReactBg);


const App = () => {
    return (
        <>
          <Header title = "Title" descr = "Description"/>
          <Layout title = "Title" descr = "Description" urlBg = {ReactBg} />
          <Layout title = "Title" descr = "Description" colorBg = "blue"/>
          <Layout title = "Title" descr = "Description" urlBg = {ReactBg}/>
          <Footer />
          {/* <Layout title = "Title" descr = "Description" urlBg/>
          <Layout title = "Title" descr = "Description" colorBg/>
          <Layout title = "Title" descr = "Description" urlBg/>
          <Footer /> */}
        </>
    )
}

export default App;
