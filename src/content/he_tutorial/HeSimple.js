import React from 'react';

import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

export default function HeSimple() {
    return (
        <div>
            <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
            <script type="text/javascript" id="MathJax-script" async
              src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/mml-chtml.js">
            </script>
            <p>
            Now that 
            </p>
        </div>
            )
};
