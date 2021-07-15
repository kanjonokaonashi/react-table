import React, {useState, useEffect, useRef} from "react";

const CounterFunction = (props) => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(count => count + 1);
        }, 200);
        return () => clearInterval(interval);
    }, []);


    // useEffect(() => {
    //     setInterval(() => {
    //         setCount(count+1);
    //     }, 200)
    // }, [count]);


    // useEffect(() => {
    //     document.removeEventListener('scroll', onScroll)
    //     document.addEventListener('scroll', onScroll)
    //     return () => {
    //         document.removeEventListener('scroll', onScroll)
    //     }
    // }, [count]);

    // useEffect(() => {
    //     // setCount(count+1);
    // }, [count])



    const onScroll = () => {
        console.log("onScroll", count);
    }

    return (
        <div className="counterDiv">
            <div className="counter">
                <h2>Functional component</h2>
                <h2>Counter = {count}</h2>
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

export default CounterFunction;