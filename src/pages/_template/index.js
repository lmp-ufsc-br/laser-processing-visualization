import React, { Component } from 'react';

import { Link, Form, SubmitButton, List } from './styles';

export default class Dashboard extends Component {
  state = {
    newRef: '',
    references: ['Artur', 'gabi'],
  };

  componentDidMount() {
    /** references checa se há valores no localStorage... */
    const references = localStorage.getItem('references');
    /** ...se houver, o valor é montado na tela */
    if (references) {
      this.setState({ references: JSON.parse(references) });
    }
  }

  componentDidUpdate(_, prevState) {
    const { references } = this.state;
    /**
     * references recebe o valor do estado e
     * Compara valor com valor do localStorage, se for diferente
     * o valor é adicionado ao localStorage
     */
    if (prevState.references !== references) {
      localStorage.setItem('references', JSON.stringify(references));
    }
  }

  handleInputChange = (e) => {
    this.setState({ newRef: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { newRef, references } = this.state;

    this.setState({
      references: [...references],
      newRef: '',
    });
    console.log(newRef);
  };

  render() {
    const { newRef, references } = this.state;

    return (
      <>
        <Link href="https://youthful-lewin-abd50c.netlify.app/">Home</Link>
        <Form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Adicionar referência"
            value={newRef}
            onChange={this.handleInputChange}
          />
          <SubmitButton>Adicionar</SubmitButton>
        </Form>
        <List>
          {references.map((reference) => (
            <li key={reference}>
              <span>{reference}</span>
            </li>
          ))}
        </List>
      </>
    );
  }
}
