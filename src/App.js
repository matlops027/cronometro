import React, {Component} from 'react';
import cronometro from './assets/cronometro.png';
import './styles.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      contador: 0,
      botao: 'VAI'
    }
    this.timer = null;
    this.controlaCronometro = this.controlaCronometro.bind(this);
    this.limpar = this.limpar.bind(this);

  }
  

  controlaCronometro = () => {
    let state = this.state;
    if(this.timer) {
      clearInterval(this.timer);
      state.botao = 'VAI';
      this.timer = null;
    }else {
      this.timer = setInterval(() => {
        state.contador += 0.1;
        this.setState(state);
      }, 100);
      state.botao = 'PAUSAR';
    }
    this.setState(state);
  }


  limpar = () => {
    let state = this.state;
    if(this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
    state.botao = 'VAI';
    state.contador = 0;

    this.setState(state);
  }

  render() {
    return (
      <div className="container">
        <img src={cronometro} className="img" />
        <a className="timer">{this.state.contador.toFixed(1)}</a>
        <div className="areaBtn">
          <a className="botao" onClick={this.controlaCronometro}>{this.state.botao}</a>
          <a className="botao" onClick={this.limpar}>LIMPAR</a>
        </div>
      </div>
    )
  }
}

export default App;