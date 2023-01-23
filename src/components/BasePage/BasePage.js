import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';
// import Menu from '../Menu/';

function BasePage({ values, setValues }) {
  return (
    <>
      {/* <Menu /> */}
      <Header values={values} />
      <Main values={values} />
      <Footer />
    </>
  );
}

export default BasePage;
