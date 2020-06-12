const inquirer = require('inquirer');

const tailwind = require('./frameworks/tailwind');

inquirer
  .prompt([
    {
      type: 'list',
      name: 'type',
      message: 'What do you want to do?',
      choices: [
        'Tailwind'
      ]
    }
  ])
  .then(({type}) => {
    switch(type.toLowerCase()) {
        case 'tailwind':
            tailwind();
        break
    }
  });