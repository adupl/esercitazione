const pages = [
  {
    output: './index.html',
    content: {
      title: 'Home',
      description: 'Home Page'
    },
    template: './src/pages/home.hbs'
  },
	{
		output: './components.html',
		content: {
			title: 'Components',
			description: 'Components'
		},
		template: './src/pages/components.hbs'
	}
];

module.exports = pages;
