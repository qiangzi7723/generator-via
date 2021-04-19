var Generator = require("yeoman-generator");

module.exports = class extends Generator {
	paths() {
		this.sourceRoot(); //设置常用工作路径
	}

	initializing() {
		this.context = {};
	}

	prompting() {
		return this.prompt([
			{
				type: "input",
				name: "name",
				message: "请输入项目名称",
			},
		]).then((answers) => {
			this.context.name = answers.name;
		});
	}

	writing() {
		this.fs.copyTpl(
			this.templatePath("index.html"),
			this.destinationPath(`${this.context.name}/index.html`),
			{ title: this.context.name }
		);
	}
};
