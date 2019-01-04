function Lexer(input) {
  let rawTokens = input
    .split(/\s/)
    .filter(token => token.trim());

  const tokens = [];
  let line = 1;

  while (rawTokens.length) {
    const token = rawTokens.shift();
    const obj = {
      raw: token,
      type: undefined,
      line
    };

    // Eliminating newlines & counting lines
    if (token === "\n") {
      line++;
      continue;
    }

    // Eliminating whitespace
    // if (/\s/.test(token)) {
    //   continue;
    // }

    // Classifying all other tokens
    if (/^[0-9]*\.{0,1}[0-9]+$/.test(token)) {
      obj.type = "number";
    } else if (/^\w+$/.test(token)) {
      obj.type = "word";
    } else if (/^#[0-9a-fA-F]{3,6}$/) {
      obj.type = "color";
    }

    if (!obj.type) {
      throw new Error(`Unexpected token @ line ${obj.line}.`);
    }

    tokens.push(obj);
  }

  return tokens;
}

export default Lexer;