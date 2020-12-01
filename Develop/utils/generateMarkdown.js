// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ![badge](https://img.shields.io/badge/license-${response.license}-red);



  `
}

module.exports = generateMarkdown;
