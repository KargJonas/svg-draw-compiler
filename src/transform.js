function Transform(ast) {
  const transformed = ast.map(exp => { // expression
    const tex = { // transformed expression
      tagName: exp.type,
      attr: {
        stroke: "#000",
        fill: "#aaa",
        "stroke-width": 4
      }
    };

    switch (exp.type) {
      case "circle":
        tex.attr.cx = exp.args.shift().raw;
        tex.attr.cy = exp.args.shift().raw;
        tex.attr.r = exp.args.shift().raw;
        // !! color
        break;

      case "line":
        tex.attr.x1 = exp.args.shift().raw;
        tex.attr.y1 = exp.args.shift().raw;
        tex.attr.x2 = exp.args.shift().raw;
        tex.attr.y2 = exp.args.shift().raw;
        break;
    }

    return tex;
  });

  return transformed;
}

export default Transform;