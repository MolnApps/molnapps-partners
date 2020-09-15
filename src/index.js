//import './Partners.scss';
import Partners from './Partners.js'

let myHeader = new Partners

document.addEventListener("DOMContentLoaded", () => {
	console.log('attach partners')
	myHeader.attach()
});

export default myHeader