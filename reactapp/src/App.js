import { Header } from './components/header/header';
import { Introduce } from './components/introduce/introduce';
import { Blog } from './components/info/blog';
import { Rent } from './components/rent/rent';
import { Gallery } from './components/gallery/gallery';
import { News } from './components/news/news';
import { Contacts } from './components/contacts/contacts';
import { Footer } from './components/footer/footer';

function App() {
  return (
    <div>
      <Header />
      <main class="main-content">
        <Introduce />
        <Blog />
        <Rent />
        <Gallery />
        <News />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}

export default App;
