function Ast(tokens) {
  const tree = [];

  function consume(amount = 1, subtract = true) {
    let items = [];

    if (subtract) {
      for (let i = 0; i < amount; i++) {
        items.push(tokens.shift());
      }
    } else {
      items = tokens.slice(0, amount);
    }

    return items;
  }

  while (tokens.length) {
    const token = tokens.shift();

    const expression = {
      type: undefined,
      args: [],
      // fill: "#ffffff",
      // stroke: "#000000",
      // weight: "4px"
    };

    if (token.type === "word") {
      switch (token.raw) {
        case "circle":
          expression.type = "circle";
          expression.args.push(...consume(3));

          // if (consume(1, false)[0].type === "color") {
          //   expression.args.push(consume());
          // }
          break;

        case "line":
          expression.type = "line";
          expression.args.push(...consume(4));
          break;

        default:
          throw new Error(`Unexpected identifier "${ token.raw }" @ line ${ token.line }.`);
      }
    }

    if (!expression.type) {
      throw new Error(`Syntax error @ line ${ token.line }.`);
    }

    tree.push(expression);
  }

  return tree;
}

export default Ast;