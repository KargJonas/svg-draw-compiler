import Lexer from "./lexer";
import Ast from "./ast";
import Transform from "./transform";
import Generate from "./generate";

function Compiler(input) {
  return (
    Generate(
      Transform(
        Ast(
          Lexer(
            input)))));
}

export default Compiler;