import React, { Fragment, useContext } from "react";
import Head from "next/head";
import SyntaxHighlighter from "react-syntax-highlighter";
import { github, dark } from "react-syntax-highlighter/dist/cjs/styles/hljs";

import Theme from "../../../utils/Theme";
import { BlogContext } from "../../../contextApi/blogContext";
import BackTo from "../../../components/buttons/BackTo";

interface Props {
  myDark: boolean;
}

const SpreadOperator = () => {
  const { dark: myDark } = useContext(BlogContext);

  return (
    <Fragment>
      <Head>
        <title>Rest and Spread Operator</title>
      </Head>

      <Theme>
        <BackTo backTo={"blogs"} />

        <div className="layoutContainer">
          <div className="layoutBox1">
            <h2 className="blog-heading">
              Rest And Spread Operator in JavaScript
            </h2>

            <p className="text-lg font-bold mt-5">What is Spread Operator?</p>

            <p>
              The spread operator, denoted by three dots(&quot;...&quot;), is a
              feature introduced in javascript ES6 that allow us to expand and
              spread the elements of an array or an object. It provides a
              concise and flexible way to manipulate and combine array and
              object.
            </p>

            <Example1 myDark={myDark} />
            <Example2 myDark={myDark} />
            <Example3 myDark={myDark} />
            <Example4 myDark={myDark} />
            <Example5 myDark={myDark} />
            <Example6 myDark={myDark} />

            <p className="text-lg font-bold mt-8">What is Rest Operator?</p>

            <p>
              The rest operator also denoted by three dot(&quot;...&quot;), is
              another feature introduced in JavaScript ES6 that works in the
              opposite way to the spread operator. It Allows us to gather or
              collect multiple elements into an array.
            </p>
            <Example7 myDark={myDark} />
            <Example8 myDark={myDark} />
            <Example9 myDark={myDark} />
          </div>

          <div className="layoutBox2">Namaskaram</div>
        </div>
      </Theme>
    </Fragment>
  );
};

export default SpreadOperator;

const Example1: React.FC<Props> = ({ myDark }) => {
  const codeString = `  const Example1 = () => {
    // Array Clone

    type Numbers = number[];
  
    const numbers: Numbers = [1, 2, 3];
  
    const newNumbers: Numbers = [...numbers];
  
    console.log(newNumbers); // [1, 2, 3]
  
    return (
      <></>
    );
  };
  `;
  // Array Clone

  type Numbers = number[];

  const numbers: Numbers = [1, 2, 3];

  const newNumbers: Numbers = [...numbers];

  console.log(newNumbers);

  return (
    <>
      <h3 className="text-lg font-bold mt-6 mb-4">Example 1</h3>

      <SyntaxHighlighter
        language="javascript"
        showLineNumbers={true}
        style={myDark ? dark : github}
      >
        {codeString}
      </SyntaxHighlighter>
    </>
  );
};

const Example2: React.FC<Props> = ({ myDark }) => {
  const codeString = `  const Example2 = () => {
    // Combine Array

    type Numbers = number[];

    const numbers1: Numbers = [1, 2, 3];
    const numbers2: Numbers = [4, 5, 6];
  
    const combineArray: Numbers = [...numbers1, ...numbers2];
  
    console.log(combineArray); // [1, 2, 3, 4, 5, 6]
  
    return <></>;
  };`;
  //Combine Array

  type Numbers = number[];

  const numbers1: Numbers = [1, 2, 3];
  const numbers2: Numbers = [4, 5, 6];

  const combineArray: Numbers = [...numbers1, ...numbers2];

  console.log(combineArray);

  return (
    <>
      <h3 className="text-lg font-bold mt-6 mb-4">Example 2</h3>

      <SyntaxHighlighter
        language="javascript"
        showLineNumbers={true}
        style={myDark ? dark : github}
      >
        {codeString}
      </SyntaxHighlighter>
    </>
  );
};

const Example3: React.FC<Props> = ({ myDark }) => {
  const codeString = `  const Example3 = () => {
    // Compose
  
    type Numbers = number[];

    const numbers1: Numbers = [1, 2, 3];
    const numbers2: Numbers = [4, 5, 6];

    const composedArray: Numbers = [100, ...numbers1, ...numbers2, 200];
  
    console.log(composedArray); // [100, 1, 2, 3, 4, 5, 6, 200]
  
    return <></>;
  };`;
  //Compose

  type Numbers = number[];

  const numbers1: Numbers = [1, 2, 3];
  const numbers2: Numbers = [4, 5, 6];

  const composedArray: Numbers = [100, ...numbers1, ...numbers2, 200];

  console.log(composedArray);

  return (
    <>
      <h3 className="text-lg font-bold mt-6 mb-4">Example 3</h3>

      <SyntaxHighlighter
        language="javascript"
        showLineNumbers={true}
        style={myDark ? dark : github}
      >
        {codeString}
      </SyntaxHighlighter>
    </>
  );
};

const Example4: React.FC<Props> = ({ myDark }) => {
  const codeString = `  const Example4 = () => {
    //string
  
    const myString: string = "iamshiv";

    const stringArray: string[] = myString.split("");
  
    console.log(stringArray); // ["i", "a", "m", "s", "h", "i", "v"]
  
    return <></>;
  };
  `;
  //string

  const myString: string = "iamshiv";

  const stringArray: string[] = myString.split("");

  console.log(stringArray);

  return (
    <>
      <h3 className="text-lg font-bold mt-6 mb-4">Example 4</h3>

      <SyntaxHighlighter
        language="javascript"
        showLineNumbers={true}
        style={myDark ? dark : github}
      >
        {codeString}
      </SyntaxHighlighter>
    </>
  );
};

const Example5: React.FC<Props> = ({ myDark }) => {
  const codeString = `  const Example5 = () => {
    // Object Clone
  
    type Order = {
      productName: string;
      price: number;
      quantity: number;
    };
  
    const order: Order = {
      productName: "T-shirt",
      price: 209,
      quantity: 1,
    };
  
    const newOrder: Order = { ...order };  
  
    console.log(newOrder); // { productName: "T-shirt", price: 209, quantity: 1};
  
    return <></>;
  };`;
  // Object Clone

  type Order = {
    productName: string;
    price: number;
    quantity: number;
  };

  const order: Order = {
    productName: "T-shirt",
    price: 209,
    quantity: 1,
  };

  const newOrder: Order = { ...order };

  console.log(newOrder);

  return (
    <>
      <h3 className="text-lg font-bold mt-6 mb-4">Example 5</h3>

      <SyntaxHighlighter
        language="javascript"
        showLineNumbers={true}
        style={myDark ? dark : github}
      >
        {codeString}
      </SyntaxHighlighter>
    </>
  );
};

const Example6: React.FC<Props> = ({ myDark }) => {
  const codeString = `  const Example6 = () => {
    // Spread
    
    type Numbers = number[];

    const numbers: Numbers = [17, 37, 74, 2, 8218, 27];
  
    console.log(Math.max(...numbers)); // 8281

    return <></>;
  };`;
  // Spread
  type Numbers = number[];

  const numbers: Numbers = [17, 37, 74, 2, 8218, 27];

  console.log(Math.max(...numbers));

  return (
    <>
      <h3 className="text-lg font-bold mt-6 mb-4">Example 6</h3>

      <SyntaxHighlighter
        language="javascript"
        showLineNumbers={true}
        style={myDark ? dark : github}
      >
        {codeString}
      </SyntaxHighlighter>
    </>
  );
};

const Example7: React.FC<Props> = ({ myDark }) => {
  const codeString = `  const Example1 = () => {
    // Rest operator packing
  
    function sum(...numbers: number[]) {
      console.log(numbers); // [3, 4, 5, 6]
  
      let result = 0;
      for (let num of numbers) {
        result += num;
      }
  
      return result;
    }
  
    console.log(sum(3, 4, 5, 6)); // 18
  
    return <></>;
  };`;
  // Rest operator packing

  function sum(...numbers: number[]) {
    console.log(numbers);

    let result = 0;
    for (let num of numbers) {
      result += num;
    }

    return result;
  }

  console.log(sum(3, 4, 5, 6));

  return (
    <>
      <h3 className="text-lg font-bold mt-6 mb-4">Example 1</h3>

      <SyntaxHighlighter
        language="javascript"
        showLineNumbers={true}
        style={myDark ? dark : github}
      >
        {codeString}
      </SyntaxHighlighter>
    </>
  );
};

const Example8: React.FC<Props> = ({ myDark }) => {
  const codeString = `  const Example2 = () => {
    // Rest
  
    function sum(number1: number, number2: number, ...numbers: number[]) {
      console.log(number1, number2, numbers); // 3, 4, [5, 6]
  
      let result = 0;
      for (let num of numbers) {
        result += num;
      }
  
      return result;
    }
  
    console.log(sum(3, 4, 5, 6)); // 11
  
    return <></>;
  };`;
  // Rest

  function sum(number1: number, number2: number, ...numbers: number[]) {
    console.log(number1, number2, numbers);

    let result = 0;
    for (let num of numbers) {
      result += num;
    }

    return result;
  }

  console.log(sum(3, 4, 5, 6));

  return (
    <>
      <h3 className="text-lg font-bold mt-6 mb-4">Example 2</h3>

      <SyntaxHighlighter
        language="javascript"
        showLineNumbers={true}
        style={myDark ? dark : github}
      >
        {codeString}
      </SyntaxHighlighter>
    </>
  );
};

const Example9: React.FC<Props> = ({ myDark }) => {
  const codeString = `  const Example3 = () => {
    // Rest operator packing

    type Order = {
      productName: string;
      street: string;
      city: string;
    };
  
    const order:Order = {
      name: "Water bottle",
      street: "Hanuman Nagar",
      city: "Kota",
    };
  
    const { name, ...address } = order; 
  
    console.log(name, address);   // water bottle, {street:"Hanuman Nagar", city:"Kota"}
  
    return <></>;
  };`;
  // Rest operator packing

  type Order = {
    productName: string;
    street: string;
    city: string;
  };

  const order: Order = {
    productName: "Water bottle",
    street: "Hanuman Nagar",
    city: "Kota",
  };

  const { productName, ...address } = order;

  console.log(productName, address);

  return (
    <>
      <h3 className="text-lg font-bold mt-6 mb-4">Example 3</h3>

      <SyntaxHighlighter
        language="javascript"
        showLineNumbers={true}
        style={myDark ? dark : github}
      >
        {codeString}
      </SyntaxHighlighter>
    </>
  );
};
