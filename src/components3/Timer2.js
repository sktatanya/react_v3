import React, { PureComponent } from 'react';

class Timer2 extends PureComponent {
	constructor(props) {
	super(props);
	this.state = { seconds: 0, isRunning: false, isReset: false };
}

tick() {
   this.setState((state) => ({ seconds: state.seconds + 1 }));
}

startTimer() {
   if (!this.state.isRunning) {
      this.interval = setInterval(() => this.tick(), 1000);
      this.setState({ isRunning: true, isReset: false });
   }
}

stopTimer() {
   clearInterval(this.interval);
   this.setState({ isRunning: false });
}

resetTimer() {
   clearInterval(this.interval);
   this.setState({ seconds: 0, isRunning: false, isReset: true });
}

componentWillUnmount() {
   clearInterval(this.interval);
}

render() {
   return (
      <div>
      <h2>Timer: <span>{this.state.seconds}</span></h2>
      {this.state.isReset ? (
         <button onClick={() => this.startTimer()}>Старт</button>
      ) : (
         <button onClick={() => this.resetTimer()}>Сброс</button>
      )}
      {this.state.isReset || (
         <button onClick={() => this.stopTimer()}>Стоп</button>
      )}
      </div>
   );
}
}

export default Timer2;
