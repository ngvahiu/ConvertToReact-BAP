import './App.css';
import Card from './components/Card/Card';

function App() {
  const data = [
    {
      title: 'Item 1',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut optio eum ullam quae officia repellendus autem reprehenderit perferendis vero error.',
      status: 'done'
    },
    {
      title: 'Item 2',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut optio eum ullam quae officia repellendus autem reprehenderit perferendis vero error.',
      status: 'pending'
    },
    {
      title: 'Item 3',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut optio eum ullam quae officia repellendus autem reprehenderit perferendis vero error.',
      status: 'in-progress'
    },
    {
      title: 'Item 4',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut optio eum ullam quae officia repellendus autem reprehenderit perferendis vero error.',
      status: 'in-progress'
    },
    {
      title: 'Item 5',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut optio eum ullam quae officia repellendus autem reprehenderit perferendis vero error.',
      status: 'in-progress'
    },
    {
      title: 'Item 6',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut optio eum ullam quae officia repellendus autem reprehenderit perferendis vero error.',
      status: 'cancel'
    }
  ];

  function renderCards() {
    return data.map((item, index) => <Card title={item.title} description={item.description} status={item.status} key={index} />);
  }

  return (
    <>
      <header>
        <h2>TO DO APP UI</h2>
      </header>
      <div className='wrapper'>{renderCards()}</div>
      <footer>
        <p>2024</p>
      </footer>
    </>
  );
}

export default App;
