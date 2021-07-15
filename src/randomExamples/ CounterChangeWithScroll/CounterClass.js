import React, {Component} from "react";

class CounterClass extends Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        }

        this.onScroll = this.onScroll.bind(this);
    }

    onScroll() {
        console.log("onScroll");
        this.setState({count: this.state.count+1});
    }

    render() {
        return (
            <div className="counterDiv" onScroll={this.onScroll}>
                <div className="counter">
                    <h2>Class Component</h2>
                    <h2>Counter = {this.state.count}</h2>
                </div>
                <div className="content">
                    <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset
                        concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis
                        evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no
                        molestiae voluptatibus.</p>
                    <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset
                        concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis
                        evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no
                        molestiae voluptatibus.</p>
                    <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset
                        concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis
                        evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no
                        molestiae voluptatibus.</p>
                    <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset
                        concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis
                        evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no
                        molestiae voluptatibus.</p><p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
                    definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur
                    ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his
                    ad. Eum no molestiae voluptatibus.</p>  <p>Some text to enable scrolling.. Lorem ipsum dolor sit
                    amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui
                    causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et.
                    Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p><p>Some text to enable scrolling..
                    Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera
                    fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus
                    repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>  <p>Some text
                    to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset
                    concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur
                    eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae
                    voluptatibus.</p><p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones
                    no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id
                    agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no
                    molestiae voluptatibus.</p>  <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
                    definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur
                    ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his
                    ad. Eum no molestiae voluptatibus.</p><p>Some text to enable scrolling.. Lorem ipsum dolor sit amet,
                    illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae
                    gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint
                    efficiantur his ad. Eum no molestiae voluptatibus.</p>
                    <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset
                        concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis
                        evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no
                        molestiae voluptatibus.</p>
                    <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset
                        concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis
                        evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no
                        molestiae voluptatibus.</p>
                    <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset
                        concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis
                        evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no
                        molestiae voluptatibus.</p>
                    <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset
                        concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis
                        evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no
                        molestiae voluptatibus.</p>
                    <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset
                        concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis
                        evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no
                        molestiae voluptatibus.</p>
                    <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset
                        concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis
                        evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no
                        molestiae voluptatibus.</p>
                    <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset
                        concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis
                        evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no
                        molestiae voluptatibus.</p>
                    <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset
                        concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis
                        evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no
                        molestiae voluptatibus.</p><p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
                    definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur
                    ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his
                    ad. Eum no molestiae voluptatibus.</p>  <p>Some text to enable scrolling.. Lorem ipsum dolor sit
                    amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui
                    causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et.
                    Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p><p>Some text to enable scrolling..
                    Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera
                    fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus
                    repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>  <p>Some text
                    to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset
                    concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur
                    eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae
                    voluptatibus.</p><p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones
                    no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id
                    agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no
                    molestiae voluptatibus.</p>  <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
                    definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur
                    ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his
                    ad. Eum no molestiae voluptatibus.</p><p>Some text to enable scrolling.. Lorem ipsum dolor sit amet,
                    illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae
                    gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint
                    efficiantur his ad. Eum no molestiae voluptatibus.</p>
                    <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset
                        concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis
                        evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no
                        molestiae voluptatibus.</p>
                    <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset
                        concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis
                        evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no
                        molestiae voluptatibus.</p>
                    <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset
                        concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis
                        evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no
                        molestiae voluptatibus.</p>
                    <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset
                        concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis
                        evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no
                        molestiae voluptatibus.</p>
                </div>
            </div>
        )
    }
}

export default CounterClass;