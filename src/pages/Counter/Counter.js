const CounterView = (props) => {
    return (
        <React.Fragment>
            {props.value}
        </React.Fragment>
    );
};

@inject("counter")
@observer
class Counter extends Component {

    @observable number = 0;

    @action
    increase = () => {
        this.number++;
        this.props.counter.func();
    }

    @action
    decrease = () => {
        this.number--;
    }

    handleAsyncAction = () => {
        this.number++;
    }

    renderCount = 0;
    render() {   
        this.renderCount++;
        const { counter } = this.props;

        return (
            <div>
                <h1>{"render cnt : " + this.renderCount}</h1>
                <h1>{this.number}</h1>
                <CounterView value={counter.getNumber} />
                <CounterView value={counter.getNumber2} />
                <button onClick={this.handleAsyncAction}>Delay+</button>
                <button onClick={this.increase}>+</button>
                <button onClick={this.decrease}>-</button>
                <button onClick={counter.increase}>+</button>
                <button onClick={counter.decrease}>-</button>

                <h1>Hi 👋</h1>
            </div>
        );
    }
}

export default Counter;