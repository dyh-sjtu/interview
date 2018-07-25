@sleep
export default class DemoComponent {
	public name = 'dyh';
	public age = 23;
	
	desc() {
		console.log(this.name + ' is ' + this.age)
	}
}

function sleep() {
	console.log('组件被实例化了')
}

let demoComponent1 = new DemoComponent();
console.log(demoComponent1.desc());