import { fromJS } from 'immutable';

class SystemState {
  state = fromJS({});

  constructor(state) {
    this.state = state;
  }

  get() {
    return this.state;
  }

  commit(prev, next) {
    this.state = next;
  }
}

export default SystemState;