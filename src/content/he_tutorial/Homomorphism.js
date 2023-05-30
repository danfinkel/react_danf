import React from 'react';

import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

export default function Homomorphism() {
    const lineq = 'f(x)=2x';
    const var_x = 'x';
    const var_y = '2x';
    const x_in_R = 'x \\isin R';
    return (
        <div>
            <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
            <script type="text/javascript" id="MathJax-script" async
              src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/mml-chtml.js">
            </script>
            <p>
                Homomorphisms are a fundamental algebraic concept that you have probably already learned 
                about, although it may have been called something else. They are mappings that maintain a 
                specified set of properties between sets.
            </p>
            <p>
                For example, consider the linear function  &nbsp;
                <InlineMath math={lineq} />
                . This function maps any real number
                (i.e., &nbsp;
                <InlineMath math={x_in_R} />
                ) into another real number
                (i.e., &nbsp;
                <InlineMath math={var_y} />
                &nbsp; which is also, of course, a real number). 
            </p>
            <p>
                An interesting property of the above-defined function is that additive operations
                can occur before or after the function is applied to data. That is,
                <BlockMath math="f(x) + f(y) = 2x + 2y = 2(x+y) = f(x + y)." />
                Note that this is NOT true with respect to multiplication, i.e., 
                <BlockMath math="f(x) \times f(y) = 2x \times 2y = 4xy \not= 2xy = f(xy)." />
                The ability of a map to maintain consistency over operations on the input and output sets
                is the core idea of Homomorphisms. For the above scenario we can say that <InlineMath math="f" /> 
                &nbsp; is Homomorphic with respect to the additive operation on real sets but is not Homomorphic
                with respect to multiplication.
            </p>
            <p>
                There is <a href="https://en.wikipedia.org/wiki/Homomorphism">a lot more to homomorphisms</a> than 
                described above, but this should be enough to get started and start combining the concepts of
                encrpytion and algebraic transformations.
            </p>
        </div>
        );
};