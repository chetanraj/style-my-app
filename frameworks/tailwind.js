const spawn = require('cross-spawn');


const tailwind = () => {
    terminal();
    installMainDependency('tailwindcss')
    .then(() => {
      console.log();
      console.log();
    })
}

const installMainDependency = (dependencies) => {

    return new Promise((resolve, reject) => {
      console.log();
      console.log();
      console.log('Installing tailwindcss..');
      console.log();
      let command = 'npm';

      args = [
          'install',
          '--save',
          '--save-exact',
          '--loglevel',
          'error',
        ].concat(dependencies);
  
  
        const child = spawn(command, args, { stdio: 'inherit' });
  
        child.on('close', code => {
          if (code !== 0) {
            return;
          }

          resolve();
        });
    })

    
};

const terminal = () => {
  console.log('┌─────────────────────────────┐')
  console.log('│       Tailwind CSS          │')
  console.log('└─────────────────────────────┘')
}

module.exports = tailwind;