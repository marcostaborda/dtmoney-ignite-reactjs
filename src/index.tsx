import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs';
import App from './App';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Aluguel',
          amount: 400,
          type: 'deposit',
          category: 'food',
          createAt: new Date(),
        }
      ]
    })

  }
})

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);