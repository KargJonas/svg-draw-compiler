function Generate(transformed) {
  const elements = [];

  transformed.map(el => {
    const attributes = Object
      .entries(el.attr)
      .map(attribute => {
        return `${ attribute[0] }="${ attribute[1] }"`
      })
      .join("");

    elements.push(`<${el.tagName} ${attributes} />`);
  });

  return elements.join("");
}

export default Generate;